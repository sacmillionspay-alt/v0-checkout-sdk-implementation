"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  initial: string
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "E-Commerce Brasil",
    content:
      "A Millionspay revolucionou nosso processo de pagamentos. Reduzimos o tempo de processamento em 80% e nossas conversões aumentaram significativamente.",
    rating: 5,
    initial: "C",
  },
  {
    name: "Maria Santos",
    role: "Diretora Financeira",
    company: "Tech Solutions",
    content:
      "O suporte é excepcional! Qualquer dúvida é resolvida em minutos. O painel de controle é intuitivo e muito fácil de usar.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Roberto Ferreira",
    role: "Founder",
    company: "Marketplace Premium",
    content:
      "Integramos em 48 horas. A documentação é clara e o time de desenvolvimento extremamente responsivo. Já processamos milhões com segurança.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Ana Costa",
    role: "Gerente de Operações",
    company: "Plataforma Digital",
    content:
      "As taxas são as mais competitivas do mercado e não há taxas ocultas. Transparência total e ROI garantido. Recomendo para todos!",
    rating: 5,
    initial: "A",
  },
  {
    name: "Pedro Oliveira",
    role: "Product Manager",
    company: "Fintech Inovadora",
    content:
      "A segurança é impecável. Anti-fraude de IA que realmente funciona. Tivemos zero problemas em 6 meses de operação.",
    rating: 5,
    initial: "P",
  },
  {
    name: "Juliana Martins",
    role: "Proprietária",
    company: "Loja Online Fashion",
    content:
      "Melhor decisão para meu negócio! Crescemos 200% graças à eficiência dos pagamentos. O sistema é confiável e muito rápido.",
    rating: 5,
    initial: "J",
  },
]

const stats = [
  { number: "+10K", label: "Clientes Ativos" },
  { number: "R$500M+", label: "Transacionados" },
  { number: "99.99%", label: "Disponibilidade" },
]

// ── Snake border via SVG stroke-dashoffset ────────────────────────────────────
// Uses a rounded rect whose stroke is animated so a short bright segment
// travels continuously around the entire perimeter — the "snake" effect.
function SnakeBorder({ hovered }: { hovered: boolean }) {
  const sw = 2          // stroke width
  const w  = 400        // viewBox width  (scales via CSS width/height 100%)
  const h  = 320        // viewBox height
  const r  = 16         // border-radius (matches rounded-2xl)
  const ins = sw / 2    // inset so the stroke stays inside the viewBox

  // Perimeter of a rounded rect: straight segments + circular arcs
  const perimeter = 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r

  // Snake segment = 20% of perimeter, rest is transparent gap
  const snakeLen = perimeter * 0.20
  const gapLen   = perimeter - snakeLen

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradient: the snake fades in and out at its tips */}
        <linearGradient id="snakeGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={w} y2={0}>
          <stop offset="0%"   stopColor="#07D141" stopOpacity="0"   />
          <stop offset="25%"  stopColor="#07D141" stopOpacity="1"   />
          <stop offset="75%"  stopColor="#22c55e" stopOpacity="1"   />
          <stop offset="100%" stopColor="#07D141" stopOpacity="0"   />
        </linearGradient>
      </defs>

      {/* Static faint border — always visible */}
      <rect
        x={ins} y={ins}
        width={w - sw} height={h - sw}
        rx={r} ry={r}
        fill="none"
        stroke="rgba(7,209,65,0.10)"
        strokeWidth={sw}
      />

      {/* Animated snake segment — only rendered while hovered */}
      {hovered && (
        <rect
          x={ins} y={ins}
          width={w - sw} height={h - sw}
          rx={r} ry={r}
          fill="none"
          stroke="url(#snakeGrad)"
          strokeWidth={sw + 0.5}
          strokeLinecap="round"
          strokeDasharray={`${snakeLen} ${gapLen}`}
          style={{ animation: "snake-run 2.4s linear infinite" }}
        />
      )}
    </svg>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-primary fill-primary" : "text-border fill-border"}`}
          viewBox="0 0 24 24"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 90)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={wrapRef}
      className="relative flex flex-col h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card shell — no Tailwind border so the SVG owns it */}
      <div
        className="relative flex flex-col h-full rounded-2xl bg-card overflow-hidden"
        style={{
          boxShadow: hovered
            ? "0 8px 40px -10px rgba(7,209,65,0.28)"
            : "0 1px 6px 0 rgba(0,0,0,0.07)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "box-shadow 0.65s ease, transform 0.65s ease",
        }}
      >
        {/* Snake border SVG */}
        <SnakeBorder hovered={hovered} />

        {/* Top-of-card inner glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(7,209,65,0.07) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.65s ease",
          }}
        />

        {/* Large decorative quotation mark */}
        <div
          className="absolute top-4 right-5 pointer-events-none select-none"
          style={{ opacity: hovered ? 0.08 : 0.035, transition: "opacity 0.65s ease" }}
        >
          <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor" className="text-primary">
            <text x="0" y="55" fontSize="90" fontFamily="serif">"</text>
          </svg>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1 p-6 gap-5 z-10">
          {/* Top row: avatar + stars */}
          <div className="flex items-start justify-between gap-3">
            <div className="relative flex-shrink-0">
              <div
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[#0d3320] flex items-center justify-center"
                style={{
                  boxShadow: hovered
                    ? "0 0 18px rgba(7,209,65,0.42)"
                    : "0 2px 6px rgba(0,0,0,0.15)",
                  transition: "box-shadow 0.65s ease",
                }}
              >
                <span className="text-white font-bold text-base leading-none">{testimonial.initial}</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-card" />
            </div>

            <StarRating rating={testimonial.rating} />
          </div>

          {/* Quote icon + body text */}
          <div className="flex-1 space-y-3">
            <Quote
              className="w-5 h-5 fill-primary/10"
              style={{
                color: hovered ? "rgba(7,209,65,0.72)" : "rgba(7,209,65,0.50)",
                transition: "color 0.65s ease",
              }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{
                color: hovered ? "var(--foreground)" : "var(--muted-foreground)",
                opacity: hovered ? 0.82 : 1,
                transition: "color 0.65s ease, opacity 0.65s ease",
              }}
            >
              {testimonial.content}
            </p>
          </div>

          {/* Footer */}
          <div
            className="pt-4 flex items-end justify-between gap-2"
            style={{
              borderTop: `1px solid ${hovered ? "rgba(7,209,65,0.22)" : "rgba(229,231,235,0.7)"}`,
              transition: "border-color 0.65s ease",
            }}
          >
            <div>
              <p className="font-semibold text-foreground text-sm leading-tight">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</p>
            </div>
            <span
              className="text-[10px] font-semibold tracking-wide text-primary rounded-full whitespace-nowrap px-2.5 py-1"
              style={{
                background: hovered ? "rgba(7,209,65,0.16)" : "rgba(7,209,65,0.10)",
                border: `1px solid ${hovered ? "rgba(7,209,65,0.32)" : "rgba(7,209,65,0.20)"}`,
                transition: "background 0.65s ease, border-color 0.65s ease",
              }}
            >
              {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="relative text-center rounded-2xl bg-card p-8 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        boxShadow: hovered
          ? "0 8px 40px -10px rgba(7,209,65,0.28)"
          : "0 1px 6px 0 rgba(0,0,0,0.07)",
        transform: visible
          ? hovered ? "translateY(-3px)" : "translateY(0)"
          : "translateY(20px) scale(0.97)",
        transition: visible
          ? "box-shadow 0.65s ease, transform 0.65s ease"
          : "opacity 0.5s ease, transform 0.5s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SnakeBorder hovered={hovered} />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(7,209,65,0.07) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.65s ease",
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px]"
        style={{
          background: hovered ? "rgba(7,209,65,0.09)" : "rgba(7,209,65,0.05)",
          transition: "background 0.65s ease",
        }}
      />

      <div className="relative z-10">
        <p
          className="text-3xl lg:text-4xl font-bold text-primary tracking-tight whitespace-nowrap"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.65s ease",
          }}
        >
          {stat.number}
        </p>
        <div
          className="mx-auto my-3 h-px rounded-full"
          style={{
            width: hovered ? "48px" : "32px",
            background: "rgba(7,209,65,0.35)",
            opacity: hovered ? 0.6 : 0.3,
            transition: "width 0.65s ease, opacity 0.65s ease",
          }}
        />
        <p className="text-sm text-muted-foreground font-medium leading-snug">{stat.label}</p>
      </div>
    </div>
  )
}

export function TestimonialSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Keyframe injected once at the top level */}
      <style>{`
        @keyframes snake-run {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -1200; }
        }
      `}</style>

      <section id="depoimentos" className="relative py-24 lg:py-36 overflow-hidden">

        {/* Noise texture */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Ambient green glows */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -z-10 pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none opacity-[0.018] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8">

          {/* ── Header ── */}
          <div
            ref={headerRef}
            className="text-center max-w-2xl mx-auto mb-20 lg:mb-24"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Confiança de Milhares
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-5">
              O que nossos{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">clientes</span>
                <span className="absolute -bottom-0.5 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
              </span>{" "}
              dizem
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Milhares de empresas em todo o Brasil confiam na Millionspay para processar seus pagamentos com segurança e eficiência.
            </p>
          </div>

          {/* ── Testimonials Grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="flex items-center gap-4 mt-20 lg:mt-28 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Números que falam por si
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" style={{ animationDelay: "0.5s" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
          </div>

          {/* ── Stats ── */}
          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}