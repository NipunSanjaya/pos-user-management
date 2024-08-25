import React, { useState } from 'react';
import { getUserDetails } from './apiService';

function GetUserDetails() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUserDetails = async () => {
    try {
      const response = await getUserDetails(userId);
      setUser(response.data);
      setError('');
    } catch (error) {
      setError('User not found');
      setUser(null);
    }
  };

  return (
    <div>
      <h2>Get User Details</h2>
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={fetchUserDetails}>Get Details</button>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
        </div>
      )}
    </div>
  );
}

export default GetUserDetails;
