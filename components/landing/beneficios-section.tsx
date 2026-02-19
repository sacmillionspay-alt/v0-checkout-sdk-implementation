"use client"

import {
  Zap,
  Shield,
  Clock,
  Headphones,
  TrendingUp,
  CreditCard,
  Globe,
  Lock,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Dados dos benefícios mantidos como original
const beneficios = [
  {
    titulo: "Aprovação Instantânea",
    descricao: "Transações processadas em segundos com tecnologia de ponta para máxima velocidade.",
    icon: Zap,
  },
  {
    titulo: "Segurança Máxima",
    descricao: "Sistema anti-fraude inteligente com criptografia de ponta a ponta e certificação PCI-DSS.",
    icon: Shield,
  },
  {
    titulo: "Receba em 1 Dia",
    descricao: "Dinheiro na sua conta em até 24 horas. Sem burocracia, sem espera desnecessária.",
    icon: Clock,
  },
  {
    titulo: "Suporte 24/7",
    descricao: "Time de especialistas disponível a qualquer momento para ajudar o seu negócio.",
    icon: Headphones,
  },
  {
    titulo: "Taxas Competitivas",
    descricao: "As melhores taxas do mercado que diminuem conforme seu volume de vendas aumenta.",
    icon: TrendingUp,
  },
  {
    titulo: "Multi Bandeiras",
    descricao: "Aceite todas as bandeiras de cartão: Visa, Mastercard, Elo, Amex, Hipercard e mais.",
    icon: CreditCard,
  },
  {
    titulo: "Cobertura Nacional",
    descricao: "Atendemos todo o Brasil com infraestrutura robusta e alta disponibilidade.",
    icon: Globe,
  },
  {
    titulo: "Dados Protegidos",
    descricao: "Conformidade total com LGPD e padrões internacionais de proteção de dados.",
    icon: Lock,
  },
]

export function BeneficiosSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Por que escolher a Millionspay
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Benefícios que impulsionam seu negócio
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra todas as vantagens de ter a Millionspay como seu parceiro de pagamentos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <Card
              key={beneficio.titulo}
              // Alterado de duration-300 para duration-700 e adicionado ease-in-out
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-3 bg-card"
            >
              <CardContent className="p-6">
                
                {/* Icon - Animação de escala e cor mais lenta */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-700 ease-in-out">
                  <beneficio.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-700 ease-in-out" />
                </div>

                {/* Content - Transição suave de cor no título */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-700 ease-in-out">
                  {beneficio.titulo}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {beneficio.descricao}
                </p>

                {/* Hover Effect Line - Barra inferior agora leva 1 segundo para completar (mais cinematográfico) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out origin-left" />
              </CardContent>

              {/* Background Number */}
              <span className="absolute -bottom-4 -right-2 text-8xl font-bold text-primary/5 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}