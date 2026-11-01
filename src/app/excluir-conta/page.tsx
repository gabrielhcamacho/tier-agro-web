import type { Metadata } from 'next';
import { LegalLayout } from '../legal-layout';

export const metadata: Metadata = { title: 'Excluir conta | Tier Agro', description: 'Como solicitar a exclusão da conta e dos dados no Tier Agro.' };

export default function DeleteAccountPage() {
  return <LegalLayout eyebrow="Conta e dados" title="Solicitar exclusão da conta">
    <h2>Pelo aplicativo</h2><ol><li>Entre na sua conta.</li><li>Abra Mais e depois Conta e privacidade.</li><li>Acesse Privacidade e solicite o encerramento da conta.</li><li>Acompanhe o andamento da solicitação no próprio aplicativo.</li></ol>
    <h2>Sem acesso ao aplicativo</h2><p>Envie a solicitação a partir do e-mail usado na conta para <a href="mailto:contato@tieragro.com.br?subject=Exclus%C3%A3o%20de%20conta%20Tier%20Agro">contato@tieragro.com.br</a>. Podemos pedir uma confirmação de identidade antes de executar a exclusão.</p>
    <h2>O que acontece</h2><p>O acesso é encerrado e os dados são excluídos ou anonimizados, exceto registros que precisem ser mantidos por obrigação legal, prevenção de fraude, auditoria ou exercício regular de direitos. O atendimento informará quando a solicitação for concluída.</p>
  </LegalLayout>;
}
