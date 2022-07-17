import React, { useEffect } from 'react';
import UserLoginInfo from './UserLoginInfo';

function Register({ handleRegisterUser, setHeaderType }) {
  useEffect(() => {
    setHeaderType('login');
  }, []);
  return (
    <>
      <UserLoginInfo
        title='Регистрация'
        buttonText='Зарегистрироваться'
        onSubmit={handleRegisterUser}
      />
      <p className='login__description'>
        Уже зарегистрированы?{' '}
        <a className='login__description' href='/sign-in'>
          Войти
        </a>
      </p>
    </>
  );
}

export default Register;
