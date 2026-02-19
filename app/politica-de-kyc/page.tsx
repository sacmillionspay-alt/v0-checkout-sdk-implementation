import { PolicyPageLayout } from "@/components/landing/policy-page-layout"
import { POLITICA_KYC } from "@/lib/policies/kyc"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de KYC | MillionsPay",
  description: "Política de Conheça seu Cliente (KYC) da MillionsPay.",
}

export default function PoliticaKYCPage() {
  return (
    <PolicyPageLayout title="Política de KYC">
      <div className="policy-body">{POLITICA_KYC}</div>
    </PolicyPageLayout>
  )
}
