import React, {useContext} from 'react'
import {AppContext} from './UseContext'

function UserContext() {
    const {username} = useContext(AppContext);
  return (
    <div>
      <h3>User: {username}</h3>
    </div>
  )
}

export default UserContext
