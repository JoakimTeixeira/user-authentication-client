import { AuthContext } from 'contexts/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';

function GetUser() {
  const { userData } = useContext(AuthContext);
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('auth-token') || '';

      const userResponse = await Axios.get(`http://localhost:3001/users/${userData.id}`, {
        headers: { 'x-auth-token': token },
      });

      setUser(userResponse);
    };

    getUser();
  }, [userData]);

  return (
    <article className="mt-5">
      <h2 className="mb-3">User information</h2>
      {user && (
        <>
          <p>{`Name: ${user.data.name}`}</p>
          <p>{`Email: ${user.data.email}`}</p>
          <p>{`Phone Number: ${user.data.phoneNumber}`}</p>
          <p>{`Cpf: ${user.data.cpf}`}</p>
        </>
      )}
    </article>
  );
}

export default GetUser;
