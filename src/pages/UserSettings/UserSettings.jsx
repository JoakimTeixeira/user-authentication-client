import React, { useState } from 'react';
import UpdateUser from './UpdateUser';
import RemoveUser from './RemoveUser';
import GetUser from './GetUser';
import GetToken from './GetToken';

const UserSettings = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    cpf: '',
  });

  const resetFields = () => {
    setUser({
      name: '',
      email: '',
      phoneNumber: '',
      cpf: '',
    });
  };

  return (
    <>
      <h1 className="text-center">User Settings</h1>

      <GetUser />
      <UpdateUser user={user} setUser={setUser} resetFields={resetFields} />
      <RemoveUser resetFields={resetFields} />
      <GetToken />
    </>
  );
};

export default UserSettings;
