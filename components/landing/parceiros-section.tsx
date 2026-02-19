"use client"

import { Handshake } from "lucide-react"
import Image from "next/image"

const parceiros = [
  "/images/c1.png",
  "/images/c2.png",
  "/images/c3.png",
  "/images/c4.png",
  "/images/c5.png",
  "/images/c6.png",
  "/images/c7.png",
  "/images/c8.png",
]

export function ParceirosSection() {
  return (
    <section
      id="parceiros"
      className="relative py-24 md:py-28 bg-muted/30 overflow-hidden"
    >
      {/* HEADER */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Nossos Parceiros
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Integrações que Impulsionam seu Negócio
          </h2>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full overflow-hidden">
        <div className="carousel-track">
          {[...parceiros, ...parceiros].map((src, index) => (
            <div key={index} className="logo-item">
              <div className="logo-card">
                <Image
                  src={src}
                  alt="Logo do parceiro"
                  fill
                  className="object-contain p-3 filter brightness-0 opacity-60 dark:brightness-100 dark:opacity-80"
                  quality={100}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="text-center">
          <p className="text-base md:text-lg text-muted-foreground">
            Quer se tornar um parceiro?{" "}
            <a
              href="https://wa.me/5511946780757"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Entre em contato conosco →
            </a>
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll 6s linear infinite;
          will-change: transform;
        }

        .logo-item {
          flex-shrink: 0;
          width: 220px;
          height: 120px;
          padding: 0 16px;
        }

        .logo-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* DARK MODE — COR EXATA PEDIDA */
        :global(.dark) .logo-card {
          background: #0A0A0A;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .carousel-track {
            animation-duration: 4.5s;
          }
        }

        @media (min-width: 1280px) {
          .carousel-track {
            animation-duration: 7s;
          }
        }
      `}</style>
    </section>
  )
}
