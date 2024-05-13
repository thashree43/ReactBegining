import React, { useEffect, useState } from 'react'

function CustomHook() {
    const[count,setcount] = useState(0)
    const inc = ()=>{setcount(count + 1)}
    const dec =()=>{setcount(count - 1)}
  return [count,inc,dec]
}

function Hook(){
    const [count,inc,dec] = CustomHook(0)
    useEffect(()=>{
        console.log('mount')
        return ()=>{
            console.log('unmount')
        }
    })
    return(
        <div>
        <p>{count}</p>
        
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        </div>
    )
}
export default Hook
