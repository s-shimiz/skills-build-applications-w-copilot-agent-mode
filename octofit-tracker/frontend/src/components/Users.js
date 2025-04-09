import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://congenial-robot-pwrx4jxpp9c6vjv-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2>Users</h2>
      </div>
      <div className="card-body">
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
