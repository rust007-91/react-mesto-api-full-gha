[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# Проект Mesto (full)

---
### Описание и функциональность:
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, фронтенд - в `frontend/`. 
  
Пожалуйста, прикрепите в это описание ссылку на сайт, размещенный на Яндекс.Облаке.

Вот что было сделано:

* свёрстаны компоненты на React, разметка портирована в его формат
* описана логика и вёрстка страниц регистрации, логина, редактирования профиля, сохранённых карточек
* реализованы асинхронные GET- и POST-запросы к API
* проработаны авторизованные и неавторизованные состояния, сохранение фильмов в профиле
* настроена инфраструктура и создан сервер на express
* подключена база данных, созданы схемы и модели ресурсов API
* реализовано логирование, аутентификация и авторизация на сервере
* бэкенд задеплоен на Яндекс Облако

### 🛠️ Инструменты и стек:

* HTML, CSS, CSS Grid Layout, CSS Flexbox, Adaptive layout, БЭМ
* JavaScript, React, Работа с API (интерактивность карточек, форм, попапов, валидация на стороне клиента)
* Express
* MongoDB
* NodeJS
* API
* Nginx
* Postman

### Директории

`/Frontend`:

`/blocks` — папка с файлами стилей
`/components` — папка с файлами компонентов React
`/contexts` — папка с файлами дерева контекста
`/images` — папка с файлами картинок и иконок
`/utils` — папка с файлами описания промежуточных функций: запросов API

`/Backend`:

`/routes` — папка с файлами роутера
`/controllers` — папка с файлами контроллеров пользователя и фильмов  
`/models` — папка с файлами описания схем пользователя и фильмов  
`/middlewares` — папка с файлами описания промежуточных функций: авторизации, централизованного обработчика ошибок,
логера запросов и ошибок, лимита запросов и валидации

## Запуск проекта

Для развёртывания проекта необходимо:
* Запустить терминал (например GitBash)
* Перейти в нужную деррикторию командой "cd название_папки""
* Выполнить команду: "git clone https://github.com/rust007-91/react-mesto-api-full-gha.git"
* Открыть проект в любом удобном редакторе кода
* Перейти в деррикторию "/backend" командой "cd backend" и выполнить команду `npm install` для установки всех зависимостей
* Перейти в деррикторию "/frontend" командой "cd frontend" и выполнить команду `npm install` для установки всех зависимостей
* Выполнить команду `npm run start` — запускает проект frontend и backend (`npm run dev` — запускает сервер с hot-reload)

Адрес репозитория: https://github.com/rust007-91/react-mesto-api-full-gha

## Ссылки на проект

IP 158.160.35.124

Frontend https://rotkin.nomoreparties.co

Backend https://api.rotkin.nomoreparties.co
