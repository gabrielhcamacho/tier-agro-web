'use client';
import { useState } from 'react';
import type { HomeResponse, OnboardingInput } from '@tier-agro/contracts';
type Step = 'welcome' | 'property' | 'crop' | 'result' | 'home';
type OnboardingResponse = {
  organizationId: string;
  operationId: string;
  cropCycleId: string;
  home: HomeResponse;
};
function isOnboardingResponse(value: unknown): value is OnboardingResponse {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.organizationId === 'string' &&
    typeof item.operationId === 'string' &&
    typeof item.cropCycleId === 'string' &&
    !!item.home &&
    typeof item.home === 'object'
  );
}
const api = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1';
const initial: OnboardingInput = {
  organizationName: 'Grupo Santa Rita',
  operationName: 'Operação Santa Rita',
  property: {
    name: 'Fazenda Santa Rita',
    municipality: 'Sorriso',
    municipalityCode: '5107925',
    stateCode: 'MT',
    totalAreaHa: 1200,
    possessionType: 'OWNED',
    carNumber: '',
  },
  cropCycle: {
    commodityCode: 'SOYBEAN',
    seasonLabel: '2026/27',
    areaHa: 1200,
    yieldPerHa: 62,
    status: 'PLANNED',
  },
};
export function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [data, setData] = useState(initial);
  const [home, setHome] = useState<HomeResponse | null>(null);
  const [ids, setIds] = useState<{
    organizationId: string;
    operationId: string;
    cropCycleId: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const expected = data.cropCycle.areaHa * data.cropCycle.yieldPerHa;
  const finish = async () => {
    setLoading(true);
    setError('');
    try {
      const r = await fetch(`${api}/onboarding`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-idempotency-key': crypto.randomUUID(),
          'x-local-user-id': 'demo-producer',
        },
        body: JSON.stringify(data),
      });
      if (!r.ok)
        throw new Error('Não foi possível salvar agora. Confira os dados e tente novamente.');
      const out: unknown = await r.json();
      if (!isOnboardingResponse(out)) throw new Error('A API retornou uma resposta inválida.');
      setIds(out);
      setHome(out.home);
      setStep('result');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="shell">
      <header className="brand">
        <span className="mark">M</span>
        <span>Tier Agro</span>
      </header>
      <section className="phone">
        {step === 'welcome' && (
          <div className="screen">
            <div className="eyebrow">BEM-VINDO AO TIER AGRO</div>
            <h1>Veja como está sua safra e o que merece atenção.</h1>
            <p className="lead">
              Comece com poucos dados. Você verá a produção esperada e poderá completar sua posição
              no seu ritmo.
            </p>
            <ol className="steps">
              <li>
                <b>1</b>
                <span>
                  <strong>Sua propriedade</strong>
                  <small>Nome, município e área</small>
                </span>
              </li>
              <li>
                <b>2</b>
                <span>
                  <strong>Sua safra</strong>
                  <small>Área e produtividade</small>
                </span>
              </li>
              <li>
                <b>3</b>
                <span>
                  <strong>Seus contratos</strong>
                  <small>Foto ou PDF, você confere</small>
                </span>
              </li>
            </ol>
            <button onClick={() => setStep('property')}>Começar</button>
          </div>
        )}
        {step === 'property' && (
          <div className="screen">
            <Back onClick={() => setStep('welcome')} />
            <div className="eyebrow">PASSO 1 DE 2</div>
            <h1>Sua propriedade</h1>
            <Field
              label="Nome da propriedade"
              value={data.property.name}
              onChange={(v) => setData({ ...data, property: { ...data.property, name: v } })}
            />
            <div className="grid">
              <Field
                label="Município"
                value={data.property.municipality}
                onChange={(v) =>
                  setData({ ...data, property: { ...data.property, municipality: v } })
                }
              />
              <Field
                label="UF"
                value={data.property.stateCode}
                maxLength={2}
                onChange={(v) =>
                  setData({ ...data, property: { ...data.property, stateCode: v.toUpperCase() } })
                }
              />
            </div>
            <Field
              label="Área total (ha)"
              type="number"
              value={String(data.property.totalAreaHa)}
              onChange={(v) =>
                setData({ ...data, property: { ...data.property, totalAreaHa: Number(v) } })
              }
            />
            <label className="field">
              <span>Tipo de posse</span>
              <select
                value={data.property.possessionType}
                onChange={(e) =>
                  setData({
                    ...data,
                    property: {
                      ...data.property,
                      possessionType: e.target
                        .value as OnboardingInput['property']['possessionType'],
                    },
                  })
                }
              >
                <option value="OWNED">Própria</option>
                <option value="LEASED">Arrendada</option>
                <option value="PARTNERSHIP">Parceria</option>
                <option value="OTHER">Outra</option>
              </select>
            </label>
            <button onClick={() => setStep('crop')}>Continuar</button>
          </div>
        )}
        {step === 'crop' && (
          <div className="screen">
            <Back onClick={() => setStep('property')} />
            <div className="eyebrow">PASSO 2 DE 2</div>
            <h1>Sua primeira safra</h1>
            <label className="field">
              <span>Cultura</span>
              <select
                value={data.cropCycle.commodityCode}
                onChange={(e) =>
                  setData({
                    ...data,
                    cropCycle: {
                      ...data.cropCycle,
                      commodityCode: e.target
                        .value as OnboardingInput['cropCycle']['commodityCode'],
                    },
                  })
                }
              >
                <option value="SOYBEAN">Soja</option>
                <option value="CORN">Milho</option>
                <option value="COTTON">Algodão</option>
                <option value="WHEAT">Trigo</option>
                <option value="COFFEE">Café</option>
              </select>
            </label>
            <Field
              label="Safra / ciclo"
              value={data.cropCycle.seasonLabel}
              onChange={(v) =>
                setData({ ...data, cropCycle: { ...data.cropCycle, seasonLabel: v } })
              }
            />
            <div className="grid">
              <Field
                label="Área cultivada (ha)"
                type="number"
                value={String(data.cropCycle.areaHa)}
                onChange={(v) =>
                  setData({ ...data, cropCycle: { ...data.cropCycle, areaHa: Number(v) } })
                }
              />
              <Field
                label="Produtividade (sc/ha)"
                type="number"
                value={String(data.cropCycle.yieldPerHa)}
                onChange={(v) =>
                  setData({ ...data, cropCycle: { ...data.cropCycle, yieldPerHa: Number(v) } })
                }
              />
            </div>
            <div className="estimate">
              <span>Produção estimada</span>
              <strong>
                {expected.toLocaleString('pt-BR')} <small>sc</small>
              </strong>
              <small>
                {data.cropCycle.areaHa.toLocaleString('pt-BR')} ha ×{' '}
                {data.cropCycle.yieldPerHa.toLocaleString('pt-BR')} sc/ha
              </small>
            </div>
            {error && <p className="error">{error}</p>}
            <button
              disabled={loading}
              onClick={() => {
                void finish();
              }}
            >
              {loading ? 'Salvando…' : 'Ver minha produção'}
            </button>
          </div>
        )}
        {step === 'result' && home && (
          <div className="screen result">
            <div className="success">✓</div>
            <div className="eyebrow">PRIMEIRO RESULTADO</div>
            <h1>Sua produção estimada</h1>
            <div className="hero-number">
              {Number(home.production.expectedQuantity).toLocaleString('pt-BR')}
              <small> sc</small>
            </div>
            <p>
              Com base na área e produtividade informadas. Este valor é estimado e pode ser ajustado
              depois.
            </p>
            <button onClick={() => setStep('home')}>Ir para o Início</button>
          </div>
        )}
        {step === 'home' && home && (
          <div className="screen home">
            <div className="home-head">
              <span>
                <small>{data.property.name}</small>
                <h2>{data.cropCycle.seasonLabel}</h2>
              </span>
              <span className="avatar">GS</span>
            </div>
            <div className="balance">
              <small>Produção estimada</small>
              <strong>
                {Number(home.production.expectedQuantity).toLocaleString('pt-BR')}
                <span> sc</span>
              </strong>
              <em>Estimado</em>
            </div>
            <section className="card">
              <div className="card-title">
                <h3>Sua safra no app</h3>
                <small>1 de 4 completo</small>
              </div>
              <Coverage label="Produção" state="Cadastrada" done />
              <Coverage label="Comercialização" state="Sem contratos" />
              <Coverage label="Custos" state="Não iniciado" />
              <Coverage label="Caixa" state="Sem movimentos" />
            </section>
            <section className="card action">
              <span className="icon">＋</span>
              <div>
                <h3>Adicione seu primeiro contrato</h3>
                <p>Veja quanto da safra já está vendido e a que preço.</p>
              </div>
            </section>
            <nav>
              <b>Início</b>
              <span>Safra</span>
              <span>Caixa</span>
              <span>Documentos</span>
              <span>Mais</span>
            </nav>
          </div>
        )}
      </section>
      <aside className="context">
        <div className="eyebrow">SLICE 1</div>
        <h2>Primeira posição útil</h2>
        <p>Conta → organização → operação → propriedade → safra → produção estimada → Início.</p>
        <p className="muted">
          Os dados são salvos pela API de domínio. O navegador nunca acessa o banco diretamente.
        </p>
        {ids && <code>{ids.operationId}</code>}
      </aside>
    </main>
  );
}
function Field({
  label,
  value,
  onChange,
  type = 'text',
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  maxLength?: number;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
function Back({ onClick }: { onClick: () => void }) {
  return (
    <button className="back" onClick={onClick} aria-label="Voltar">
      ‹
    </button>
  );
}
function Coverage({
  label,
  state,
  done = false,
}: {
  label: string;
  state: string;
  done?: boolean;
}) {
  return (
    <div className="coverage">
      <i className={done ? 'done' : ''}>{done ? '✓' : '○'}</i>
      <span>{label}</span>
      <small>{state}</small>
    </div>
  );
}
