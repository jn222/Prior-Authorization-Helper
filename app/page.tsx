"use client"

import PriorAuthorizationForm, {
  PriorAuthorizationFormSchema
} from "@/components/prior-authorization-form"
import { useState } from "react"
import { z } from "zod"
import { Decision } from "./types/decision.types"
import DecisionView from "@/components/decision-view"

export default function Home() {
  const [decision, setDecision] = useState<Decision>()
  const [decisionError, setDecisionError] = useState<string>()
  const onSubmit = async (
    values: z.infer<typeof PriorAuthorizationFormSchema>
  ) => {
    try {
      const formData = new FormData()
      formData.append("recordFile", values.recordFile)
      formData.append("guidelineFile", values.guidelineFile)
      const response = await fetch("/api/mock", {
        method: "POST",
        body: formData
      })
      let data
      if (response.ok) {
        data = await response.json()
      } else {
        throw new Error("API Error")
      }
      setDecision(data)
    } catch (error) {
      console.error("Error while processing: ", error)
      setDecisionError("There was an error in processing.")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {decision ? (
          <DecisionView decision={decision} />
        ) : (
          <PriorAuthorizationForm onSubmit={onSubmit} error={decisionError} />
        )}
      </div>
    </main>
  )
}
