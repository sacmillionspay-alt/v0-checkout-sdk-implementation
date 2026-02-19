import { PolicyPageLayout } from "@/components/landing/policy-page-layout"
import fs from "fs"
import path from "path"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termo de Uso | MillionsPay",
  description: "Termos de Uso da plataforma MillionsPay.",
}

function getTermosContent(): string {
  try {
    const filePath = path.join(process.cwd(), "public", "policies", "termos.txt")
    return fs.readFileSync(filePath, "utf8")
  } catch {
    return "Para exibir o conteúdo completo dos Termos de Uso, copie o arquivo \"Termos de Uso.txt\" para a pasta public/policies/ com o nome termos.txt e reinicie o servidor."
  }
}

export default function TermosPage() {
  const content = getTermosContent()
  return (
    <PolicyPageLayout title="Termos de Uso">
      <div className="policy-body">{content}</div>
    </PolicyPageLayout>
  )
}
