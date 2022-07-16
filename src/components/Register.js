import React from 'react';
import UserLoginInfo from './UserLoginInfo';

function Register() {
  return (
    <>
      <UserLoginInfo
        title='Регистрация'
        buttonText='Зарегистрироваться'></UserLoginInfo>
      <p className='login__description'>
        Уже зарегистрированы?{' '}
        <a className='login__description' href='google.com'>
          Войти
        </a>
      </p>
    </>
  );
}

export default Register;
