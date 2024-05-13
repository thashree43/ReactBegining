import React from 'react'

function Child({inputdata}) {

  return (
    <div>
      <input type='text' onChange={(e)=>inputdata(e.target.value)}/>
    </div>
  )
}

export default Child
