"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CreditCard, Smartphone, Shield, BarChart3, TrendingUp, DollarSign, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroData = {
  badge: "Gateway de Pagamentos #1 do Brasil",
  title: "Pronto para transformar",
  titleHighlight: "seus pagamentos?",
  description:
    "A Millionspay oferece a solução completa para o seu negócio. Taxas competitivas, integrações ágeis e um sistema anti-fraude de última geração.",
  primaryCTA: "Começar Agora",
  secondaryCTA: "Saiba mais",
}

const integrations = [
  { name: "Pix", icon: Smartphone, color: "#2ed573" },
  { name: "Cartão", icon: CreditCard, color: "#2ed573" },
  { name: "Boleto", icon: BarChart3, color: "#22c55e" },
  { name: "Seguro", icon: Shield, color: "#2ed573" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">{heroData.badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {heroData.title}{" "}
              <span className="text-primary relative">
                {heroData.titleHighlight}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C50 2 150 2 298 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-[#0d3320] hover:scale-105 transition-all duration-700 shadow-lg shadow-primary/25 group" asChild>
                <a href="https://app.conta.millionspay.com.br/register" target="_blank" rel="noopener noreferrer">
                  {heroData.primaryCTA}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-700" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-700 bg-transparent" asChild>
                <a href="https://wa.me/5511946780757" target="_blank" rel="noopener noreferrer">{heroData.secondaryCTA}</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center lg:text-left group cursor-default">
                <p className="text-2xl lg:text-3xl font-bold text-primary transition-all duration-700 group-hover:scale-110 origin-left">+10k</p>
                <p className="text-sm text-muted-foreground">Clientes ativos</p>
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <p className="text-2xl lg:text-3xl font-bold text-primary transition-all duration-700 group-hover:scale-110 origin-left">R$500M+</p>
                <p className="text-sm text-muted-foreground">Transacionados</p>
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <p className="text-2xl lg:text-3xl font-bold text-primary transition-all duration-700 group-hover:scale-110 origin-left">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview [590px] */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-[590px] group/dashboard">
            <div className="relative bg-white dark:bg-card rounded-2xl shadow-2xl border border-gray-200 dark:border-border p-5 lg:p-6 backdrop-blur-sm transition-all duration-1000 hover:shadow-primary/5 hover:-translate-y-2">
              
              <div className="flex items-center justify-between mb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <p className="text-xs font-medium text-primary uppercase tracking-wider">Em Tempo Real</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-foreground">Painel de Controle</h3>
                </div>
                <div className="hover:scale-110 transition-transform duration-700">
                  <Image src="/logo-millionspay-light.png" alt="Millionspay" width={90} height={27} className="h-6 w-auto dark:hidden" />
                  <Image src="/logo-millionspay.png" alt="Millionspay" width={90} height={27} className="h-6 w-auto hidden dark:block" />
                </div>
              </div>

              {/* Card de Receita */}
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 mb-4 overflow-hidden group/metric cursor-pointer hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover/metric:scale-[2] transition-transform duration-1000" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs text-primary-foreground/80 font-medium mb-0.5">Receita do Mês</p>
                      <p className="text-2xl font-bold text-primary-foreground">R$ 1.2M</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm group-hover/metric:rotate-[360deg] transition-transform duration-1000">
                      <DollarSign className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-primary-foreground" />
                    <span className="text-xs text-primary-foreground/90 font-medium">+24.5% vs mês anterior</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="group bg-gray-50 dark:bg-secondary rounded-xl p-3.5 border border-gray-200 dark:border-border hover:border-primary/40 hover:bg-white dark:hover:bg-card hover:shadow-xl transition-all duration-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-primary/10 rounded-lg p-1.5 transition-colors duration-700 group-hover:bg-primary">
                      <Activity className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-700" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">+12%</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-muted-foreground mb-0.5">Vendas Hoje</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-foreground">R$ 45.2K</p>
                </div>

                <div className="group bg-gray-50 dark:bg-secondary rounded-xl p-3.5 border border-gray-200 dark:border-border hover:border-primary/40 hover:bg-white dark:hover:bg-card hover:shadow-xl transition-all duration-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-primary/10 rounded-lg p-1.5 transition-colors duration-700 group-hover:bg-primary">
                      <Users className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-700" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">+8%</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-muted-foreground mb-0.5">Transações</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-foreground">1.234</p>
                </div>
              </div>

              {/* Chart com Linha Verde Animada */}
              <div className="bg-gray-50 dark:bg-secondary rounded-xl p-4 mb-4 border border-gray-200 dark:border-border overflow-hidden relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-gray-900 dark:text-foreground">Últimos 7 dias</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(46,213,115,0.6)]" />
                  </div>
                </div>
                
                <div className="relative h-20">
                  <svg className="absolute inset-0 h-full w-full z-10 overflow-visible pointer-events-none" preserveAspectRatio="none" viewBox="0 0 210 60">
                    <path 
                      d="M0,55 L35,30 L70,45 L105,15 L140,40 L175,5 L210,25" 
                      fill="none" 
                      stroke="#2ed573" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="400"
                      strokeDashoffset="400"
                      className="drop-shadow-[0_0_5px_rgba(46,213,115,0.4)] animate-[draw_2s_ease-out_forwards]"
                    />
                  </svg>

                  <div className="flex items-end justify-between h-full gap-1.5">
                    {[45, 70, 55, 85, 60, 95, 75].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5 z-0">
                        <div className="relative w-full">
                          <div
                            className="w-full bg-gradient-to-t from-primary/10 to-transparent rounded-t-md"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-2 px-0.5">
                  {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => (
                    <span key={i} className="text-[10px] text-gray-400 dark:text-muted-foreground font-bold">{d}</span>
                  ))}
                </div>
              </div>

              {/* Métodos de Pagamento - TEXTO ADICIONADO E HOVER MELHORADO */}
              <div className="bg-gray-50 dark:bg-secondary rounded-xl p-4 border border-gray-200 dark:border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Métodos de Pagamento</p>
                <div className="grid grid-cols-4 gap-3">
                  {integrations.map((item) => (
                    <div key={item.name} className="relative group/icon">
                      <div className="bg-white dark:bg-card rounded-xl p-2.5 border border-gray-100 dark:border-white/5 shadow-sm group-hover/icon:border-primary/50 group-hover/icon:shadow-md group-hover/icon:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col items-center gap-1.5">
                        <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-white/5 group-hover/icon:bg-primary/10 transition-colors duration-500">
                           <item.icon className="w-4 h-4 transition-colors duration-500" style={{ color: item.color }} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-600 dark:text-muted-foreground group-hover/icon:text-primary transition-colors duration-500">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selo 100% Seguro - MENOR E MAIS PARA CIMA */}
            <div className="absolute -top-6 -right-2 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-lg py-2 px-3 shadow-xl border border-primary/20 animate-[bounce_4s_infinite] hidden lg:block hover:scale-105 transition-transform duration-700 cursor-default">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" />
                <div className="leading-tight">
                  <p className="text-[11px] font-bold">100% Seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}