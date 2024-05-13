import React, { useState } from 'react'

function Btnchange() {
    const[state,setstate] = useState(true)

  return (
    <div>
      <button onClick={()=>{setstate(!state)}}></button>
      {state && <button>Login</button>}
      {!state && <button>Logout</button>}
    </div>
  )
}

export default Btnchange
