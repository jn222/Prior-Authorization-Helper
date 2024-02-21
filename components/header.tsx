import { FC } from "react"

interface Props {
  status: string
  determination: boolean
  procedure: string
}

const Header: FC<Props> = ({ status, determination, procedure }: Props) => {
  return (
    <div>
      <h1>{procedure}</h1>
      <div className="flex">
        <div>
          <h3>Status</h3>
          <h2>{status}</h2>
        </div>
        <div>
          <h3>Determination</h3>
          <h2>{determination ? "Probable Approval" : "Probable Denial"}</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
