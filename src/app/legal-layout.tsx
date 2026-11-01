import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function LegalLayout({ eyebrow, title, updated = '1º de novembro de 2026', children }: { eyebrow: string; title: string; updated?: string; children: ReactNode }) {
  return <main className="legal-page">
    <header className="legal-header"><Link href="/" aria-label="Tier Agro, início"><Image src="/brand/tier-agro-dark.png" alt="Tier Agro" width={1810} height={647} priority /></Link><Link href="/">Voltar ao início</Link></header>
    <article className="legal-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="legal-updated">Atualizado em {updated}</p>{children}</article>
    <footer className="legal-footer"><span>© 2026 Tier Agro</span><nav aria-label="Documentos legais"><Link href="/privacidade">Privacidade</Link><Link href="/termos">Termos de uso</Link><Link href="/suporte">Suporte</Link><Link href="/excluir-conta">Excluir conta</Link></nav></footer>
  </main>;
}
