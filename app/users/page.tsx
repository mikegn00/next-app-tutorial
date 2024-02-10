import React from 'react'

interface User {
  id: number;
  name: string;
  email : string;
}

const UsersPage = async () => {

  const result = await fetch('https://jsonplaceholder.typicode.com/users', 
  { cache: 'no-store' }
  // { next: { revalidate: 10 } }
  );

  const users: User[] = await result.json();

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map(user => 
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
      </table>
    </div>
  )
}

export default UsersPage