import React, { useEffect } from 'react';
import UserLoginInfo from './UserLoginInfo';

function Login({ login, setHeaderType }) {
  useEffect(() => {
    setHeaderType('register');
  }, []);
  return (
    <UserLoginInfo
      title='Вход'
      buttonText='Войти'
      onSubmit={login}></UserLoginInfo>
  );
}

export default Login;
