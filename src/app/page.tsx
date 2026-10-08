import Image from 'next/image';
import ScrollMotion from './scroll-motion';

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>;
const Check = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10.5 3.2 3.2L16 5.5" /></svg>;

type PhoneProps = { src: string; alt: string; className?: string; priority?: boolean };
function Phone({ src, alt, className = '', priority = false }: PhoneProps) {
  return <div className={`phone ${className}`}><span className="phone__side phone__side--a"/><span className="phone__side phone__side--b"/><div className="phone__screen"><Image src={src} alt={alt} width={390} height={844} priority={priority} sizes="(max-width: 720px) 64vw, 390px"/><span className="phone__island"/></div></div>;
}

const metrics = [
  ['Produção', '42.000 sc', 'metric--production'], ['Vendido', '64,3%', 'metric--sold'],
  ['Disponível', '15.000 sc', 'metric--available'], ['Sua média', 'R$ 114,20/sc', 'metric--average'],
  ['Nova proposta', 'R$ 113,80/sc', 'metric--proposal'],
];

export default function Page() {
  return <main id="conteudo">
    <ScrollMotion />
    <a className="skip-link" href="#produto">Pular para o conteúdo</a>
    <header className="site-header" data-header>
      <a className="brand" href="#inicio" aria-label="Tier Agro, início"><Image src="/brand/tier-agro-dark.png" alt="Tier Agro" width={1810} height={647} priority /></a>
      <nav aria-label="Navegação principal"><a href="#produto">Produto</a><a href="#como-funciona">Como funciona</a><a href="#solucoes">Soluções</a><a href="#seguranca">Segurança</a></nav>
      <div className="header-actions"><a className="quiet-link" href="/entrar">Entrar</a><a className="button button--dark button--small" href="/criar-conta">Criar conta <Arrow /></a></div>
    </header>

    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__world" aria-hidden="true"><Image src="/images/tier-agro-commercial-world.png" alt="" fill priority sizes="100vw" /></div>
      <div className="hero__copy">
        <p className="eyebrow" data-reveal="rise">Gestão da safra, sem complicação</p>
        <h1 id="hero-title"><span>Sua safra</span><span>mais clara.</span></h1>
        <p className="hero__intro" data-reveal="rise">Produção, vendas, custos e caixa em uma única visão para decidir com segurança.</p>
        <div className="hero__actions" data-reveal="rise"><a className="button button--dark" href="#produto">Conhecer o aplicativo <Arrow /></a><a className="text-action" href="/criar-conta">Criar conta <Arrow /></a></div>
      </div>
      <div className="hero__phone" data-hero-phone><Phone src="/images/site-home.png" alt="Tela inicial do aplicativo Tier Agro com produção, comercialização e caixa" priority /></div>
      <div className="hero__metrics" aria-label="Indicadores exibidos no aplicativo">{metrics.map(([label,value,className]) => <div className={`metric ${className}`} key={label}><i/><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="hero__benchmark">R$ 1,80/sc <span>acima da referência regional</span></div>
    </section>

    <section className="manifest section" id="produto">
      <div className="section-index" data-reveal="rise"><span>01</span> Uma posição clara</div>
      <div className="manifest__grid"><h2 data-reveal="rise">Menos planilha.<br/><em>Mais clareza</em><br/>para decidir.</h2><div data-reveal="rise"><p>O Tier Agro organiza o que está espalhado e mostra a posição da safra sem exigir que você alimente outro sistema complicado.</p><div className="data-thread"><span>Produção</span><i/><span>Contratos</span><i/><span>Custos</span><i/><span>Caixa</span></div></div></div>
    </section>

    <section className="product-story section" aria-labelledby="story-title">
      <div className="product-story__copy" data-reveal="rise"><div className="section-index"><span>02</span> Tudo conectado</div><h2 id="story-title">Produção, venda e caixa.<br/><em>Tudo na mesma conversa.</em></h2><p>As informações importantes permanecem próximas. Você entende a posição antes de tomar a próxima decisão comercial.</p></div>
      <div className="phone-stage" data-phone-stage>
        <div className="phone-wrap phone-wrap--left"><Phone src="/images/site-commercial.png" alt="Tela de comercialização da safra" /></div>
        <div className="phone-wrap phone-wrap--center"><Phone src="/images/site-home.png" alt="Tela inicial da safra" /></div>
        <div className="phone-wrap phone-wrap--right"><Phone src="/images/site-cash.png" alt="Tela de caixa e projeção" /></div>
        <span className="screen-note screen-note--one">Produção estimada</span><span className="screen-note screen-note--two">Posição comercial</span><span className="screen-note screen-note--three">Caixa projetado</span>
      </div>
    </section>

    <section className="process section" id="como-funciona">
      <div className="process__intro" data-reveal="rise"><div className="section-index"><span>03</span> Como funciona</div><h2>Da primeira informação<br/>à visão completa da <em>safra.</em></h2></div>
      <div className="process__board"><div className="process__phone"><Phone src="/images/site-contract.png" alt="Tela para conferência de contrato no Tier Agro" /></div><ol className="process__steps" data-reveal="stagger">
        <li><span>01</span><div><strong>Cadastre a fazenda e a safra</strong><p>Localização, área, cultura e produtividade criam a base da operação.</p></div></li>
        <li><span>02</span><div><strong>Envie contratos e custos</strong><p>Foto, PDF ou preenchimento manual. Você confere antes de salvar.</p></div></li>
        <li><span>03</span><div><strong>Acompanhe a posição</strong><p>Produção, comercialização, custos e caixa passam a conversar.</p></div></li>
        <li><span>04</span><div><strong>Veja o que pede ação</strong><p>O aplicativo aponta descasamentos, pendências e caminhos possíveis.</p></div></li>
      </ol></div>
    </section>

    <section className="solutions" id="solucoes">
      <div className="solutions__head section" data-reveal="rise"><div className="section-index"><span>04</span> Além da gestão</div><h2>Quando os dados estão organizados,<br/><em>novas possibilidades aparecem.</em></h2><p>Com contexto e sua autorização, a plataforma aproxima a operação de oportunidades sem tirar o controle das suas mãos.</p></div>
      <div className="bento section">
        <article className="bento-card bento-card--market" data-reveal="rise"><div><span className="card-label">Mercado da safra</span><h3>Compare propostas antes de vender.</h3><p>Preço, volume, entrega e validade em uma visão privada.</p></div><Phone src="/images/site-market.png" alt="Tela de propostas de compradores" /></article>
        <article className="bento-card bento-card--credit" data-reveal="rise"><span className="card-label">Crédito rural</span><h3>Menos formulário. Mais contexto.</h3><p>Use os dados organizados para iniciar uma análise de custeio, investimento ou capital de giro.</p><strong>Você escolhe o que compartilhar.</strong></article>
        <article className="bento-card bento-card--compare" data-reveal="rise"><span className="card-label">Eficiência</span><h3>Compare custos sem expor produtores.</h3><div className="range"><span>Faixa regional</span><i/><b>Você</b></div><p>Mediana e faixa de operações comparáveis, com base suficiente para preservar o anonimato.</p></article>
        <article className="bento-card bento-card--tax" data-reveal="rise"><span className="card-label">Tributário</span><strong>R$ 180 mil a<br/>R$ 240 mil</strong><p>Estimativa apresentada com análise especializada e confirmação técnica.</p></article>
        <article className="bento-card bento-card--farm" data-reveal="rise"><span className="card-label">Compra e venda com discrição</span><h3>Sua fazenda não vira anúncio.</h3><p>A conversa começa de forma privada e seus dados só seguem com autorização.</p></article>
      </div>
    </section>

    <section className="market" aria-labelledby="market-title">
      <div className="market__zero" aria-hidden="true">0%</div><div className="market__copy" data-reveal="rise"><p className="eyebrow">Próxima etapa: mercado</p><h2 id="market-title">Venda sua soja sem taxa de intermediação.</h2><p>Compare propostas privadas de tradings, cooperativas, cerealistas e outros compradores. A decisão permanece com você.</p><ul><li><Check/>Preço e volume</li><li><Check/>Entrega e validade</li><li><Check/>Nenhum valor descontado</li></ul></div>
      <div className="market__phone"><Phone src="/images/site-market.png" alt="Tela de comparação de propostas" /></div><div className="offer offer--one"><span>Grão Norte Cerealista</span><strong>R$ 113,80</strong><small>10.000 sacas · mar/2027</small></div><div className="offer offer--two"><span>Proposta privada</span><strong>R$ 114,10</strong><small>8.500 sacas · abr/2027</small></div>
    </section>

    <section className="trust section" id="seguranca"><div className="trust__copy" data-reveal="rise"><div className="section-index section-index--light"><span>05</span> Segurança e controle</div><h2>Os dados da sua operação continuam sendo <em>seus.</em></h2><p>Crédito, comparações, propriedade e propostas exigem finalidade clara e sua autorização.</p></div><ul className="trust__list" data-reveal="stagger"><li><span>01</span><strong>Acesso pessoal e protegido</strong></li><li><span>02</span><strong>Comparações sem identificar produtores</strong></li><li><span>03</span><strong>Compartilhamento só com consentimento</strong></li><li><span>04</span><strong>Finalidade clara em cada solicitação</strong></li></ul></section>

    <section className="faq section" id="duvidas"><div className="faq__title" data-reveal="rise"><div className="section-index"><span>06</span> Dúvidas</div><h2>Antes de começar.</h2></div><div className="faq__list">
      <details open><summary>O aplicativo oferece crédito rural?<span>+</span></summary><p>Você pode solicitar uma análise usando o contexto cadastrado. O aplicativo não promete limite, taxa ou aprovação automática.</p></details><details><summary>Outros produtores veem meus custos?<span>+</span></summary><p>Não. A comparação usa dados agregados e anônimos e só aparece quando há uma base suficiente de operações comparáveis.</p></details><details><summary>Minha fazenda fica anunciada se eu quiser vender?<span>+</span></summary><p>Não. A manifestação é privada e nenhuma operação é publicada automaticamente.</p></details><details><summary>A Tier Agro cobra comissão para vender a safra?<span>+</span></summary><p>Não. Nenhum valor é descontado da venda da soja pela Tier Agro.</p></details>
    </div></section>

    <section className="final-cta"><div data-reveal="rise"><Image src="/brand/tier-agro-white.png" alt="Tier Agro" width={1810} height={647}/><p className="eyebrow">A sua safra mais clara</p><h2>Leve a gestão da fazenda com você.</h2><p>Organize sua operação hoje e construa acesso a decisões e oportunidades melhores amanhã.</p><div><a className="button" href="/criar-conta">Criar conta <Arrow/></a><a className="button button--glass" href="/entrar">Já tenho uma conta</a></div></div></section>
    <footer><div className="footer__brand"><Image src="/brand/tier-agro-dark.png" alt="Tier Agro" width={1810} height={647}/><p>Sua safra em números simples.</p></div><div><strong>Produto</strong><a href="#produto">Visão geral</a><a href="#como-funciona">Como funciona</a><a href="#solucoes">Soluções</a></div><div><strong>Acesso</strong><a href="/entrar">Entrar</a><a href="/criar-conta">Criar conta</a><a href="mailto:contato@tieragro.com.br">Fale conosco</a></div><p className="footer__legal">© 2026 Tier Agro · Privacidade · Termos de uso</p></footer>
  </main>;
}
