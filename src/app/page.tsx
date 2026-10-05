import Image from 'next/image';

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
);

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4.5 10.5 3.2 3.2 7.8-8" /></svg>
);

const Shield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5.5 5.5v5.8c0 4.2 2.5 7.6 6.5 9.7 4-2.1 6.5-5.5 6.5-9.7V5.5L12 3Z" /><path d="m9.2 12 1.8 1.8 3.8-4" /></svg>
);

type PrototypeScreenProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

function PrototypeScreen({ src, alt, className = '', priority = false }: PrototypeScreenProps) {
  return (
    <div className={`prototype-screen ${className}`.trim()}>
      <Image src={src} alt={alt} width={390} height={844} priority={priority} loading={priority ? undefined : 'eager'} sizes="(max-width: 620px) 68vw, 390px" />
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="logo-link" href="#inicio" aria-label="Tier Agro — página inicial">
          <Image src="/brand/tier-agro-dark.png" alt="Tier Agro" width={1810} height={647} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produto">Produto</a><a href="#oportunidades">Soluções</a><a href="#seguranca">Segurança</a><a href="#duvidas">Dúvidas</a>
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
          <p className="overline overline--light">GESTÃO DA SAFRA, SEM COMPLICAÇÃO</p>
          <h1>Sua operação inteira.<br /><em>Na palma da mão.</em></h1>
          <p>Produção, contratos, custos, caixa e oportunidades para você decidir com mais contexto, dentro ou fora da fazenda.</p>
          <div className="hero-actions">
            <a className="button" href="/criar-conta">Começar agora <Arrow /></a>
            <a className="text-action text-action--light" href="#produto">Conhecer o aplicativo <Arrow /></a>
          </div>
        </div>
        <div className="hero-product-real">
          <PrototypeScreen src="/images/app-home-real.png" alt="Tela inicial real do aplicativo Tier Agro" priority />
          <p>Interface real do aplicativo</p>
        </div>
        <p className="hero-index">SAFRA&nbsp;&nbsp;/&nbsp;&nbsp; CONTRATOS&nbsp;&nbsp;/&nbsp;&nbsp; CUSTOS&nbsp;&nbsp;/&nbsp;&nbsp; CAIXA</p>
      </section>

      <section className="intro content-section" id="produto">
        <div className="section-label"><span>01</span> UMA POSIÇÃO CLARA</div>
        <div className="intro-heading">
          <h2>Menos planilha.<br />Mais clareza para <em>decidir.</em></h2>
          <p>O Tier Agro organiza o que está espalhado e mostra a posição da safra sem exigir que você alimente mais um sistema complicado.</p>
        </div>
        <div className="real-product-story">
          <div className="real-product-copy">
            <span className="story-number">35,7%</span>
            <h3>Saiba quanto já vendeu — e quanto ainda está exposto.</h3>
            <p>Produção estimada, contratos confirmados, preço médio e referência disponível aparecem juntos. Você entende sua posição antes de tomar a próxima decisão comercial.</p>
            <ul><li><Check /> Volume vendido e sem preço</li><li><Check /> Preço médio dos contratos</li><li><Check /> Referência de mercado com fonte e horário</li></ul>
          </div>
          <PrototypeScreen src="/images/app-commercial-real.png" alt="Tela real de comercialização da safra no Tier Agro" className="commercial-screen" />
          <p className="screen-note">Tela real do protótipo<br /><strong>Comercialização da safra</strong></p>
        </div>
      </section>

      <section className="field-story section-frame">
        <Image className="field-story-photo" src="/images/tier-agro-field-farmer.jpg" alt="Produtor rural consultando o Tier Agro ao lado de uma lavoura de milho" fill sizes="100vw" />
        <div className="story-card story-card--behind">
          <Image src="/brand/tier-agro-white.png" alt="Tier Agro" width={1810} height={647} />
          <h2>Decida com os seus números.</h2><p>Sem depender de memória, planilhas diferentes ou informações desatualizadas.</p>
        </div>
        <div className="story-card story-card--front">
          <p className="overline">A POSIÇÃO MUDA. A VISÃO ACOMPANHA.</p>
          <h3>Produção, vendas e caixa na mesma leitura.</h3><p>O que acontece em um contrato aparece na comercialização e na projeção de recebimentos.</p><a href="#como-funciona">Ver como funciona <Arrow /></a>
        </div>
      </section>

      <section className="flow content-section" id="como-funciona">
        <div className="section-label"><span>02</span> COMO FUNCIONA</div>
        <div className="flow-heading"><h2>Da primeira informação<br />à visão completa da <em>safra.</em></h2><p>Você começa com o essencial. O aplicativo organiza cada informação no lugar certo e mostra o que merece atenção.</p></div>
        <div className="flow-board flow-board--real">
          <div className="flow-phone-real"><PrototypeScreen src="/images/app-home-real.png" alt="Tela real de início do Tier Agro" /></div>
          <ol className="flow-list">
            <li><span>01</span><div><strong>Cadastre a fazenda e a safra</strong><p>Localização, área, cultura e produtividade criam a base da operação.</p></div></li>
            <li><span>02</span><div><strong>Envie contratos e custos</strong><p>Foto, PDF ou preenchimento manual. Você sempre confere antes de salvar.</p></div></li>
            <li><span>03</span><div><strong>Acompanhe a posição</strong><p>Produção, comercialização, custos e caixa passam a conversar entre si.</p></div></li>
            <li><span>04</span><div><strong>Veja o que pede ação</strong><p>O aplicativo aponta descasamentos, pendências e caminhos possíveis.</p></div></li>
          </ol>
          <p className="flow-proof">Esta é a tela real de início do protótipo — não uma ilustração genérica.</p>
        </div>
      </section>

      <section className="screens content-section">
        <div className="screens-copy">
          <div className="section-label"><span>03</span> FEITO PARA O CAMPO</div><h2>Telas reais.<br /><em>Dados que conversam.</em></h2><p>O que você vê aqui vem do protótipo do aplicativo: início, comercialização e comparação regional, com a linguagem e os componentes reais do produto.</p><a className="button button--dark" href="/criar-conta">Criar minha conta <Arrow /></a>
        </div>
        <div className="screen-stack screen-stack--real" aria-label="Telas reais do aplicativo Tier Agro">
          <PrototypeScreen src="/images/app-home-real.png" alt="Tela real inicial da safra" className="real-phone real-phone--one" />
          <PrototypeScreen src="/images/app-commercial-real.png" alt="Tela real de comercialização" className="real-phone real-phone--two" />
          <PrototypeScreen src="/images/app-regional-real.png" alt="Tela real de comparação regional de custos" className="real-phone real-phone--three" />
        </div>
      </section>

      <section className="opportunities" id="oportunidades">
        <div className="opportunities-head content-section">
          <div className="section-label"><span>04</span> ALÉM DA GESTÃO</div>
          <h2>Quando aparece uma necessidade,<br />o Tier Agro ajuda a abrir <em>o caminho.</em></h2>
          <p>Não é só acompanhar números. Com contexto e sua autorização, a plataforma aproxima a operação de soluções financeiras, comparações úteis e oportunidades estratégicas.</p>
        </div>

        <article className="opportunity-row opportunity-row--credit">
          <div className="opportunity-visual"><PrototypeScreen src="/images/app-credit-real.png" alt="Tela real para solicitar análise de crédito e capital" /></div>
          <div className="opportunity-copy">
            <p className="overline">CRÉDITO RURAL COM CONTEXTO</p>
            <h3>Menos formulário.<br />Mais informação para analisar.</h3>
            <p>Quando houver necessidade de custeio, investimento ou capital de giro, você autoriza o envio dos dados que já estão no aplicativo. A conversa começa com produção, vendas, custos e caixa organizados.</p>
            <p className="fine-print">O Tier Agro não promete limite, taxa ou aprovação automática. A análise é feita por especialista.</p>
          </div>
        </article>

        <article className="opportunity-row opportunity-row--compare">
          <div className="opportunity-copy">
            <p className="overline">ENTENDA SUA EFICIÊNCIA</p>
            <h3>Descubra onde seu custo está mais alto.</h3>
            <p>Compare seus custos com operações da mesma região e safra, sem expor quem participa. A comparação só aparece quando existe uma base suficiente para preservar o anonimato.</p>
            <ul><li><Check /> Dados agregados e anônimos</li><li><Check /> Região e safra comparáveis</li><li><Check /> Mediana e faixa — sem ranking de produtores</li></ul>
          </div>
          <div className="opportunity-visual"><PrototypeScreen src="/images/app-regional-real.png" alt="Tela real de comparação anônima de custos regionais" /></div>
        </article>

        <article className="opportunity-row opportunity-row--farm">
          <div className="opportunity-visual"><PrototypeScreen src="/images/app-sell-real.png" alt="Tela real para iniciar uma conversa privada sobre venda da operação" /></div>
          <div className="opportunity-copy">
            <p className="overline">COMPRA E VENDA COM DISCRIÇÃO</p>
            <h3>Sua fazenda não vira anúncio.</h3>
            <p>Manifeste interesse em vender uma propriedade, a operação inteira ou uma participação. A conversa começa de forma privada, com a Mountier, e seus dados só seguem com autorização.</p>
            <p>O mesmo relacionamento permitirá identificar oportunidades de compra para quem busca expandir — preservando a identidade das partes até o momento certo.</p>
          </div>
        </article>

        <article className="opportunity-row opportunity-row--market">
          <div className="opportunity-copy">
            <p className="overline">PRÓXIMA ETAPA: MERCADO</p>
            <div className="zero-commission"><strong>0%</strong><span>de comissão<br />para o produtor</span></div>
            <h3>Coloque sua produção no mercado e compare propostas.</h3>
            <p>Na evolução da plataforma, tradings, cooperativas, cerealistas e outros compradores poderão enviar propostas privadas. Você compara preço, volume, entrega e validade antes de seguir.</p>
            <p className="fine-print">O Mercado está previsto para uma fase posterior do produto. A Tier Agro não cobrará comissão do produtor pela negociação.</p>
          </div>
          <div className="opportunity-visual"><PrototypeScreen src="/images/app-market-real.png" alt="Tela real do protótipo futuro para comparar propostas de compradores" /></div>
        </article>
      </section>

      <section className="trust content-section" id="seguranca">
        <div className="trust-panel"><span className="trust-icon"><Shield /></span><div><div className="section-label section-label--light"><span>05</span> SEGURANÇA</div><h2>Os dados da sua operação<br />continuam sendo <em>seus.</em></h2></div><p>Crédito, comparação de custos, venda da operação e futuras propostas de compradores exigem finalidade clara e sua autorização.</p><ul><li><Check /> Acesso pessoal e protegido</li><li><Check /> Comparações sem identificar produtores</li><li><Check /> Compartilhamento só com consentimento</li></ul></div>
      </section>

      <section className="faq content-section" id="duvidas">
        <div><div className="section-label"><span>06</span> DÚVIDAS</div><h2>Antes de começar.</h2></div>
        <div className="faq-list">
          <details open><summary>O aplicativo oferece crédito rural?<span>+</span></summary><p>Você pode solicitar uma análise de crédito e capital usando o contexto que já cadastrou. O aplicativo não promete limite, taxa ou aprovação automática.</p></details>
          <details><summary>Outros produtores veem meus custos?<span>+</span></summary><p>Não. A comparação regional usa dados agregados e anônimos e só aparece quando existe uma quantidade suficiente de operações comparáveis.</p></details>
          <details><summary>Minha fazenda fica anunciada se eu quiser vender?<span>+</span></summary><p>Não. Na primeira versão, a manifestação é privada e inicia uma conversa com a Mountier. Nenhuma operação é publicada automaticamente.</p></details>
          <details><summary>A Tier Agro cobra comissão para vender a safra?<span>+</span></summary><p>Não. Na futura área Mercado, a Tier Agro terá comissão de 0% para o produtor. Essa experiência pertence a uma etapa posterior da plataforma.</p></details>
        </div>
      </section>

      <section className="final-cta section-frame" id="acesso">
        <div className="final-cta-glow" /><Image src="/brand/tier-agro-white.png" alt="Tier Agro" width={1810} height={647} /><p className="overline overline--light">A SUA SAFRA MAIS CLARA</p><h2>Leve a gestão da fazenda<br />com você.</h2><p>Organize sua operação hoje e construa acesso a decisões e oportunidades melhores amanhã.</p>
        <div className="final-actions"><a className="button" href="/criar-conta">Criar conta <Arrow /></a><a className="button button--glass" href="/entrar">Já tenho uma conta</a></div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/brand/tier-agro-dark.png" alt="Tier Agro" width={1810} height={647} /><p>Sua safra em números simples.</p></div>
        <div className="footer-links"><strong>Produto</strong><a href="#produto">Visão geral</a><a href="#como-funciona">Como funciona</a><a href="#oportunidades">Soluções</a></div>
        <div className="footer-links"><strong>Acesso</strong><a href="/entrar">Entrar</a><a href="/criar-conta">Criar conta</a><a href="mailto:contato@tieragro.com.br">Fale conosco</a></div>
        <div className="footer-bottom"><span>© 2026 Tier Agro. Todos os direitos reservados.</span><span>Privacidade · Termos de uso</span></div>
      </footer>
    </main>
  );
}
