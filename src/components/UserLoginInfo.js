import React, { useState } from 'react';

function UserLoginInfo({ title, buttonText, onSubmit }) {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  //Обработка инпутов
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };
  return (
    <form className='login' onSubmit={handleSubmit}>
      <p className='login__title'>{title}</p>
      <input
        className='popup__text-input popup__text-input_order_login-first popup__text-input_type_login'
        placeholder='Email'
        name='email'
        onChange={handleChangeInput}
      />
      <input
        className='popup__text-input popup__text-input_order_login-next popup__text-input_type_login'
        placeholder='Пароль'
        name='password'
        onChange={handleChangeInput}
      />
      <button className='popup__submit-button popup__submit-button-type_login'>
        {buttonText}
      </button>
    </form>
  );
}

export default UserLoginInfo;
