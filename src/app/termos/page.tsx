import type { Metadata } from 'next';
import { LegalLayout } from '../legal-layout';

export const metadata: Metadata = { title: 'Termos de Uso | Tier Agro', description: 'Termos aplicáveis ao uso do aplicativo e dos serviços Tier Agro.' };

export default function TermsPage() {
  return <LegalLayout eyebrow="Uso do produto" title="Termos de Uso">
    <p>Estes termos regulam o uso do aplicativo e dos serviços Tier Agro. Ao criar uma conta, você declara ter capacidade para aceitar estes termos e fornecer informações sobre a operação.</p>
    <h2>1. Finalidade</h2><p>A Tier Agro organiza dados de safra, contratos, custos, caixa, documentos e solicitações de serviços. Os indicadores servem como apoio à gestão e não substituem análise agronômica, contábil, jurídica, tributária ou financeira especializada.</p>
    <h2>2. Conta e informações</h2><p>Você é responsável pela guarda das credenciais e pela veracidade dos dados inseridos. Revise informações extraídas de documentos antes de confirmar. Não envie conteúdo de terceiros sem autorização ou material ilícito.</p>
    <h2>3. Serviços e oportunidades</h2><p>Pedidos de análise de crédito, oportunidades tributárias, venda de safra ou negociação de propriedade são manifestações de interesse. Eles não garantem aprovação, limite, economia, comprador, preço, prazo ou conclusão do negócio.</p>
    <h2>4. Disponibilidade</h2><p>Podemos atualizar, corrigir ou interromper temporariamente funcionalidades por segurança, manutenção ou evolução do produto. Procuramos preservar os dados e comunicar mudanças relevantes.</p>
    <h2>5. Cancelamento</h2><p>Você pode deixar de usar o aplicativo e solicitar o encerramento da conta. Alguns registros podem ser preservados quando houver obrigação legal, prevenção de fraude ou necessidade de comprovação de uma solicitação.</p>
    <h2>6. Contato</h2><p>Dúvidas podem ser enviadas para <a href="mailto:contato@tieragro.com.br">contato@tieragro.com.br</a>.</p>
  </LegalLayout>;
}
