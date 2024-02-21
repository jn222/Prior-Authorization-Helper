import { Step } from "@/app/types/decision.types"
import { FC } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card"
import OptionList from "./option-list"
import EvidenceList from "./evidence-list"
import Logic from "./logic"

interface Props {
  step: Step
}

const Step: FC<Props> = ({ step }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{step.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <OptionList options={step.options} />
        {!step.is_met && <span>The requirements for this procedure have not been met.</span>}
        <div>{step.reasoning}</div>
        <EvidenceList evidenceArr={step.evidence} />
        <Logic logicArr={step.logic} />
      </CardContent>
    </Card>
  )
}
export default Step
