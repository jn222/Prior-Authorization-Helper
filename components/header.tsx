import { FC } from "react"

interface Props {
  status: string
  determination: boolean
  procedure: string
  path: string[]
}

const Header: FC<Props> = ({
  status,
  determination,
  procedure,
  path
}: Props) => {
  return (
    <div className="space-y-5">
      <span className="text-3xl">{procedure}</span>
      <div className="space-x-5">
        <span>Status</span>
        <span className="text-lg">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="space-x-5">
        <span>Determination</span>
        <span className="text-lg">
          {determination ? "Probable Approval" : "Probable Denial"}
        </span>
      </div>
      <div className="space-x-5">
        <span>Path</span>
        <span className="text-lg">
          {path.reduce(
            (pathString, step) =>
              Number(step) !== 0 ? pathString.concat(`${step} → `) : pathString,
            ""
          )}
          {determination ? "✅" : "❌"}
        </span>
      </div>
    </div>
  )
}

export default Header
