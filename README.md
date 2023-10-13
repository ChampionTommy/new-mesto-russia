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
- вместо npm используется pnpm в угоду симлинкам
  
Минусы:
- Вместо модалок с error и всплывающими окнами был добавлен обычный интерфейс alert.
- BEM + SASS не был добавлен потому что хотелось попробовать tailwind и я думал что получится "каша", но и без того она появилась с добавлением tailwind.config
- Резинка сайта по сути от flex\grid + семантика, никакой адаптивки там нет.

Спорный момент:
- eslint + prettier (в eslint мало правил т.к добавил его после завершения проекта и не хотел видеть 100+ errors по синтаксису))), но при этом используется tslint + sonarjs. Под все это дело имеется конфиг огромный с правилами. Все работает, но увы, фиксы от eslint не помогут, он фиксит только часть...

## Installation

 [Node.js](https://nodejs.org/) v20+ to run.
 [Next.js](https://nextjs.org/) v13 to run. folder app/*


backend & frontend ничем не отличается по установке, поэтому: 
```sh
cd reactMesto
pnpm install
pnpm dev
```
Скрипты: 
```sh
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "format": "prettier --write {,*/**/}*.{ts,tsx}",
    "eslint": "eslint . --ext .ts,.tsx ./components",
    "eslint:dump": "eslint --print-config ./.eslintrc.json"
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
## Images
![2023-10-13_22-25-28](https://github.com/ChampionTommy/new-mesto-russia/assets/79994252/0a19996c-268e-4524-a6a3-1cca80ebc83a)
![2023-10-13_22-0![2023-10-13_22-08-34](https://github.com/ChampionTommy/new-mesto-russia/assets/79994252/372067b8-1bc1-4f84-9ef4-fe63e3982257)
9-38](https://github.com/ChampionTommy/new-mesto-russia/assets/79994252/c52ed4b3-8bc8-4032-a1ea-53cdc0486ac9)
![2023-10-13_22-07-46](https://github.com/ChampionTommy/new-mesto-russia/assets/79994252/b7cc228c-3066-4d08-8846-b71a93ad0879)



