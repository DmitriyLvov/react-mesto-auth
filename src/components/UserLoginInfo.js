import React from 'react';

function UserLoginInfo({ title, buttonText }) {
  return (
    <form className='login'>
      <p className='login__title'>{title}</p>
      <input
        className='popup__text-input popup__text-input_order_login-first popup__text-input_type_login'
        placeholder='Email'
      />
      <input
        className='popup__text-input popup__text-input_order_login-next popup__text-input_type_login'
        placeholder='Пароль'
      />
      <button className='popup__submit-button popup__submit-button-type_login'>
        {buttonText}
      </button>
    </form>
  );
}

export default UserLoginInfo;
