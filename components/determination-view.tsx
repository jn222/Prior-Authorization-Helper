import { FC } from "react"
import Header from "@/components/header"
import Step from "@/components/step"
import DeterminationSummary from "@/components/determination-summary"
import { Determination } from "@/app/types/determination.types"

interface Props {
  determination: Determination
}

/**
 * Displays the determination analysis for a Prior Authorization submission
 */
const DeterminationView: FC<Props> = ({ determination }: Props) => {
  return (
    <div className="space-y-10">
      <Header
        status={determination.status}
        determination={determination.is_met}
        procedure={determination.procedure_name}
        path={determination.steps.map((step) => step.key)}
        cptCodes={determination.cpt_codes}
      />
      {determination.steps.map((step) => (
        <Step step={step} key={step.key} />
      ))}
      <DeterminationSummary
        approval={determination.is_met}
        summary={determination.summary}
      />
    </div>
  )
}
export default DeterminationView
