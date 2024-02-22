import { NextRequest } from "next/server"
import response from "./response.json"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Mock API response for co:helm AI
export async function POST(request: NextRequest) {
  const formData = await request.formData()
  if (formData.get("recordFile") && formData.get("guidelineFile")) {
    await sleep(3000)
    return Response.json(response)
  }
  return Response.json(
    { error: "Please include both guideline and medical record files." },
    { status: 500 }
  )
}
