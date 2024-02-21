import { NextRequest } from "next/server"
import response from "./response.json"

export async function POST(request: NextRequest) {
  const { guideline, record } = await request.json()
  return Response.json(response)
}
