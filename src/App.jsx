import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users,setUsers] = useState([])

  const fetchData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API}/users`)
    const result = res.data
    setUsers(result)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {users && users.map((user) => (
          <li key={user.id}>{user.name} {user.email} </li>
        ))}
      </ul>
    </div>
  )
}

export default App