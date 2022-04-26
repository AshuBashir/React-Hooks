import React , {useEffect, useLayoutEffect, useRef} from 'react'

function UseLayoutEffect() {
    const inputRef = useRef(null);
    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    }, []);

    useEffect(()=>{
        inputRef.current.value = "Hello";
    }, []);

  return (
    <div>
      <input type="text" ref={inputRef} value = "Ashu" style={{width:400 , height: 100}} />
    </div>
  )
}

export default UseLayoutEffect
