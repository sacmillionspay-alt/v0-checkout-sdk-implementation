"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

// ============================================
// DADOS DO CTA - EDITE AQUI
// ============================================
const ctaData = {
  titulo: "Receba pagamentos de forma simples e segura",
  descricao:
    "Junte-se a mais de 50.000 empresas que já confiam na Millionspay para processar seus pagamentos de forma segura e eficiente.",
  primaryCTA: "Começar Gratuitamente",
  secondaryCTA: "Fale com suporte",
}

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[#0d3320] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Cadastro gratuito em 5 minutos
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {ctaData.titulo}
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {ctaData.descricao}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-white hover:text-[#0d3320] hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 group"
              asChild
            >
              <Link href="#formulario">
                {ctaData.primaryCTA}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white transition-all duration-300"
              asChild
            >
              <Link href="#formulario">{ctaData.secondaryCTA}</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">+10.000</p>
              <p className="text-sm text-white/60">Empresas ativas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">R$ 500M+</p>
              <p className="text-sm text-white/60">Transacionados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-white/60">Avaliação média</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">99.9%</p>
              <p className="text-sm text-white/60">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
