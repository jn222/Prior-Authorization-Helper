import { Evidence } from "@/app/types/decision.types"
import { FC } from "react"
import classNames from "classnames"

interface Props {
  evidenceArr: Evidence[]
}

const EvidenceList: FC<Props> = ({ evidenceArr }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden border border-">
        
      {evidenceArr.map((evidence, index) => (
        <div
          key={evidence.content}
          className={classNames(
            "flex items-center p-4",
            index % 2 ? "bg-gray-50" : "bg-gray-200"
          )}
        >
          <div className="flex-none w-15 mr-10 text-center">
            <span>page {evidence.page_number}</span>
          </div>
          <div>{evidence.content}</div>
        </div>
      ))}
    </div>
  )
}
export default EvidenceList
