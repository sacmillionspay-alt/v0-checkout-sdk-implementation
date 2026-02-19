import { PolicyPageLayout } from "@/components/landing/policy-page-layout"
import { POLITICA_CHARGEBACK } from "@/lib/policies/chargeback"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Chargeback | MillionsPay",
  description: "Política de Chargeback da MillionsPay.",
}

export default function PoliticaChargebackPage() {
  return (
    <PolicyPageLayout title="Política de Chargeback">
      <div className="policy-body">{POLITICA_CHARGEBACK}</div>
    </PolicyPageLayout>
  )
}
