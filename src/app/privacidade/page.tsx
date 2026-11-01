import type { Metadata } from 'next';
import { LegalLayout } from '../legal-layout';

export const metadata: Metadata = { title: 'Política de Privacidade | Tier Agro', description: 'Como a Tier Agro trata e protege os dados dos usuários do aplicativo.' };

export default function PrivacyPage() {
  return <LegalLayout eyebrow="Privacidade" title="Política de Privacidade">
    <p>Esta política explica como a Tier Agro trata dados pessoais e informações da operação rural quando você usa o aplicativo, o site ou solicita atendimento.</p>
    <h2>1. Dados tratados</h2><p>Podemos tratar dados de cadastro e contato, informações da propriedade e da safra, contratos, custos, projeções financeiras, documentos enviados, solicitações de serviços, registros de consentimento, suporte, segurança e uso técnico do aplicativo.</p>
    <h2>2. Para que usamos os dados</h2><p>Usamos os dados para autenticar sua conta, organizar a operação, calcular indicadores, processar documentos, atender solicitações, enviar avisos, prevenir fraude, manter a segurança e cumprir obrigações legais. Solicitações de crédito, tributárias ou de compra e venda não significam aprovação, proposta ou contratação automática.</p>
    <h2>3. Documentos e inteligência artificial</h2><p>Quando você envia um documento, ele pode ser processado por serviços de inteligência artificial para sugerir campos. Você deve revisar e confirmar o resultado antes de salvá-lo. A Tier Agro não usa esse processamento para tomar decisões automáticas de crédito.</p>
    <h2>4. Compartilhamento e operadores</h2><p>Usamos fornecedores de infraestrutura, banco de dados, armazenamento, autenticação, processamento de documentos, e-mail e notificações. Atualmente isso pode incluir Supabase, Render, OpenAI, Resend e Expo. Compartilhamentos com assessores ou parceiros de serviços dependem da finalidade informada e, quando aplicável, da sua autorização.</p>
    <h2>5. Segurança e retenção</h2><p>Aplicamos controles de acesso, criptografia em trânsito, armazenamento privado e registros de auditoria. Mantemos os dados enquanto a conta estiver ativa ou pelo período necessário para prestar o serviço, atender solicitações, resolver disputas e cumprir obrigações legais.</p>
    <h2>6. Seus direitos</h2><p>Você pode solicitar acesso, correção, cópia, informação sobre compartilhamento ou exclusão de dados. No aplicativo, acesse Conta e privacidade. Também é possível usar a página de exclusão de conta ou escrever para contato@tieragro.com.br.</p>
    <h2>7. Contato</h2><p>Para dúvidas sobre privacidade, escreva para <a href="mailto:contato@tieragro.com.br">contato@tieragro.com.br</a>.</p>
  </LegalLayout>;
}
