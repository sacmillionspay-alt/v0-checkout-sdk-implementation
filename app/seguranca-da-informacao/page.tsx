import { PolicyPageLayout } from "@/components/landing/policy-page-layout"
import fs from "fs"
import path from "path"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Segurança da Informação | MillionsPay",
  description: "Política de Segurança da Informação da MillionsPay.",
}

function getSegurancaContent(): string {
  try {
    const filePath = path.join(process.cwd(), "public", "policies", "seguranca.txt")
    return fs.readFileSync(filePath, "utf8")
  } catch {
    return "Para exibir o conteúdo completo da Política de Segurança da Informação, copie o arquivo \"POLÍTICA DE SEGURANÇA DA INFORMAÇÃO.txt\" para a pasta public/policies/ com o nome seguranca.txt e reinicie o servidor."
  }
}

export default function SegurancaInformacaoPage() {
  const content = getSegurancaContent()
  return (
    <PolicyPageLayout title="Segurança da Informação">
      <div className="policy-body">{content}</div>
    </PolicyPageLayout>
  )
}
