import { FC } from "react"
import decision from "../api/mock/response.json"
import Header from "@/components/header"
import Step from "@/components/step"
import DecisionSummary from "@/components/decision-summary"

// TODO Docs
const Page: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-10">
      <div>
        <Header
          status={decision.status}
          determination={decision.is_met}
          procedure={decision.procedure_name}
        />
        {decision.steps.map((step) => (
          <Step step={step} key={step.key} />
        ))}
        <DecisionSummary
          approval={decision.is_met}
          summary={decision.summary}
        />
      </div>
    </main>
  )
}

export default Page
