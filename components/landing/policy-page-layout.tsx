import Link from "next/link"

interface PolicyPageLayoutProps {
  title: string
  children?: React.ReactNode
}

/**
 * Layout reutilizável para páginas de políticas e termos.
 * Use em cada rota (ex: politica-de-privacidade/page.tsx).
 */
export function PolicyPageLayout({ title, children }: PolicyPageLayoutProps) {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--mp-green-dark)" }}
    >
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-white/60 hover:text-[#07D141] transition-colors mb-8"
        >
          ← Voltar ao início
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {title}
        </h1>

        <div className="max-w-none text-white/90 text-[15px] leading-relaxed [&_.policy-body]:whitespace-pre-wrap [&_.policy-body]:font-sans">
          {children ?? (
            <p className="text-white/60">
              Conteúdo desta página em construção. Em breve você encontrará aqui
              as informações completas.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
