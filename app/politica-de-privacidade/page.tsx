import { PolicyPageLayout } from "@/components/landing/policy-page-layout"
import { POLITICA_PRIVACIDADE } from "@/lib/policies/privacidade"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | MillionsPay",
  description: "Política de Privacidade da MillionsPay.",
}

export default function PoliticaPrivacidadePage() {
  return (
    <PolicyPageLayout title="Política de Privacidade">
      <div className="policy-body">{POLITICA_PRIVACIDADE}</div>
    </PolicyPageLayout>
  )
}
