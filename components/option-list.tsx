import { Option } from "@/app/types/decision.types"
import { FC, useState } from "react"
import { Checkbox } from "./ui/checkbox"
import classNames from "classnames"

interface Props {
  options: Option[]
  className?: string
}

const OptionList: FC<Props> = ({ options, className }: Props) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={classNames("space-y-2", className)}>
      {options
        .filter((option) => expanded || option.selected)
        .map((option) => (
          <div key={option.key} className="flex items-center space-x-2">
            <Checkbox checked={option.selected} className="cursor-default" />
            <label>
              ({option.key}) {option.text}
            </label>
          </div>
        ))}
      <div
        className="underline mt-5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide" : "Show"} unselected options
      </div>
    </div>
  )
}
export default OptionList
