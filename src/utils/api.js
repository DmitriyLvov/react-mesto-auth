import { getResponseData } from './utils';

class Api {
  constructor(baseURL, headers) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  getAuthorInfo = () => {
    //Запрос данных с сервера
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers,
    }).then((res) => getResponseData(res));
  };

  setUserInfo = (data) => {
    const { name, about } = data;
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => getResponseData(res));
  };

  setAvatar = (avatar) => {
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => getResponseData(res));
  };

  getCards = () => {
    //Запрос карточек с сервера
    return fetch(`${this._baseURL}/mesto/cards`, {
      headers: this._headers,
    }).then((res) => getResponseData(res));
  };

  addNewCard = (data) => {
    const { name, link } = data;
    return fetch(`${this._baseURL}/mesto/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => getResponseData(res));
  };

  removeCard = (cardId) => {
    return fetch(`${this._baseURL}/mesto/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => getResponseData(res));
  };

  addLike = (cardId) => {
    return fetch(`${this._baseURL}/mesto/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => getResponseData(res));
  };

  removeLike = (cardId) => {
    return fetch(`${this._baseURL}/mesto/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => getResponseData(res));
  };

  updateToken = () => {
    this._headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  };
}

const api = new Api(process.env.REACT_APP_SERVER_URL, {
  authorization: `Bearer ${localStorage.getItem('jwt')}`,
  'Content-Type': 'application/json',
});
export default api;
