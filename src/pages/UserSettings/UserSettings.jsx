import React, { useState } from 'react';
import UpdateUser from './UpdateUser';
import RemoveUser from './RemoveUser';
import GetUser from './GetUser';
import GetToken from './GetToken';

const UserSettings = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: undefined,
    cpf: undefined,
  });

  const resetFields = () => {
    setUser({
      name: '',
      email: '',
      phoneNumber: undefined,
      cpf: undefined,
    });
  };

  const handleUserInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1 className="text-center">User Settings</h1>

      <GetUser />
      <UpdateUser user={user} handleUserInput={handleUserInput} resetFields={resetFields} />
      <RemoveUser resetFields={resetFields} />
      <GetToken />
    </>
  );
};

export default UserSettings;
