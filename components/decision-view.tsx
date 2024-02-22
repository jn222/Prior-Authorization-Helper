import { FC } from "react"
import Header from "@/components/header"
import Step from "@/components/step"
import DecisionSummary from "@/components/decision-summary"
import { Decision } from "@/app/types/decision.types"

interface Props {
  decision: Decision
}

const DecisionView: FC<Props> = ({ decision }: Props) => {
  return (
    <div className="space-y-10">
      <Header
        status={decision.status}
        determination={decision.is_met}
        procedure={decision.procedure_name}
        path={decision.steps.map((step) => step.key)}
        cptCodes={decision.cpt_codes}
      />
      {decision.steps.map((step) => (
        <Step step={step} key={step.key} />
      ))}
      <DecisionSummary approval={decision.is_met} summary={decision.summary} />
    </div>
  )
}
export default DecisionView
