import { FC } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import classNames from "classnames"

interface Props {
  approval: boolean
  summary: string
}

const DecisionSummary: FC<Props> = ({ approval, summary }: Props) => {
  return (
    <Card className={classNames(approval ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50")}>
      <CardHeader>
        <CardTitle
          className={classNames(approval ? "text-green-500" : "text-red-500")}
        >
          Likely {approval ? "approval" : "denial"}
        </CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
    </Card>
  )
}
export default DecisionSummary
