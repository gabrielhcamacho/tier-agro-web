import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tier Agro | Sua safra mais clara',
  description: 'Produção, vendas, custos e caixa em uma única visão para decidir com segurança.',
  openGraph: {
    title: 'Tier Agro | Sua safra mais clara',
    description: 'Produção, vendas, custos e caixa em uma única visão para decidir com segurança.',
    type: 'website',
  },
  icons: { icon: '/brand/app-icon.png', apple: '/brand/app-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
