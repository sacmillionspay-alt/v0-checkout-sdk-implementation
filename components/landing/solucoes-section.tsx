"use client"

import { useState } from "react"
import {
  Smartphone,
  Code,
  Shield,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// ============================================
// DADOS DAS SOLUÇÕES - EDITE AQUI
// ============================================
const solucoes = [
  {
    id: "maquininha",
    titulo: "Maquininha Inteligente",
    subtitulo: "Aceite pagamentos em qualquer lugar",
    descricao:
      "Nossa maquininha de última geração aceita todas as bandeiras, tem conexão Wi-Fi e 4G, e imprime comprovantes na hora. Bateria de longa duração e design compacto.",
    icon: Smartphone,
    recursos: [
      "Aceita todas as bandeiras",
      "Conexão Wi-Fi e 4G",
      "Bateria de 12 horas",
      "Impressora térmica integrada",
      "NFC para pagamentos por aproximação",
    ],
    imagem: "maquininha",
  },
  {
    id: "api",
    titulo: "Integrações Ágeis com API",
    subtitulo: "Integre em minutos, não em semanas",
    descricao:
      "API RESTful moderna com documentação completa, SDKs para todas as linguagens e sandbox para testes. Webhooks em tempo real e suporte dedicado para desenvolvedores.",
    icon: Code,
    recursos: [
      "API RESTful moderna",
      "SDKs em 10+ linguagens",
      "Sandbox para testes",
      "Webhooks em tempo real",
      "Rate limit generoso",
      "Documentação completa",
    ],
    imagem: "api",
  },
  {
    id: "antifraude",
    titulo: "Sistema Anti-Fraude",
    subtitulo: "Proteção inteligente para seu negócio",
    descricao:
      "Machine learning avançado analisa cada transação em milissegundos. Bloqueie fraudes antes que aconteçam sem afetar a experiência do cliente legítimo.",
    icon: Shield,
    recursos: [
      "Machine Learning",
      "Análise em tempo real",
      "Score de risco",
      "Regras customizáveis",
      "Zero chargeback",
      "Relatórios detalhados",
    ],
    imagem: "antifraude",
  },
  {
    id: "dashboard",
    titulo: "Dashboard Completo",
    subtitulo: "Todas as métricas em um só lugar",
    descricao:
      "Painel administrativo com visão completa do seu negócio. Relatórios em tempo real, exportação de dados, gestão de equipe e muito mais.",
    icon: BarChart3,
    recursos: [
      "Métricas em tempo real",
      "Relatórios personalizados",
      "Gestão multi-usuário",
      "Alertas inteligentes",
    ],
    imagem: "dashboard",
  },
]

export function SolucoesSection() {
  const [activeTab, setActiveTab] = useState("maquininha")
  const activeSolucao = solucoes.find((s) => s.id === activeTab) || solucoes[0]

  return (
    <section id="solucoes" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as soluções que vão transformar a forma como você recebe pagamentos.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solucoes.map((solucao) => (
            <button
              key={solucao.id}
              type="button"
              onClick={() => setActiveTab(solucao.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === solucao.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              <solucao.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{solucao.titulo.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <activeSolucao.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">
                {activeSolucao.subtitulo}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {activeSolucao.titulo}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {activeSolucao.descricao}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {activeSolucao.recursos.map((recurso) => (
                <div
                  key={recurso}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{recurso}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-[#0d3320] transition-all duration-300 group"
              asChild
            >
              <Link href="#formulario">
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right - Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activeSolucao.titulo}
                  </span>
                </div>

                {/* Content Based on Active Tab */}
                {activeTab === "maquininha" && (
                  <div className="space-y-4">
                    <div className="bg-secondary/50 rounded-xl p-6 text-center">
                      <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-2xl font-bold text-primary">R$ 150,00</p>
                      <p className="text-sm text-muted-foreground">Pagamento aprovado</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/10 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground">Bandeira</p>
                        <p className="font-bold text-foreground">Visa</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground">Tipo</p>
                        <p className="font-bold text-foreground">Crédito</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "api" && (
                  <div className="space-y-3 font-mono text-sm">
                    <div className="bg-[#0d3320] text-[#2ed573] rounded-lg p-4 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">
{`POST /v1/transactions
{
  "amount": 15000,
  "currency": "BRL",
  "payment_method": "pix"
}

// Response: 201 Created
{
  "id": "txn_abc123",
  "status": "approved"
}`}
                      </pre>
                    </div>
                  </div>
                )}

                {activeTab === "antifraude" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-bold text-green-800">Transação Segura</p>
                          <p className="text-sm text-green-600">Score: 95/100</p>
                        </div>
                      </div>
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["IP", "Device", "Behavior"].map((item) => (
                        <div key={item} className="bg-secondary rounded-lg p-2 text-center">
                          <p className="text-xs text-muted-foreground">{item}</p>
                          <p className="text-sm font-bold text-green-600">OK</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "dashboard" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">Hoje</p>
                        <p className="text-xl font-bold text-primary">R$ 12.450</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">Transações</p>
                        <p className="text-xl font-bold text-foreground">234</p>
                      </div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-3">
                      <div className="flex items-end justify-between h-20 gap-1">
                        {[30, 50, 40, 70, 55, 85, 60].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-primary/30 rounded-t"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-8 -right-8 w-full h-full bg-primary/5 rounded-2xl -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
