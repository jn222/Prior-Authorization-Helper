import { Evidence } from "@/app/types/decision.types"
import { FC, useState } from "react"
import classNames from "classnames"
import { ReaderIcon } from "@radix-ui/react-icons"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/collapsible"

interface Props {
  evidenceArr: Evidence[]
} 

const EvidenceList: FC<Props> = ({ evidenceArr }: Props) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Collapsible
      className="rounded-lg overflow-hidden border"
      open={expanded}
      onOpenChange={setExpanded}
    >
      <div className="flex bg-gray-50 items-center space-x-5 p-4">
        <ReaderIcon className="size-10" />
        <div>
          <p className="text-lg font-bold">
            This decision was made based on citations from the medical record.
          </p>
          <CollapsibleTrigger>
            <p className="underline">{expanded ? "Hide" : "Show"} evidence</p>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent>
        {evidenceArr.map((evidence, index) => (
          <div
            key={evidence.content}
            className={classNames(
              "flex items-center p-4",
              index % 2 ? "bg-gray-50" : "bg-gray-200"
            )}
          >
            <div className="flex-none w-10 mr-10 text-center">
              <span className="text-sm text-gray-500">
                Pg. {evidence.page_number}
              </span>
            </div>
            <div>{evidence.content}</div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
export default EvidenceList
