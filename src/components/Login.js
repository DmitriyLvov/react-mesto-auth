import React, { useEffect } from 'react';
import UserLoginInfo from './UserLoginInfo';

function Login({ handleLogin, setHeaderType }) {
  useEffect(() => {
    setHeaderType('register');
  }, []);
  return (
    <UserLoginInfo
      title='Вход'
      buttonText='Войти'
      onSubmit={handleLogin}></UserLoginInfo>
  );
}

export default Login;
