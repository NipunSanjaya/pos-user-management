import React from 'react';
import CreateUser from './CreateUser';
import ListUsers from './ListUsers';
import GetUserDetails from './GetUserDetails';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <CreateUser />
      <ListUsers />
      <GetUserDetails />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default App;
