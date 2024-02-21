import { Option } from "@/app/types/decision.types"
import { FC } from "react"
import { Checkbox } from "./ui/checkbox"
import classNames from "classnames"

interface Props {
  options: Option[]
  className?: string
}

const OptionList: FC<Props> = ({ options, className }: Props) => {
  return (
    <div className={classNames("space-y-2", className)}>
      {options.map((option) => (
        <div key={option.key} className="flex items-center space-x-2">
          <Checkbox checked={option.selected} className="cursor-default" />
          <label>{option.text}</label>
        </div>
      ))}
    </div>
  )
}
export default OptionList
