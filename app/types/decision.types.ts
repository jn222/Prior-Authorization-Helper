export interface Decision {
  case_id: string
  status: string
  procedure_name: string
  cpt_codes: string[]
  summary: string
  is_met: boolean
  is_complete: boolean
  steps: Step[]
}

export interface Step {
  key: string
  question: string
  options: Option[]
  options_string: string
  logic: Logic[]
  logic_string: string
  reasoning: string
  decision: string
  next_step: string
  is_met: boolean
  is_final: boolean
  evidence: Evidence[]
}

export interface Option {
  key: string
  text: string
  selected: boolean
}

export interface Logic {
  text: string
  selected: boolean
}

export interface Evidence {
  content: string
  page_number: number
  pdf_id: string
  pdf_name: any
  event_datetime?: string | null
}
