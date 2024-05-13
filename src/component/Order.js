import React from 'react'
import Updatefunction from './Higher'

function Order({count,addcount}) {
  return (
    <div>
       <h1>{count}</h1> 
      <button onClick={addcount}>inc</button>
    </div>
  )
}

export default Updatefunction(Order)
