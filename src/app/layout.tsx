import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tier Agro | Sua operação inteira na palma da mão',
  description: 'Produção, contratos, custos e caixa em uma visão simples para você decidir com segurança dentro ou fora da fazenda.',
  icons: { icon: '/brand/app-icon.png', apple: '/brand/app-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
