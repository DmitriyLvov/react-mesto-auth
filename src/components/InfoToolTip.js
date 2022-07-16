import React from 'react';
import Accepted from '../images/Accepted.png';
import Error from '../images/Error.png';

function InfoToolTip() {
  const getText = (isSuccess) => {
    return isSuccess
      ? 'Вы успешно зарегистрировались!'
      : 'Что-то пошло не так! Попробуйте ещё раз.';
  };
  const getImage = (isSuccess) => {
    return isSuccess ? Accepted : Error;
  };
  return (
    <>
      <div className='popup popup_type_image popup_opened'>
        <div className='popup__container popup__container_type_form'>
          <button
            type='button'
            className='popup__close-button'
            // onClick={onClose}
          ></button>
          <img className='popup__tooltip-image' src={getImage(false)} />
          <p className='popup__tooltip-text'>{getText(false)}</p>
        </div>
      </div>
    </>
  );
}

export default InfoToolTip;
