"use client"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Home() {
  const [recordFile, setRecordFile] = useState<File>()
  const [guidelineFile, setGuidelineFile] = useState<File>()
  const form = useForm()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Form>
        <FormF
      </Form> */}
      <div>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setRecordFile(e.target.files[0])
            }
          }}
        />
      </div>
    </main>
  )
}
