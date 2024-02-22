import { FC } from "react"

interface Props {
  status: string
  determination: boolean
  procedure: string
  path: string[]
  cptCodes: string[]
}

const Header: FC<Props> = ({
  status,
  determination,
  procedure,
  path,
  cptCodes
}: Props) => {
  return (
    <div className="space-y-2">
      <span className="text-3xl font-bold">{procedure}</span>
      <div className="space-x-5 items-center">
        <span className="text-gray-500">Status:</span>
        <span className="text-lg">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="space-x-5 items-center">
        <span className="text-gray-500">Treatment Codes:</span>
        <span className="text-lg">{cptCodes.join(", ")}</span>
      </div>
      <div className="space-x-5 items-center">
        <span className="text-gray-500">Determination:</span>
        <span className="text-lg">
          {determination ? "Probable Approval" : "Probable Denial"}
        </span>
      </div>
      <div className="space-x-5 items-center">
        <span className="text-gray-500">Path:</span>
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
