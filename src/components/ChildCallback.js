import React , {useEffect} from 'react'

function ChildCallback({returnComment}) {

    useEffect(()=>{
            console.log("A fxn was called");
    } , [returnComment])


  return (
    <div>
        {returnComment("Ashu")}  
    </div>
  )
}

export default ChildCallback
