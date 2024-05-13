import React from 'react'
// import Parent from './component/Parent'
// import Order from './component/Order'
import Mycom from './component/Mycom'
import Updatedfun from './component/Proxy'
import Btncolor from './component/Btncolor'
import Btnchange from './component/Btnchange'
import Hook from './component/customHook'
const Upd = Updatedfun(Mycom)
function App() {
  return (
    <div>
     {/* <Parent/> 
     <Order/> */}
     <Upd message = 'welcome to ooty'/>
     <Btncolor/>
     <Btnchange/>
     <Hook/>
    </div>
  )
}

export default App
