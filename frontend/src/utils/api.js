class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _getServStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then((res) => this._getServStatus(res));
    }

    // Метод запроса карточек с сервера
    getApiCard() {
        return this._request(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        });
    }

    // Метод запроса информации о пользователе с сервера
    getApiInfo() {
        return this._request(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        });
    }

    // Метод обновления информации о пользователе на сервере
    setApiInfo({ name, about }) {
        return this._request(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        });
    }

    // Метод обновления аватара о пользователе на сервере
    setApiAvatar({ avatar }) {
        return this._request(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar,
            }),
        });
    }

    // Метод загрузки новой карточки на сервер
    setApiNewCard({ name, link }) {
        return this._request(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        });
    }

    // Метод удаления карточки на сервер
    deleteApiCard(id) {
        return this._request(`${this._url}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        });
    }

    // Метод обработки лайков на сервере
    changeLikeCardStatus(id, isLiked) {
        return this._request(`${this._url}/cards/${id}/likes`, {
            method: isLiked ? "PUT":"DELETE",
            headers: this._headers,
        });
    }
}

const token = localStorage.getItem("token"); // получаем сохранённый токен

// Инициализация данных для запроса данных с сервера
const api = new Api({
    url: "https://api.rotkin.nomoreparties.co",
    headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
    },
});

export default api;
