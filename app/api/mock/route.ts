import { NextRequest } from "next/server"
import response from "./response.json"

export async function POST(request: NextRequest) {
  // const formData = await request.formData()
  // if (formData.get("recordFile") && formData.get("guidelineFile")) {
  //   return Response.json(response)
  // }
  return Response.json(
    { error: "Please include both guideline and medical record files." },
    { status: 500 }
  )
}
