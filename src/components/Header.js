import React from 'react';
import logo from '../images/logo.svg';
import { Link, Switch } from 'react-router-dom';

function Header({ isAuth }) {
  const getPanel = (isAuth) => {
    if (isAuth) {
      return (
        //Не работает переход на страницу. Вероятно из-за версионности
        // <Link to='/sign-in' className='header__link'>
        //   Войти
        // </Link>
        <a href='/sign-in' className='header__link'>
          Войти
        </a>
      );
    } else {
      return (
        //Не работает переход на страницу. Вероятно из-за версионности
        // <Link to='/sign-up' className='header__link'>
        //   Регистрация
        // </Link>
        <a href='/sign-up' className='header__link'>
          Регистрация
        </a>
      );
    }
  };
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      {getPanel(isAuth)}
    </header>
  );
}

export default Header;
