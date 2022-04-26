import React , {useEffect, useState} from 'react'
import axios from 'axios'

function UseEffect() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            setData(response.data[0].email);
            console.log("api was called")
        });
    }, []);
  return (
    <div>
      <h1>{data}</h1>
      <h2>{count}</h2>
      <button onClick={()=>{setCount(count+1);
    }}>Click on me</button>
    </div>
  )
}

export default UseEffect
