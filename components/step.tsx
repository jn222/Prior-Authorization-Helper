"use client"

import { Step } from "@/app/types/determination.types"
import { FC, useState } from "react"
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/collapsible"
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons"

interface Props {
  step: Step
}

/**
 * Displays a given step in the overall path of the prior authorization determination
 */
const Step: FC<Props> = ({ step }: Props) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Collapsible open={expanded} onOpenChange={setExpanded}>
      <Card>
        <CardHeader>
          <CardTitle>
            {Number(step.key) === 0
              ? "Preliminary Question"
              : `Question ${step.key}`}
          </CardTitle>
          <CardDescription>{step.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <OptionList options={step.options} className="mb-5" />
          {!step.is_met && (
            <span className="text-red-500 text-lg font-bold mb-5">
              The requirements for this procedure have not been met.
            </span>
          )}
          <div className="justify-center flex">
            <CollapsibleTrigger>
              <>
                <span className="underline">
                  {expanded ? "Less" : "More"} Info
                </span>
                <div className="justify-center flex">
                  {expanded ? (
                    <CaretUpIcon className="size-10" />
                  ) : (
                    <CaretDownIcon className="size-10" />
                  )}
                </div>
              </>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="space-y-10">
            <div className="space-y-5">
              <span className="font-bold text-lg">
                This choice was made because...
              </span>
              {step.reasoning.split("\n\n").map((reason) => (
                <div key={reason}>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
            {!!step.evidence.length && (
              <EvidenceList evidenceArr={step.evidence} />
            )}
            {!!step.logic.length && step.is_met && (
              <Logic
                logicArr={step.logic}
                decision={step.decision}
                nextStep={step.next_step}
              />
            )}
          </CollapsibleContent>
        </CardContent>
      </Card>
    </Collapsible>
  )
}
export default Step
