"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Produtos",
      links: [
        { label: "Maquininha de Cartão", href: "#solucoes" },
        { label: "Integrações", href: "#solucoes" },
        { label: "Documentação", href: "#solucoes" },
      ],
    },
    {
      title: "Políticas e Termos",
      links: [
        { label: "Política de Privacidade", href: "/politica-de-privacidade" },
        { label: "Política de Cookies", href: "/politica-de-cookies" },
        { label: "Segurança da Informação", href: "/seguranca-da-informacao" },
        { label: "Prevenção à Lavagem de Dinheiro", href: "/prevencao-lavagem-dinheiro" },
        { label: "Termo de Uso", href: "/termos" },
        { label: "Política de Chargeback", href: "/politica-de-chargeback" },
        { label: "Política de KYC", href: "/politica-de-kyc" },
      ],
    },
  ]

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const elem = document.getElementById(targetId)
      elem?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer
      className="border-t border-white/10 pt-16 pb-8 text-white"
      style={{ backgroundColor: "var(--mp-green-dark)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Branding */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-millionspay.png"
                alt="MillionsPay Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Soluções de pagamento inteligentes para escalar o seu negócio com
              segurança e tecnologia de ponta.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4" style={{ color: "#07D141" }} />
                <span>contato@sejamillionspay.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4" style={{ color: "#07D141" }} />
                <span>Brasil</span>
              </div>
            </div>
          </div>

          {/* Seções */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.2em]">
                {section.title}
              </h4>

              <ul className="space-y-4">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith("http")

                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-[#07D141] transition-colors text-sm flex items-center group"
                        >
                          <span className="w-0 h-[1px] bg-[#07D141] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                          {link.label}
                        </a>
                      ) : link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          onClick={(e) => handleScroll(e, link.href)}
                          className="text-white/60 hover:text-[#07D141] transition-colors text-sm flex items-center group cursor-pointer"
                        >
                          <span className="w-0 h-[1px] bg-[#07D141] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-[#07D141] transition-colors text-sm flex items-center group"
                        >
                          <span className="w-0 h-[1px] bg-[#07D141] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          {/* Instagram */}
          <div className="space-y-6">
            <h4 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.2em]">
              Conecte-se
            </h4>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/millionspay/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group"
              >
                <Instagram
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  style={{ color: "#07D141" }}
                />
              </a>
            </div>

            <p className="text-[11px] text-white/40 leading-tight">
              Acompanhe nossas novidades e atualizações do mercado financeiro.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/40 text-center md:text-left uppercase tracking-wider">
            © {currentYear} MillionsPay. Todos os direitos reservados.
            <span className="mx-2 hidden md:inline">|</span>
            <br className="md:hidden" />
            CNPJ: 56.002.183/0001-39
          </p>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#07D141" }}
            />
            <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
