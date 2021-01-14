import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import getToken from 'utils/getToken';

function GetToken() {
  const [token, setToken] = useState();

  const handleToken = async () => {
    const tokenResponse = await Axios.get(`http://localhost:3001/users/auth/${getToken()}`, null);

    setToken(tokenResponse.data.token);
  };

  return (
    <article className="mt-5 mb-5">
      <h2 className="mb-3">User token (JWT)</h2>
      {token && <p className="text-break">{`Token: ${token}`}</p>}
      <Button variant="primary" type="submit" onClick={handleToken}>
        Get token
      </Button>
    </article>
  );
}

export default GetToken;
