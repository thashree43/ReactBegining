import React, { useState } from 'react'

function Btncolor() {
    const[color,setcolor] = useState('red')

  return (
    <div>
      <button style={{backgroundColor:color}}  onClick={()=>{setcolor(color ==='red'?'blue':'red')}}>Change The Button</button>
    </div>
  )
}

export default Btncolor
