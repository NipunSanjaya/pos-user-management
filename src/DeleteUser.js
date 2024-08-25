import React, { useState } from 'react';
import { deleteUser } from './apiService';

function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      await deleteUser(userId);
      setMessage('User deleted successfully');
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data.message : 'Network error'}`);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleDelete}>Delete User</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteUser;
