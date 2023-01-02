import { useState } from "react"

function Details() {
  const [count, setCount] = useState(1)
    return (
      <div>{count} <button onClick={() => setCount(p => p +1)}>+</button></div>
  )
}

export default Details