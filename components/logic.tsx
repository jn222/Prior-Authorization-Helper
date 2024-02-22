import { Logic } from "@/app/types/determination.types"
import { FC, useState } from "react"
import { Checkbox } from "./ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/collapsible"

interface Props {
  decision: string
  nextStep: string
  logicArr: Logic[]
}

/**
 * Displays the logic for moving to the next step
 */
const Logic: FC<Props> = ({ logicArr, decision, nextStep }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const isPlural = decision.split(",").length > 1
  return (
    <Collapsible
      open={expanded}
      onOpenChange={setExpanded}
      className="space-y-3"
    >
      <div className="font-bold text-xl">
        {isPlural ? "Options" : "Option"} {decision} {isPlural ? "are" : "is"}{" "}
        selected. <u>Therefore, the next step is question {nextStep}</u>
      </div>
      <CollapsibleTrigger className="underline">
        {expanded ? "Hide" : "Show"} why
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        {logicArr.map((logic) => (
          <div key={logic.text} className="flex items-center space-x-2">
            <Checkbox checked={logic.selected} className="cursor-default" />
            <label>{logic.text}</label>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
export default Logic
