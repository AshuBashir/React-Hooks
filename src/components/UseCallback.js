import React, { useCallback } from 'react' ;
import { useState} from 'react'
import ChildCallback from './ChildCallback';

function UseCallback() {
    const[toggle, setToggle] = useState(false);
    const [data , setData] = useState(" Hello People");

    const returnComment = useCallback((name)=>{
        return data +name;
    }, [data]);

  return (
    <div>
        <ChildCallback returnComment= {returnComment} />

        <button onClick={ ()=>{
            setToggle(!toggle);
        }}>
                {""}
                Toggle
        </button>
      {toggle && <h1>toggle</h1> }
    </div>
  )
}

export default UseCallback
