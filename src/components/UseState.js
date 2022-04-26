import React , {useState} from 'react'

function UseState() {
   const [counter, setCounter] = useState(0);
   const [InputValue, setInputValue] = useState("Ashu")
   
    const increment = ()=>{
        setCounter(counter +1);
    };

    const onChange = (event) =>{
        const newValue= event.target.value;
        setInputValue(newValue);
    };
  return (
    <div>
      {counter}
       <button onClick={increment}>Increment</button>
       <input type="text" placeholder='Enter something...' onChange={onChange} />
       {InputValue}
    </div>
  )
}

export default UseState
