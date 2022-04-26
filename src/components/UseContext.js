import React , {useState , createContext}  from 'react';
import LoginContext from './LoginContext';
import UserContext from './UserContext';

 export const AppContext= createContext(null);

function UseContext() {
    const [username, setUsername] = useState("");
  return (
    
    <AppContext.Provider value={{username ,  setUsername}}> 
     <LoginContext />
      <UserContext />
    </AppContext.Provider>
  )
}

export default UseContext
