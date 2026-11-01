import type { Metadata } from 'next';
import { LegalLayout } from '../legal-layout';

export const metadata: Metadata = { title: 'Suporte | Tier Agro', description: 'Canais de suporte do aplicativo Tier Agro.' };

export default function SupportPage() {
  return <LegalLayout eyebrow="Ajuda" title="Suporte Tier Agro">
    <p>Para relatar um problema, tirar dúvidas ou enviar uma sugestão, use Perfil e privacidade &gt; Suporte dentro do aplicativo. Esse caminho identifica sua conta e ajuda no atendimento.</p>
    <h2>Contato por e-mail</h2><p>Se você não conseguir entrar no aplicativo, escreva para <a href="mailto:contato@tieragro.com.br?subject=Suporte%20Tier%20Agro">contato@tieragro.com.br</a>. Inclua o modelo do celular, a versão do sistema e uma descrição do que aconteceu. Não envie senha, código de acesso ou documento sensível por e-mail.</p>
    <h2>Prazo de resposta</h2><p>As mensagens são analisadas em dias úteis e respondidas conforme a urgência e a complexidade.</p>
  </LegalLayout>;
}
