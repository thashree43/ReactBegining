import React from "react";

const Updatedfun =(Oldcomp)=>{
    return function Newcomp(props){
        const newprops ={
            name:"high",
            age:12
        }
        return <Oldcomp {...props} {...newprops}/>
    }
}
export default Updatedfun