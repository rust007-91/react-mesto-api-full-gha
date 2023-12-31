[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# Проект Mesto (full)

---
### Описание и функциональность:
Сервис `Mesto`: Интерактивная страница, разработанная на React, представляет собой сервис, позволяющий редактировать профиль и добавлять фотографии в личном кабинете.
Реализована интерактивность карточек, форм, попапов, а также регистрация, авторизации пользователя и валидация на стороне клиента.
Репозиторий содержит фронтенд и бэкенд части приложения.

Вот что было сделано:

* свёрстаны компоненты на React, разметка портирована в его формат
* описана логика и вёрстка страниц регистрации, логина, редактирования профиля, сохранённых карточек
* реализованы асинхронные GET- и POST-запросы к API
* проработаны авторизованные и неавторизованные состояния, сохранение фильмов в профиле
* настроена инфраструктура и создан сервер на express
* подключена база данных, созданы схемы и модели ресурсов API
* реализовано логирование, аутентификация и авторизация на сервере

Планы по доработке проекта:
* Проект закончен и готов к деплою


### 🛠️ Инструменты и стек:

* HTML, CSS, CSS Grid Layout, CSS Flexbox, Adaptive layout, БЭМ
* JavaScript, React, Работа с API
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

## Адрес репозитория

[Ссылка на Front-end](https://github.com/rust007-91/react-mesto-api-full-gha)
