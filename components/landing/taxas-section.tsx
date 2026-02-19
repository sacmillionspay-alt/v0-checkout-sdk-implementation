"use client"

import { Smartphone, CreditCard, Clock, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

// ============================================
// DADOS DAS TAXAS - EDITE AQUI
// ============================================
const taxasData = {
  pix: {
    titulo: "Pix",
    taxa: "2,99%",
    recebimento: "D+0",
    descricaoRecebimento: "Receba na hora",
    icon: Smartphone,
    cor: "#2ed573",
    beneficios: [
      "Recebimento instantâneo",
      "Disponível 24h por dia",
      "Sem limite de transações",
      "QR Code dinâmico",
    ],
  },
  cartao: {
    titulo: "Cartão de Crédito",
    taxa: "A partir de 6,49%",
    recebimento: "D+2",
    descricaoRecebimento: "Receba em 2 dias úteis",
    icon: CreditCard,
    cor: "#2ed573",
    beneficios: [
      "Todas as bandeiras",
      "Parcelamento em até 12x",
      "Antecipação disponível",
      "Proteção antifraude",
    ],
  },
}

export function TaxasSection() {
  return (
    <section id="taxas" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Taxas Transparentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Taxas competitivas para o seu negócio
          </h2>
          <p className="text-lg text-muted-foreground">
            Receba seus pagamentos com as melhores taxas do mercado. Sem surpresas, sem taxas escondidas.
          </p>
        </div>

        {/* Taxas Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pix Card */}
          <div className="group relative bg-card rounded-3xl border-2 border-primary/20 p-8 lg:p-10 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {taxasData.pix.titulo}
            </h3>

            {/* Taxa */}
            <div className="mb-6">
              <span className="text-5xl lg:text-6xl font-bold text-primary">
                {taxasData.pix.taxa}
              </span>
            </div>

            {/* Recebimento */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-primary/5 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{taxasData.pix.recebimento}</p>
                <p className="text-sm text-muted-foreground">{taxasData.pix.descricaoRecebimento}</p>
              </div>
            </div>

            {/* Benefícios */}
            <ul className="space-y-3">
              {taxasData.pix.beneficios.map((beneficio) => (
                <li key={beneficio} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cartão Card */}
          <div className="group relative bg-card rounded-3xl border-2 border-primary/20 p-8 lg:p-10 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <CreditCard className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {taxasData.cartao.titulo}
            </h3>

            {/* Taxa */}
            <div className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-primary">
                {taxasData.cartao.taxa}
              </span>
            </div>

            {/* Recebimento */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-primary/5 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{taxasData.cartao.recebimento}</p>
                <p className="text-sm text-muted-foreground">{taxasData.cartao.descricaoRecebimento}</p>
              </div>
            </div>

            {/* Benefícios */}
            <ul className="space-y-3">
              {taxasData.cartao.beneficios.map((beneficio) => (
                <li key={beneficio} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#formulario"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-[#0d3320] hover:scale-105 transition-all duration-500 shadow-lg shadow-primary/25"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
