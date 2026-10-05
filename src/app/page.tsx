import Image from 'next/image';

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
);

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4.5 10.5 3.2 3.2 7.8-8" /></svg>
);

const Sprout = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21V10m0 2C8 12 5.5 9.8 5 6c4 0 6.5 2.2 7 6Zm0-3c.5-4.2 3.2-6.6 7.5-6.6-.4 4.1-3.1 6.2-7.5 6.6Z" /></svg>
);

const Contract = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h7l3 3V20H7V3.5Zm7 0V7h3M9.5 11h5m-5 3h5m-5 3h3" /></svg>
);

const Chart = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V9m7 10V5m7 14v-7M3 19.5h18" /></svg>
);

const Shield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5.5 5.5v5.8c0 4.2 2.5 7.6 6.5 9.7 4-2.1 6.5-5.5 6.5-9.7V5.5L12 3Z" /><path d="m9.2 12 1.8 1.8 3.8-4" /></svg>
);

const AppPreview = ({ compact = false }: { compact?: boolean }) => (
  <div className={`app-preview${compact ? ' app-preview--compact' : ''}`} aria-label="Prévia do aplicativo Tier Agro">
    <div className="phone-speaker" />
    <div className="app-topline">
      <span><small>Bom dia, Gabriel</small><strong>Safra 2026/27</strong></span>
      <span className="app-avatar">GS</span>
    </div>
    <div className="app-production">
      <small>PRODUÇÃO ESTIMADA</small>
      <strong>48.000 <span>sacas</span></strong>
      <div className="app-progress"><i /></div>
      <div className="app-production-row"><span>32% comercializado</span><b>15.360 sc</b></div>
    </div>
    <div className="app-grid">
      <div><span className="mini-icon"><Sprout /></span><small>Safra</small><strong>800 ha</strong></div>
      <div><span className="mini-icon"><Contract /></span><small>Contratos</small><strong>4 ativos</strong></div>
    </div>
    <div className="app-cash">
      <span><small>Posição da safra</small><strong>R$ 3,84 mi</strong></span><span className="trend">+ 8,4%</span>
    </div>
    {!compact && <div className="app-tabs"><span className="active"><i>●</i>Início</span><span><i>◇</i>Safra</span><span><i>□</i>Contratos</span><span><i>○</i>Conta</span></div>}
  </div>
);

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="logo-link" href="#inicio" aria-label="Tier Agro — página inicial">
          <Image src="/brand/tier-agro-dark.png" alt="Tier Agro" width={1810} height={647} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produto">Produto</a><a href="#como-funciona">Como funciona</a><a href="#seguranca">Segurança</a><a href="#duvidas">Dúvidas</a>
        </nav>
        <div className="header-actions">
          <a className="text-link" href="/entrar">Entrar</a>
          <a className="button button--small" href="/criar-conta">Criar conta <Arrow /></a>
        </div>
      </header>

      <section className="hero section-frame" id="inicio">
        <Image className="hero-photo" src="/images/tier-agro-hero-farmer.jpg" alt="Produtor acompanhando sua operação pelo celular em uma lavoura" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="pill pill--glass">GESTÃO DA SAFRA, SEM COMPLICAÇÃO</span>
          <h1>Sua operação inteira.<br /><em>Na palma da mão.</em></h1>
          <p>Produção, contratos, custos e caixa em uma visão simples para você decidir com segurança, dentro ou fora da fazenda.</p>
          <div className="hero-actions">
            <a className="button" href="/criar-conta">Começar agora <Arrow /></a>
            <a className="button button--glass" href="#produto">Conhecer o aplicativo</a>
          </div>
        </div>
        <div className="hero-product" aria-hidden="true">
          <AppPreview />
          <div className="float-card float-card--production"><span className="status-dot" /><small>PRODUÇÃO ESTIMADA</small><strong>48.000 sacas</strong><span>Safra 2026/27</span></div>
          <div className="float-card float-card--coverage"><small>COBERTURA COMERCIAL</small><div className="coverage-ring"><span>32%</span></div><span>15.360 sacas protegidas</span></div>
        </div>
        <div className="hero-tags" aria-label="Principais áreas do produto"><span>Safra</span><span>Contratos</span><span>Custos</span><span>Caixa</span></div>
      </section>

      <section className="intro content-section" id="produto">
        <div className="section-label"><span>01</span> O QUE MUDA</div>
        <div className="intro-heading">
          <h2>Menos planilha.<br />Mais clareza para <em>decidir.</em></h2>
          <p>O Tier Agro transforma as informações espalhadas da fazenda em uma visão objetiva da operação — o que foi produzido, vendido, gasto e o que ainda precisa da sua atenção.</p>
        </div>
        <div className="problem-map">
          <article className="problem-card"><span className="card-kicker card-kicker--warning">O PROBLEMA</span><h3>Os números ficam espalhados.</h3><p>Planilhas, PDFs, conversas e anotações dificultam enxergar a posição real da safra.</p></article>
          <div className="map-line map-line--left" />
          <article className="solution-card">
            <div className="solution-brand"><Image src="/brand/app-icon.png" alt="" width={52} height={52} /><span><small>A SOLUÇÃO</small><strong>Tier Agro</strong></span></div>
            <ul><li><Check /> Uma visão para toda a operação</li><li><Check /> Alertas do que merece atenção</li><li><Check /> Dados organizados por safra</li></ul>
          </article>
          <div className="map-line map-line--right" />
          <article className="problem-card problem-card--right"><span className="card-kicker card-kicker--warning">O RISCO</span><h3>A decisão chega atrasada.</h3><p>Sem comparar produção, contratos e custos, uma mudança de mercado pode passar despercebida.</p></article>
        </div>
      </section>

      <section className="field-story section-frame">
        <Image className="field-story-photo" src="/images/tier-agro-field-farmer.jpg" alt="Produtor rural consultando o Tier Agro ao lado de uma lavoura de milho" fill sizes="100vw" />
        <div className="story-card story-card--behind">
          <Image src="/brand/tier-agro-white.png" alt="Tier Agro" width={1810} height={647} />
          <h2>Decida com os seus números.</h2><p>Sem depender de memória, planilhas diferentes ou informações desatualizadas.</p>
        </div>
        <div className="story-card story-card--front">
          <span className="story-icon"><Chart /></span><h3>Uma posição que acompanha a safra.</h3><p>Produção, comercialização e caixa conectados para mostrar onde você está e o que vem pela frente.</p><a href="#como-funciona">Ver como funciona <Arrow /></a>
        </div>
      </section>

      <section className="flow content-section" id="como-funciona">
        <div className="section-label"><span>02</span> COMO FUNCIONA</div>
        <div className="flow-heading"><h2>Da primeira informação<br />à visão completa da <em>safra.</em></h2><p>Você começa com o essencial e evolui no seu ritmo. O aplicativo organiza cada informação no lugar certo.</p></div>
        <div className="flow-board">
          <div className="flow-phone"><AppPreview compact /></div>
          <ol className="flow-list">
            <li><span>01</span><div><strong>Cadastre sua fazenda</strong><p>Informe a localização, a área e a cultura para criar a base da operação.</p></div></li>
            <li><span>02</span><div><strong>Registre safra e contratos</strong><p>Centralize produção, vendas, preços e vencimentos em um só lugar.</p></div></li>
            <li><span>03</span><div><strong>Acompanhe o que importa</strong><p>Veja cobertura, custos, caixa e prioridades sempre atualizados.</p></div></li>
          </ol>
          <div className="flow-result"><span className="card-kicker">RESULTADO</span><strong>Uma decisão<br />mais bem informada.</strong><div className="result-metric"><span>Posição comercial</span><b>32%</b></div><div className="result-bar"><i /></div><small>Atualizado agora</small></div>
        </div>
      </section>

      <section className="screens content-section">
        <div className="screens-copy">
          <div className="section-label"><span>03</span> FEITO PARA O CAMPO</div><h2>O que você precisa ver.<br /><em>Sem ruído.</em></h2><p>Uma experiência direta, com linguagem simples e números que fazem sentido para a rotina da fazenda.</p><a className="button button--dark" href="/criar-conta">Criar minha conta <Arrow /></a>
        </div>
        <div className="screen-stack" aria-label="Telas de safra, contratos e caixa do aplicativo">
          <div className="mini-phone mini-phone--one"><span className="mini-phone-notch" /><small>SAFRA 2026/27</small><h3>Sua safra no app</h3><div className="metric-tile"><span><Sprout /></span><b>48.000</b><small>sacas estimadas</small></div><div className="metric-line"><span>Área plantada</span><b>800 ha</b></div><div className="metric-line"><span>Produtividade</span><b>60 sc/ha</b></div></div>
          <div className="mini-phone mini-phone--two"><span className="mini-phone-notch" /><small>CONTRATOS</small><h3>Posição comercial</h3><div className="big-percentage">32<small>%</small></div><div className="circle-chart"><i /></div><div className="contract-row"><span>Cooperativa Norte<small>Soja • 8.000 sc</small></span><b>Ativo</b></div><div className="contract-row"><span>Cerealista Vale<small>Soja • 7.360 sc</small></span><b>Ativo</b></div></div>
          <div className="mini-phone mini-phone--three"><span className="mini-phone-notch" /><small>CAIXA DA SAFRA</small><h3>Movimento previsto</h3><div className="cash-value">R$ 3,84 mi</div><div className="chart-bars"><i /><i /><i /><i /><i /><i /></div><div className="metric-line"><span>Receitas</span><b className="positive">R$ 5,2 mi</b></div><div className="metric-line"><span>Custos</span><b>R$ 1,36 mi</b></div></div>
        </div>
      </section>

      <section className="trust content-section" id="seguranca">
        <div className="trust-panel"><span className="trust-icon"><Shield /></span><div><div className="section-label section-label--light"><span>04</span> SEGURANÇA</div><h2>Os dados da sua operação<br />continuam sendo <em>seus.</em></h2></div><p>Acesso protegido, informações separadas por conta e controle de privacidade desde o primeiro cadastro.</p><ul><li><Check /> Acesso pessoal e protegido</li><li><Check /> Dados isolados por fazenda</li><li><Check /> Privacidade por padrão</li></ul></div>
      </section>

      <section className="faq content-section" id="duvidas">
        <div><div className="section-label"><span>05</span> DÚVIDAS</div><h2>Antes de começar.</h2></div>
        <div className="faq-list">
          <details open><summary>Preciso cadastrar tudo de uma vez?<span>+</span></summary><p>Não. Você começa com a fazenda e a safra atual, vê seu primeiro resultado e completa as demais informações no seu ritmo.</p></details>
          <details><summary>O Tier Agro serve para qualquer tamanho de operação?<span>+</span></summary><p>Sim. A estrutura acompanha desde uma propriedade até operações com mais de uma fazenda e diferentes safras.</p></details>
          <details><summary>Consigo acompanhar contratos e custos?<span>+</span></summary><p>Sim. O aplicativo reúne contratos, custos, comercialização e projeções de caixa na mesma visão da safra.</p></details>
          <details><summary>Meus dados ficam seguros?<span>+</span></summary><p>Sim. A plataforma foi estruturada para separar as informações de cada conta e proteger o acesso do usuário.</p></details>
        </div>
      </section>

      <section className="final-cta section-frame" id="acesso">
        <div className="final-cta-glow" /><Image src="/brand/tier-agro-white.png" alt="Tier Agro" width={1810} height={647} /><span className="pill pill--glass">A SUA SAFRA MAIS CLARA</span><h2>Leve a gestão da fazenda<br />com você.</h2><p>Comece com poucos dados e transforme a sua operação em decisões mais simples.</p>
        <div className="final-actions"><a className="button" href="/criar-conta">Criar conta <Arrow /></a><a className="button button--glass" href="/entrar">Já tenho uma conta</a></div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/brand/tier-agro-dark.png" alt="Tier Agro" width={1810} height={647} /><p>Sua safra em números simples.</p></div>
        <div className="footer-links"><strong>Produto</strong><a href="#produto">Visão geral</a><a href="#como-funciona">Como funciona</a><a href="#seguranca">Segurança</a></div>
        <div className="footer-links"><strong>Acesso</strong><a href="/entrar">Entrar</a><a href="/criar-conta">Criar conta</a><a href="mailto:contato@tieragro.com.br">Fale conosco</a></div>
        <div className="footer-bottom"><span>© 2026 Tier Agro. Todos os direitos reservados.</span><span>Privacidade · Termos de uso</span></div>
      </footer>
    </main>
  );
}
