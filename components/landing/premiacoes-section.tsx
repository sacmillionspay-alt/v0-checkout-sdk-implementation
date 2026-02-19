"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Gift,
  CreditCard,
  Watch,
  Smartphone,
  Laptop,
  Plane,
  Globe,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Star,
  ArrowRight
} from "lucide-react"

const placas = [
  {
    id: 1,
    meta: "R$ 100 mil",
    titulo: "Placa Start",
    descricao: "Sua primeira conquista como parceiro Millionspay",
    imagem: "/images/1.png",
    cor: "from-slate-400 to-slate-600",
    premios: [{ icon: CreditCard, texto: "Cartão de Parabéns" }, { icon: Watch, texto: "Pulseira Exclusiva" }],
  },
  {
    id: 2,
    meta: "R$ 500 mil",
    titulo: "Placa Advance",
    descricao: "Você está crescendo! Ganhe um iPhone de última geração",
    imagem: "/images/2.png",
    cor: "from-emerald-400 to-emerald-600",
    premios: [{ icon: Smartphone, texto: "iPhone de Última Geração" }, { icon: CreditCard, texto: "Cartão de Parabéns" }],
  },
  {
    id: 3,
    meta: "R$ 1 Milhão",
    titulo: "Placa Club",
    descricao: "Um milhão em faturamento! Ganhe um MacBook Pro",
    imagem: "/images/3.png",
    cor: "from-green-400 to-green-600",
    premios: [{ icon: Laptop, texto: "MacBook Pro" }],
  },
  {
    id: 4,
    meta: "R$ 50 Milhões",
    titulo: "Placa Diamond",
    descricao: "Conquista extraordinária! Ganhe uma viagem All Inclusive",
    imagem: "/images/4.png",
    cor: "from-cyan-400 to-cyan-600",
    premios: [{ icon: Plane, texto: "Viagem All Inclusive" }],
  },
  {
    id: 5,
    meta: "R$ 100 Milhões",
    titulo: "Placa Legacy",
    descricao: "O topo! Ganhe uma viagem internacional dos sonhos",
    imagem: "/images/5.png",
    cor: "from-amber-400 to-amber-600",
    premios: [{ icon: Globe, texto: "Viagem Internacional" }],
  },
]

export function PremiacoesSection() {
  const [index, setIndex] = useState(2)
  const [isAnimating, setIsAnimating] = useState(false)

  const changeSlide = (newIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setIndex(newIndex)
      setIsAnimating(false)
    }, 400)
  }

  const prev = () => changeSlide(index === 0 ? placas.length - 1 : index - 1)
  const next = () => changeSlide(index === placas.length - 1 ? 0 : index + 1)

  const placaAtual = placas[index]
  const progressWidth = ((index + 1) / placas.length) * 100

  return (
    // ADICIONADO O ID "premiacoes" ABAIXO
    <section id="premiacoes" className="relative py-16 md:py-32 bg-background text-foreground overflow-hidden">
      {/* Glow de fundo adaptativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[120px] transition-all duration-1000 opacity-[0.15] dark:opacity-[0.1]"
          style={{ backgroundColor: '#07D141' }}
        />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Trophy className="w-4 h-4" style={{ color: '#07D141' }} />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/80">Recompensas Elite</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Conquiste Placas <span style={{ color: '#07D141' }}>Exclusivas</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">Evolua seu negócio e desbloqueie prêmios de alto nível.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center justify-center max-w-7xl mx-auto">
          
          {/* CARD AREA */}
          <div className="relative w-full max-w-[280px] md:max-w-[340px] flex flex-col items-center">
            <div className="relative flex items-center justify-center w-full">
              <button 
                onClick={prev} 
                className="absolute -left-10 md:-left-24 z-30 p-3 md:p-4 rounded-full bg-background border border-border shadow-md hover:bg-secondary transition-all group active:scale-90"
              >
                <ChevronLeft className="w-5 h-5 opacity-40 group-hover:opacity-100" />
              </button>

              <div className={`w-full transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <PlacaCard placa={placaAtual} />
              </div>

              <button 
                onClick={next} 
                className="absolute -right-10 md:-right-24 z-30 p-3 md:p-4 rounded-full bg-background border border-border shadow-md hover:bg-secondary transition-all group active:scale-90"
              >
                <ChevronRight className="w-5 h-5 opacity-40 group-hover:opacity-100" />
              </button>
            </div>

            {/* DOTS */}
            <div className="flex gap-3 mt-10">
              {placas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10" : "w-2 bg-muted hover:bg-primary/40"}`}
                  style={{ backgroundColor: i === index ? '#07D141' : undefined }}
                />
              ))}
            </div>
          </div>

          {/* DETAILS AREA */}
          <div className="flex-1 w-full max-w-lg space-y-10">
            <div key={placaAtual.id} className="animate-fade-in text-center lg:text-left">
              <div className={`inline-block px-6 py-1.5 rounded-xl bg-gradient-to-r ${placaAtual.cor} text-white font-bold text-xl md:text-2xl shadow-lg mb-6`}>
                {placaAtual.meta}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{placaAtual.titulo}</h3>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">{placaAtual.descricao}</p>
            </div>

            {/* PRÊMIOS */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center justify-center lg:justify-start gap-2">
                <Star className="w-3.5 h-3.5" style={{ color: '#07D141' }} /> Benefícios da Conquista
              </h4>
              <div className="grid gap-3">
                {placaAtual.premios.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all shadow-sm group">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform" style={{ color: '#07D141' }}>
                      <p.icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-foreground/80">{p.texto}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PROGRESSO */}
            <div className="p-6 rounded-[28px] bg-secondary/30 border border-border shadow-inner">
              <div className="flex justify-between items-center mb-4 text-[10px] font-bold uppercase tracking-widest">
                <span className="text-muted-foreground">Meta {index + 1} de {placas.length}</span>
                <span style={{ color: '#07D141' }}>{progressWidth.toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${placaAtual.cor} transition-all duration-1000`}
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a 
            href="https://api.whatsapp.com/send/?phone=5511946780757&text&type=phone_number&app_absent=0" 
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 md:gap-3 px-5 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg text-black transition-all hover:scale-[1.03] active:scale-95 shadow-xl"
            style={{ backgroundColor: '#07D141' }}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <Gift className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
            QUERO MINHA PLACA
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .group-hover\:animate-shimmer { animation: shimmer 1.5s infinite; }
      `}</style>
    </section>
  )
}

function PlacaCard({ placa }: { placa: any }) {
  return (
    <div className="relative w-full group">
      <div className={`absolute -inset-1 rounded-[40px] bg-gradient-to-br ${placa.cor} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
      
      <div className="relative rounded-[32px] bg-card border border-border p-5 shadow-2xl overflow-hidden">
        <div className="relative aspect-[3/4] mb-6 rounded-[24px] bg-secondary/50 border border-border flex items-center justify-center p-8 overflow-hidden">
          <Image 
            src={placa.imagem} 
            alt={placa.titulo} 
            fill 
            className="object-contain p-6 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-700" 
          />
        </div>

        <div className="text-center pb-2">
          <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${placa.cor} text-white text-[10px] font-black uppercase tracking-widest mb-3 shadow-md`}>
            {placa.meta}
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">{placa.titulo}</h3>
          <p className="text-[9px] uppercase tracking-[0.4em] font-bold mt-1" style={{ color: '#07D141' }}>Millionspay</p>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent pointer-events-none dark:opacity-20" />
      </div>
    </div>
  )
}