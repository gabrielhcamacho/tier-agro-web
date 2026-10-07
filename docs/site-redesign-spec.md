# Especificação do novo site Tier Agro

## Objetivo

Reconstruir o site institucional da Tier Agro como uma narrativa visual de produto premium, inspirada na arquitetura de experiência do Eventbeds, sem copiar seus ativos, sua identidade ou seu conteúdo. O novo site deve tornar a posição comercial e financeira da safra compreensível antes da leitura detalhada e demonstrar o aplicativo com telas reais.

O site deve comunicar uma sequência simples: a Tier organiza os dados da operação, mostra a posição da safra, ajuda o produtor a decidir e, com autorização, abre acesso a oportunidades.

## Princípios de direção

- Preservar a precisão do conteúdo atual e eliminar qualquer indicação de funcionalidades inexistentes.
- Usar produção, contratos, disponibilidade, preços, propostas, custos e caixa como matéria visual.
- Trocar o hero fotográfico por um ecossistema agrícola abstrato, mineral e tridimensional.
- Usar movimento para explicar relações e continuidade espacial, não como decoração.
- Alternar escala monumental, demonstração de produto, prova e confiança.
- Usar as telas reais do aplicativo como principal evidência visual.
- Garantir uma experiência completa com movimento reduzido, teclado e dispositivos móveis.

## Público e ação principal

O público principal é o produtor ou gestor que precisa entender a posição econômica da safra sem consolidar planilhas dispersas.

A ação principal é criar uma conta. A ação secundária é conhecer o aplicativo. O acesso para usuários existentes permanece visível, mas não compete com a conversão principal.

## Arquitetura da página

### 1 Navegação flutuante

Cabeçalho em cápsula, separado das bordas da janela, com fundo mineral translúcido. Contém logo, links Produto, Como funciona, Soluções e Segurança, além de Entrar, Criar conta e menu compacto em telas menores.

O cabeçalho reduz levemente a altura durante o scroll e adapta contraste sobre trechos escuros.

### 2 Hero ecossistema comercial

Primeira dobra com fundo quase branco e título monumental.

Conteúdo:

- Chamada: Gestão da safra sem complicação.
- Título: Sua safra mais clara.
- Texto: Produção, vendas, custos e caixa em uma única visão para decidir com segurança.
- Ação principal: Conhecer o aplicativo.
- Ação secundária: Criar conta.

O cenário é uma paisagem agrícola isométrica composta por talhões, silos, grãos, rotas e plataformas em tons de branco e cinza mineral. O celular com a tela inicial real emerge do centro inferior.

Pins comerciais:

- Produção 42.000 sc.
- Vendido 64,3%.
- Disponível 15.000 sc.
- Média R$ 114,20 por saca.
- Nova proposta R$ 113,80 por saca.

Um sexto indicador aparece durante o scroll: R$ 1,80 por saca acima da referência regional.

Movimento:

- Título revelado por máscara.
- Camadas do terreno com parallax curto e desacelerado.
- Pins entram em sequência de 50 a 70 ms.
- Celular sobe com escala entre 0,96 e 1.
- O conteúdo deve permanecer totalmente compreensível sem animação.

### 3 Declaração de valor

Seção editorial com bastante espaço negativo.

Título: Menos planilha. Mais clareza para decidir.

Texto: O Tier Agro organiza o que está espalhado e mostra a posição da safra sem exigir outro sistema complicado.

Uma linha de dados conecta produção estimada, contratos, custos e caixa e termina em uma posição consolidada.

### 4 Três telas conectadas

Seção sticky de demonstração com três mockups reais:

1. Tela inicial da safra.
2. Posição de comercialização.
3. Caixa e projeção.

Os telefones entram por planos diferentes e formam um conjunto. O central domina a composição; os laterais usam rotação suave. Durante o scroll, pequenos indicadores se destacam das telas, mas nenhum dado é inventado.

Mensagem: Produção, venda e caixa. Tudo na mesma conversa.

### 5 Posição da safra

Momento visual dedicado ao indicador de 64,3 por cento vendido. Um silo abstrato e uma massa de grãos representam o volume total; a divisão entre vendido e disponível é visível sem depender do texto.

Dados apresentados:

- Produção estimada 42.000 sc.
- 64,3 por cento vendido.
- 15.000 sc sem preço.
- Preço médio R$ 114,20.
- Referência R$ 112,40.

Mensagem: Saiba quanto já vendeu e quanto ainda está exposto.

### 6 Como funciona

Celular fixo à esquerda e quatro etapas que avançam à direita:

1. Cadastre fazenda e safra.
2. Envie contratos e custos.
3. Acompanhe a posição.
4. Veja o que pede ação.

A tela do celular muda visualmente conforme a etapa ativa. No mobile, a experiência vira sequência vertical e não depende de sticky.

### 7 Núcleo econômico da operação

Objeto central inspirado em um conjunto de silos e grãos, cercado por seis dimensões reais do produto:

- Produção estimada.
- Contratos.
- Comercialização.
- Custos.
- Caixa.
- Referência regional.

O objetivo é explicar que a Tier conecta os dados econômicos da operação. Plantas, clima, umidade, sensores e sanidade não aparecem.

### 8 Oportunidades

Grade bento assimétrica com hierarquia clara:

- Mercado da safra como card principal.
- Crédito rural com contexto.
- Comparação regional anônima.
- Oportunidade tributária com validação especializada.
- Conversa privada sobre compra ou venda de propriedades.

Mensagem de abertura: Quando os dados estão organizados, novas possibilidades aparecem.

Cards devem usar tamanhos, fundos e direções diferentes. Evitar cinco cartões iguais.

### 9 Mercado da safra

Seção verde muito escura com 0 por cento em escala monumental.

Conteúdo:

- Zero por cento de taxa de intermediação na venda da soja.
- Comparação de preço, volume, entrega e validade.
- Propostas privadas de tradings, cooperativas, cerealistas e compradores.
- Decisão permanece com o produtor.

Cards de propostas percorrem a composição enquanto a tela real do mercado permanece legível.

### 10 Segurança e controle

Seção sóbria com fundo mineral escuro. Mensagem principal: Os dados da sua operação continuam sendo seus.

Compromissos:

- Acesso pessoal e protegido.
- Comparações sem identificar produtores.
- Compartilhamento somente com consentimento.
- Finalidade clara para cada solicitação.

O movimento deve ser discreto, sem parallax decorativo.

### 11 Prova e confiança

Reservar espaço para métricas, parceiros e depoimentos reais. Até que existam dados aprovados, não publicar números, marcas ou pessoas fictícias. A implementação inicial usa um bloco de confiança baseado em processos verificáveis e marca os espaços futuros sem exibi-los como prova.

### 12 Dúvidas

Manter respostas sobre crédito, anonimização de custos, venda de propriedade e taxa de intermediação. A apresentação deve ser uma lista editorial com expansão progressiva e foco visível.

### 13 Chamada final e rodapé

Mensagem: Leve a gestão da fazenda com você.

Ações: Criar conta e Entrar.

Rodapé simplificado com navegação essencial, contato, privacidade, termos e marca.

## Sistema visual

### Cores

- Fundo principal mineral: #F1F2EE.
- Branco de superfície: #F8F9F5.
- Verde quase preto: #073D32.
- Verde médio: #176647.
- Verde vivo para indicadores: #9FE870.
- Texto principal: #10211C.
- Texto secundário: #64716C.
- Linhas e relevo: #D8DDD6.

O verde vivo é um sinal de informação e ação, não um preenchimento dominante.

### Tipografia

Usar uma sans-serif de caráter contemporâneo para interface e títulos, com números tabulares. Títulos monumentais usam peso alto, tracking negativo e linhas curtas. Texto corrido limita-se a aproximadamente 65 caracteres por linha.

### Superfícies

- Cenários com relevo e iluminação superior esquerda.
- Sombras tingidas de verde escuro.
- Bordas internas claras nos elementos translúcidos.
- Raios maiores nos ambientes e menores dentro das interfaces.
- Ruído visual muito sutil para evitar aparência estéril.

## Sistema de movimento

- Entrada e saída: cubic-bezier(0.23, 1, 0.32, 1).
- Movimento em tela: cubic-bezier(0.77, 0, 0.175, 1).
- Interações de botões: 140 a 200 ms.
- Revelações editoriais: 500 a 800 ms.
- Usar transform e opacity como propriedades principais.
- Interações repetíveis usam transições, não keyframes que reiniciam.
- Hover somente para ponteiro preciso.
- prefers-reduced-motion remove deslocamentos e mantém opacidade curta.

## Responsividade

### Desktop

Composição imersiva, sobreposições, sticky e parallax. Largura máxima de conteúdo entre 1.340 e 1.520 pixels.

### Tablet

Reduzir profundidade e sobreposição. Manter os três dispositivos, mas diminuir rotações e distância lateral.

### Mobile

- Título entre 15 e 18 caracteres por linha.
- Cenário simplificado sem elementos essenciais fora da tela.
- Pins reduzidos a três indicadores.
- Mockups em pilha vertical.
- Sem sticky prolongado.
- Botões com alvo mínimo de 44 pixels.
- Nenhum texto embutido em imagem como única fonte de informação.

## Acessibilidade e desempenho

- Link para pular ao conteúdo.
- Ordem semântica independente da posição visual.
- Foco visível em todos os elementos interativos.
- Contraste WCAG AA.
- Alt text descritivo nas telas reais.
- Cenários decorativos ignorados por leitores de tela.
- Imagens responsivas em AVIF ou WebP quando aplicável.
- Carregar apenas os recursos da primeira dobra com prioridade.
- Não adicionar biblioteca de animação se CSS e APIs nativas resolverem.
- Manter estabilidade visual durante o carregamento.

## Critérios de aceite

- O estado atual está preservado no histórico remoto antes da reforma.
- O hero não comunica funcionalidades agronômicas inexistentes.
- Os cinco indicadores principais do hero refletem dados reais mostrados no aplicativo.
- As três telas reais aparecem em uma composição narrativa.
- Mercado, crédito, comparação, tributário e propriedade estão subordinados à base de gestão.
- Desktop e mobile não apresentam cortes, sobreposições ilegíveis ou rolagem horizontal.
- Movimento reduzido mantém o conteúdo completo.
- Typecheck, lint e build terminam sem erro.
- A página é revisada visualmente em desktop e mobile antes do push final.
