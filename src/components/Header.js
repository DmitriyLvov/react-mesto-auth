import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ panelType }) {
  const getPanel = (panelType) => {
    switch (panelType) {
      case 'login': {
        return (
          //Не работает переход на страницу. Вероятно из-за версионности
          // <Link to='/sign-in' className='header__link'>
          //   Войти
          // </Link>
          <a href='/sign-in' className='header__link'>
            Войти
          </a>
        );
      }
      case 'register': {
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
      default: {
        return (
          //Не работает переход на страницу. Вероятно из-за версионности
          // <Link to='/sign-in' className='header__link'>
          //   Войти
          // </Link>
          <>
            <p>{panelType}</p>
            <a href='/sign-in' className='header__link'>
              Выйти
            </a>
          </>
        );
      }
    }
    if (panelType === 'login') {
      return (
        //Не работает переход на страницу. Вероятно из-за версионности
        // <Link to='/sign-in' className='header__link'>
        //   Войти
        // </Link>
        <a href='/sign-in' className='header__link'>
          Войти
        </a>
      );
    }
    if (panelType === 'register') {
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
    if (panelType === 'user') {
      return <p>"USER"</p>;
    }
  };
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      {getPanel(panelType)}
    </header>
  );
}

export default Header;
