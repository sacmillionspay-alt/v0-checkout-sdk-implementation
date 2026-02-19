import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { TaxasSection } from "@/components/landing/taxas-section"
import { BeneficiosSection } from "@/components/landing/beneficios-section"
import { SolucoesSection } from "@/components/landing/solucoes-section"
import { ParceirosSection } from "@/components/landing/parceiros-section"
import { PremiacoesSection } from "@/components/landing/premiacoes-section"
import { FormularioSection } from "@/components/landing/formulario-section"
import { DuvidasSection } from "@/components/landing/duvidas-section"
import { CTASection } from "@/components/landing/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header / Navegação - somente na home */}
      <Header />

      {/* Hero com Dashboard e Integrações */}
      <HeroSection />

      {/* Seção de Taxas */}
      <TaxasSection />

      {/* Seção de Benefícios */}
      <BeneficiosSection />

      {/* Seção de Soluções */}
      <SolucoesSection />

      {/* Seção de Parceiros */}
      <ParceirosSection />

      {/* Seção de Premiações */}
      <PremiacoesSection />

      {/* Seção de Formulário */}
      <FormularioSection />

      {/* Seção de Dúvidas */}
      <DuvidasSection />

      {/* Seção de CTA */}
      <CTASection />
    </main>
  )
}
