import React , {useRef} from 'react'
import Button from "./ButtonImperative" 
function UseImperativeHandle() {
  const btnRef = useRef(null)
  return (
    <div>
      <button style={{height: 30, marginBottom:10}} onClick = {()=>{
          btnRef.current.alterToggle();
      }}>Button From Parent</button>
      <Button ref={btnRef}/>
    </div>
  )
}

export default UseImperativeHandle;
