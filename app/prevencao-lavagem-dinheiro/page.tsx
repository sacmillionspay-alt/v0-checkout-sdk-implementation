import { PolicyPageLayout } from "@/components/landing/policy-page-layout"
import { POLITICA_PREVENCAO } from "@/lib/policies/prevencao"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prevenção à Lavagem de Dinheiro | MillionsPay",
  description: "Política de Prevenção à Lavagem de Dinheiro da MillionsPay.",
}

export default function PrevencaoLavagemDinheiroPage() {
  return (
    <PolicyPageLayout title="Prevenção à Lavagem de Dinheiro">
      <div className="policy-body">{POLITICA_PREVENCAO}</div>
    </PolicyPageLayout>
  )
}
