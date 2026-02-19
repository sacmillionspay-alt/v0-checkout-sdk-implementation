"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// ============================================
// DADOS DAS DÚVIDAS FREQUENTES - EDITE AQUI
// ============================================
const duvidas = [
  {
    pergunta: "Quanto tempo leva para receber o dinheiro das vendas?",
    resposta:
      "O dinheiro das suas vendas é depositado automaticamente na sua conta em até 1 dia útil. Para clientes Enterprise, oferecemos opções de antecipação com taxas diferenciadas.",
  },
  {
    pergunta: "Quais são as taxas cobradas pela Millionspay?",
    resposta:
      "Nossas taxas variam de acordo com o plano escolhido. Para crédito, as taxas começam em 2.99%. Para débito, a partir de 1.49%. E para Pix, a partir de 0.79%. Quanto maior seu volume de vendas, menores são as taxas.",
  },
  {
    pergunta: "Como funciona a integração via API?",
    resposta:
      "Nossa API RESTful é simples e bem documentada. Oferecemos SDKs em mais de 10 linguagens de programação, ambiente sandbox para testes e suporte dedicado para desenvolvedores. A integração pode ser feita em minutos.",
  },
  {
    pergunta: "A Millionspay é segura?",
    resposta:
      "Absolutamente! Somos certificados PCI-DSS nível 1, o mais alto padrão de segurança do setor de pagamentos. Além disso, utilizamos criptografia de ponta a ponta e temos um sistema anti-fraude com inteligência artificial.",
  },
  {
    pergunta: "Posso usar a Millionspay em minha loja física e online?",
    resposta:
      "Sim! Oferecemos soluções omnichannel completas. Você pode usar nossa maquininha para vendas presenciais e nossa API/plugins para vendas online, tudo integrado em um único dashboard.",
  },
  {
    pergunta: "Qual o prazo para ativação da conta?",
    resposta:
      "Após o envio da documentação, sua conta é ativada em até 48 horas úteis. Para clientes com documentação completa e verificada, a ativação pode ocorrer no mesmo dia.",
  },
  {
    pergunta: "Vocês oferecem suporte técnico?",
    resposta:
      "Sim! Oferecemos suporte por chat, email e telefone. Clientes Business e Enterprise têm acesso a suporte prioritário e gerente de conta dedicado.",
  },
  {
    pergunta: "Posso cancelar a qualquer momento?",
    resposta:
      "Sim, não há fidelidade. Você pode cancelar sua conta a qualquer momento sem multas. Basta solicitar o cancelamento pelo dashboard ou entrando em contato com nosso suporte.",
  },
]

export function DuvidasSection() {
  return (
    <section id="duvidas" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {duvidas.map((duvida, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {duvida.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {duvida.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
