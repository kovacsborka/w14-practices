import React, { useState} from 'react'

function ButtonWithHooks() {
  const [key1, setKey1] = useState("This is the default state of a hook component")
  const [key2, setKey2] = useState(0)

  

  return (
    <div>
      <button onClick={() => setKey1("Clicked")}>{key1}</button>
      <button onClick={() => setKey2(1)}>{key2}</button>
    </div>
  )
}

export default ButtonWithHooks