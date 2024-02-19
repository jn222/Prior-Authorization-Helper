import { NextRequest } from "next/server"
import response from "./response.json"

export async function GET(_request: NextRequest) {
  return Response.json(response)
}
