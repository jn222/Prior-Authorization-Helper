import { FC } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface Props {
  approval: boolean
  summary: string
}

const DecisionSummary: FC<Props> = ({ approval, summary }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Likely {approval ? "approval" : "denial"}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
    </Card>
  )
}
export default DecisionSummary
