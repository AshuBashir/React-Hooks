import React , {useContext}from 'react';
import {AppContext} from './UseContext'

function LoginContext() {
    const {setUsername} = useContext(AppContext);
  return (
    <div>
      <input onChange={(event) =>{
          setUsername(event.target.value);
      }
    } />
    </div>
  )
}

export default LoginContext;
