"use client"

import PriorAuthorizationForm, {
  PriorAuthorizationFormSchema
} from "@/components/prior-authorization-form"
import { useState } from "react"
import { z } from "zod"
import { Determination } from "./types/determination.types"
import DeterminationView from "@/components/determination-view"

/**
 * This page renders the form for uploading records/guidelines. After the Mock API is called,
 * the determination analysis is displayed.
 */
export default function Home() {
  const [determination, setDetermination] = useState<Determination>()
  const [determinationError, setDeterminationError] = useState<string>()
  const [determinationLoading, setDeterminationLoading] = useState(false)
  const onSubmit = async (
    values: z.infer<typeof PriorAuthorizationFormSchema>
  ) => {
    setDeterminationError("")
    setDeterminationLoading(true)
    try {
      // Write pdf files to server
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
      setDetermination(data)
    } catch (error) {
      console.error("Error while processing: ", error)
      setDeterminationError("There was an error in processing.")
    } finally {
      setDeterminationLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pb-10">
      {determination && (
        <div className="w-full mb-10">
          <span
            className="cursor-pointer underline"
            onClick={() => {
              setDetermination(undefined)
            }}
          >
            {"<"} Submit New Authorization
          </span>
        </div>
      )}
      <div>
        {determination ? (
          <DeterminationView determination={determination} />
        ) : (
          <PriorAuthorizationForm
            onSubmit={onSubmit}
            error={determinationError}
            loading={determinationLoading}
          />
        )}
      </div>
    </main>
  )
}
