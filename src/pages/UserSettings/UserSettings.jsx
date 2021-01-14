import React, { useState } from 'react';
import UpdateUser from './UpdateUser';
import RemoveUser from './RemoveUser';

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

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="text-center">User Settings</h1>

      <UpdateUser user={user} handleUserInput={handleUserInput} resetFields={resetFields} />
      <RemoveUser resetFields={resetFields} />
    </>
  );
};

export default UserSettings;
