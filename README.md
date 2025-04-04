# IBB Furniro - Интернет-магазин

Данный проект представляет собой демонстрационную версию интернет-магазина,
созданную в учебных целях для тренировки профессиональных навыков в
веб-разработке. Сайт не является реальным торговым сервисом.

- Информация о товарах получена через
  [DummyJSON API](https://dummyjson.com/products)
- Дизайн -
  [eCommerce Website](https://www.figma.com/community/file/1252561852327562039/ecommerce-website-web-page-design-ui-kit-interior-landing-page)

## Функционал

- Каталог товаров с фильтрацией по категориям/цене/рейтингу
- Подробные карточки товаров
- Корзина покупок
- Поиск по товарам

## Технологии

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Redux + RTK](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
- ![Lucide React](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge)
- ![Framer Motion](https://img.shields.io/badge/Motion-EF2D5E?style=for-the-badge&logo=framer&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Gennod/ibb-furniro.git
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение:

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:5173

## Демо

Посмотреть работающее приложение можно здесь:
[IBB-FURNIRO](https://ibb-furniro.netlify.app)

## Структура проекта

```
├── .gitignore
├── .prettierrc
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
    ├── header
    │   ├── cart.svg
    │   ├── heart.svg
    │   ├── search.svg
    │   └── user.svg
    ├── icon.svg
    ├── netlify.toml
    ├── promo
    │   └── bg.jpg
    └── shop
    │   └── bg.jpg
├── src
    ├── assets
    │   └── react.svg
    ├── components
    │   ├── layout
    │   │   ├── Footer
    │   │   │   ├── data
    │   │   │   │   └── constants.ts
    │   │   │   └── index.tsx
    │   │   └── Header
    │   │   │   ├── components
    │   │   │       ├── Menu.tsx
    │   │   │       └── Navigation.tsx
    │   │   │   ├── data
    │   │   │       └── constants.ts
    │   │   │   └── index.tsx
    │   ├── pages
    │   │   ├── About
    │   │   │   ├── components
    │   │   │   │   ├── AboutDesign.tsx
    │   │   │   │   └── TechStack.tsx
    │   │   │   ├── data
    │   │   │   │   └── about.data.tsx
    │   │   │   └── index.tsx
    │   │   ├── Cart
    │   │   │   └── index.tsx
    │   │   ├── Contact
    │   │   │   ├── components
    │   │   │   │   ├── ContactForm.tsx
    │   │   │   │   └── Contacts.tsx
    │   │   │   ├── data
    │   │   │   │   └── contact.data.tsx
    │   │   │   └── index.tsx
    │   │   ├── Home
    │   │   │   ├── components
    │   │   │   │   └── Promo.tsx
    │   │   │   └── index.tsx
    │   │   ├── ProductPage
    │   │   │   └── ProductPage.tsx
    │   │   └── Shop
    │   │   │   ├── components
    │   │   │       └── ShopFilter.tsx
    │   │   │   └── index.tsx
    │   └── ui
    │   │   ├── Loader.tsx
    │   │   ├── Pagination.tsx
    │   │   ├── ProductBadge.tsx
    │   │   ├── Products.tsx
    │   │   ├── ProductsComponents
    │   │       ├── ProductItem.tsx
    │   │       ├── ProductSkeleton.tsx
    │   │       └── ProductsSkeleton.tsx
    │   │   ├── SearchField.tsx
    │   │   ├── Select.tsx
    │   │   ├── SelectComponents
    │   │       ├── ShowSelect.tsx
    │   │       ├── SortSelect.tsx
    │   │       └── TagSelect.tsx
    │   │   └── breadcrumbs.tsx
    ├── index.css
    ├── main.tsx
    ├── store
    │   ├── hooks.ts
    │   ├── index.ts
    │   └── reducers
    │   │   ├── page.ts
    │   │   └── products.ts
    ├── types.ts
    ├── utils
    │   └── getTagColor.ts
    └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
