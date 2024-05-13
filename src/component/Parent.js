import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const[name,setname] = useState('')
    const handlechange=(value)=>{
        setname(value)
    }
  return (
    <div>
      <Child inputdata={handlechange}/>
      {name}
    </div>
  )
}

export default Parent
