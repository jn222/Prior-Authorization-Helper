import { Logic } from "@/app/types/decision.types"
import { FC } from "react"
import { Checkbox } from "./ui/checkbox"

interface Props {
  logicArr: Logic[]
}

const Logic: FC<Props> = ({ logicArr }: Props) => {
  return (
    <div className="space-y-2">
      {logicArr.map((logic) => (
        <div key={logic.text} className="flex items-center space-x-2">
          <Checkbox checked={logic.selected} className="cursor-default" />
          <label>{logic.text}</label>
        </div>
      ))}
    </div>
  )
}
export default Logic
