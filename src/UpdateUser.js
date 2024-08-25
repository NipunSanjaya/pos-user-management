import React, { useState } from 'react';
import { updateUser } from './apiService';

function UpdateUser() {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(userId, { username, email, name });
      setMessage(`User updated: ${response.data.username}`);
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data.message : 'Network error'}`);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Update User</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateUser;
