"use client"

import React from "react"

import { useState } from "react"
import { Send, CheckCircle, Building2, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// ============================================
// DADOS DO FORMULÁRIO - EDITE AQUI
// ============================================
const WHATSAPP_NUMBER = "5511946780757" // Número da MillionsPay (DDI + DDD + número, sem espaços)

const formConfig = {
  titulo: "Fale com a gente",
  subtitulo: "Preencha o formulário e nossa equipe entrará em contato em até 24 horas.",
  submitText: "Enviar pelo WhatsApp",
  successMessage: "Você será redirecionado para o WhatsApp para concluir o envio. Nossa equipe responderá em breve!",
}

const tiposNegocio = [
  "E-commerce",
  "Loja Física",
  "SaaS / Software",
  "Marketplace",
  "Serviços",
  "Outro",
]

export function FormularioSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    tipoNegocio: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Monta a mensagem para enviar no WhatsApp (organizada e legível)
    const nome = formData.nome.trim()
    const email = formData.email.trim()
    const telefone = formData.telefone.trim()
    const empresa = formData.empresa.trim()
    const tipoNegocio = formData.tipoNegocio.trim()
    const mensagem = formData.mensagem.trim()

    const linhas = [
      "*Solicitação de Proposta - MillionsPay*",
      "",
      "*Dados do contato*",
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefone: ${telefone}`,
      `Empresa: ${empresa}`,
      `Tipo de negócio: ${tipoNegocio}`,
      ...(mensagem
        ? ["", "*Mensagem*", mensagem]
        : []),
    ]

    const texto = linhas.join("\n")
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`

    // Abre o WhatsApp (nova aba) com a mensagem preenchida
    window.open(url, "_blank", "noopener,noreferrer")

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset do formulário após 5 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        tipoNegocio: "",
        mensagem: "",
      })
    }, 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="formulario" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Entre em Contato
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                {formConfig.titulo}
              </h2>
              <p className="text-lg text-muted-foreground">
                {formConfig.subtitulo}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">contato@sejamillionspay.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium text-foreground">(11) 946780757</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horário de Atendimento</p>
                  <p className="font-medium text-foreground">Seg - Sex, 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <Card className="border-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Solicite uma proposta</CardTitle>
              <CardDescription>
                Preencha seus dados que entraremos em contato
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground">
                    {formConfig.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nome */}
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-medium text-foreground">
                      Nome completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <label htmlFor="telefone" className="text-sm font-medium text-foreground">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Empresa */}
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-medium text-foreground">
                      Nome da Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        placeholder="Sua empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Tipo de Negócio */}
                  <div className="space-y-2">
                    <label htmlFor="tipoNegocio" className="text-sm font-medium text-foreground">
                      Tipo de Negócio
                    </label>
                    <select
                      id="tipoNegocio"
                      name="tipoNegocio"
                      value={formData.tipoNegocio}
                      onChange={handleChange}
                      className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Selecione...</option>
                      {tiposNegocio.map((tipo) => (
                        <option key={tipo} value={tipo}>
                          {tipo}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Conte-nos mais sobre seu negócio..."
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-[#0d3320] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {formConfig.submitText}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
