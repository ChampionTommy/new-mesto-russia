# MestoRussia
## _SSR-APPLICATION_

[![My Stack](https://skillicons.dev/icons?i=ts,nextjs,redux,express,mongodb)](https://skillicons.dev)

Решил взять свой старый проект (вроде как это курс яндекс.практикума, но мне плевать, я не платил, а взял пару идей и их стек технологий :D ) для того чтоб его отрефакторить и, банально, получить больше опыта.
###### Хотел добавить fsd и монорепу (хотя бы просто попробовать), но проект с "3 кнопками" писал бы месяц под все это дело.

Плюсы:
- Переписал полностью проект на TS.
- styles на tailwind + tailwind.config
- На фронте вместо react.context используется redux-toolkit
- На бекенде переписан multer и теперь каждая загруженная фотка имеет свой уникальный нейминг (дата upload)
- Сохранение jwt-token в localstorage и сохранение сессии
- из database используется mongodb-server
- вместо страниц используются компоненты
- eslint + prettier (в eslint мало правил т.к добавил его в самый последний момент и не хотел видеть 100+ errors по синтаксису)))
- вместо npm используется pnpm в угоду симлинкам
  
Минусы:
- Вместо модалок с error и всплывающими окнами был добавлен обычный интерфейс alert.
- BEM + SASS не был добавлен потому что хотелось попробовать tailwind и я думал что получится "каша", но и без того она появилась с добавлением tailwind.config
- Резинка сайта по сути от flex\grid + семантика, никакой адаптивки там нет.


## Installation

 [Node.js](https://nodejs.org/) v20+ to run.
 [Next.js](https://nextjs.org/) v13 to run. folder app/*

Install the dependencies and devDependencies and start the server.
backend & frontend ничем не отличается по установке, поэтому: 
```sh
cd reactMesto
pnpm install
pnpm dev
```

## Url production environments...
backend
```sh
127.0.0.1:1337
```
frontend
```sh
127.0.0.1:3000
```
