import { Evidence } from "@/app/types/decision.types"
import { FC } from "react"

interface Props {
  evidenceArr: Evidence[]
}

const EvidenceList: FC<Props> = ({ evidenceArr }: Props) => {
  return (
    <div>
      {evidenceArr.map((evidence, index) => (
        // TODO: Link pdf
        <div key={index}>{evidence.content}</div>
      ))}
    </div>
  )
}
export default EvidenceList
