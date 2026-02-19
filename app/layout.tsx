import React from "react"
import type { Metadata } from 'next'
import { Poppins, Exo_2 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/landing/footer'
import { WhatsAppButton } from '@/components/landing/whatsapp-button'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

// Exo 2 é uma alternativa similar ao Helios Extended
// Para usar Helios Extended, substitua por localFont com os arquivos .woff2
const helios = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-helios',
})

export const metadata: Metadata = {
  title: 'Millionspay - Gateway de Pagamentos Inteligente',
  description: 'A solução completa para pagamentos digitais. Taxas competitivas, integrações ágeis com API, sistema anti-fraude e dashboard completo.',
  keywords: ['gateway de pagamento', 'pagamentos digitais', 'maquininha', 'API de pagamentos', 'anti-fraude'],
  icons: {
    icon: '/logo-millionspay.png',
    apple: '/logo-millionspay.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${helios.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
