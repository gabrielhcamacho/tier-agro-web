import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Tier Agro',
  description: 'Sua safra em números simples.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
