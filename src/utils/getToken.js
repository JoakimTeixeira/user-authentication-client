const getToken = () => {
  const token = localStorage.getItem('auth-token') || '';

  return token;
};

export default getToken;
