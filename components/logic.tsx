import { Logic } from "@/app/types/decision.types"
import { FC } from "react"
import { Checkbox } from "./ui/checkbox"

interface Props {
  logicArr: Logic[]
}

const Logic: FC<Props> = ({ logicArr }: Props) => {
  return (
    <div>
      {/* TODO: Don't use index */}
      {logicArr.map((logic, index) => (
        <div key={index} className="flex">
          <Checkbox checked={logic.selected} />
          <label>{logic.text}</label>
        </div>
      ))}
    </div>
  )
}
export default Logic
