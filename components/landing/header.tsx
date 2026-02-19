"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

// ============================================
// DADOS DO MENU
// ============================================
const menuItems = [
  { label: "Início", href: "#home" },
  { label: "Taxas", href: "#taxas" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Premiações", href: "#premiacoes" },
  { label: "Dúvidas", href: "#duvidas" },
]

const REGISTER_URL = "https://app.conta.millionspay.com.br/register"
const WHATSAPP_URL = "https://wa.me/5511946780757"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Sincronização de tema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        // Compensação da altura fixa do header (80px)
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = elem.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    // Altura fixa definida aqui (h-20 = 80px) para evitar mudanças no scroll
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/95 backdrop-blur-md border-b border-border transition-none">
      <div className="container mx-auto h-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo - Tamanho fixo para evitar saltos */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/logo-millionspay-light.png"
              alt="Millionspay Logo"
              width={160}
              height={40}
              className="h-10 lg:h-12 w-auto transition-transform duration-700 group-hover:scale-105 dark:hidden"
              priority
            />
            <Image
              src="/logo-millionspay.png"
              alt="Millionspay Logo"
              width={160}
              height={40}
              className="h-10 lg:h-12 w-auto transition-transform duration-700 group-hover:scale-105 hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-700 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-700 hover:after:w-full cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-700 cursor-pointer"
              aria-label="Trocar Tema"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
            </button>

            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-700"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Fale com suporte</a>
            </Button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-[#0d3320] hover:scale-105 transition-all duration-700 shadow-lg shadow-primary/25"
              asChild
            >
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Começar Agora</a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary transition-all duration-700"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors duration-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Absoluta para não empurrar o layout do header */}
        <div
          className={`absolute top-20 left-0 right-0 bg-background border-b border-border lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? "max-h-[100vh] opacity-100 py-6 px-4" : "max-h-0 opacity-0 shadow-none"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-700 px-2 py-2 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full bg-transparent border-primary/20" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Fale com suporte</a>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground shadow-md" asChild>
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Começar Agora</a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}