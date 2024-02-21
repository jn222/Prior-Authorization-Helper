import { Option } from "@/app/types/decision.types"
import { FC } from "react"
import { Checkbox } from "./ui/checkbox"

interface Props {
  options: Option[]
}

const OptionList: FC<Props> = ({ options }: Props) => {
  return (
    <div>
      {options.map((option) => (
        <div key={option.key} className="flex">
          <Checkbox checked={option.selected} />
          <label>{option.text}</label>
        </div>
      ))}
    </div>
  )
}
export default OptionList
