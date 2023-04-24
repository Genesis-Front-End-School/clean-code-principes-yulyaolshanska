# genesis-test-case

## Before surfing website check if you have CORS changer.

If don't and

- you use Google Chrome, there is a
  [link](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)
  to download extension

- you use Mozilla Firefox -
  [link](https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/)

  ## Available Scripts

In the project directory, you can run:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\

Used technologies:

- ReactJS
- TypeScript
- Redux
- RTK Query
- Styled components

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40"         height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" **alt="TypeScript" width="40"   height="40"/>&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
</div>

## Додаток містить дві сторінки:

- сторінка з курсами;
- сторінка з переглядом курсу;

## Детально про сторінки:

- В стрічці з курсами необхідно відображаються останні 10 курсів. Курс містить:
  - Фото курсу.
  - Заголовок курсу.
  - Кількість уроків, навички та рейтинг.
  - На сторінці виводимо 10 курсів і додаємо пагінацію.
- На сторінці з переглядом курсу відображається перше відео з даного курсу, деталі про курс та список уроків:
  - При кліку на урок (якщо він не заблокований) для перегляду відкриється поточне відео, користувач повинен розуміти, який урок з курсу переглядає.
  - Необхідно прогрес перегляду відео та уроку курсу зберігається (зберігається локально).
  - Якщо урок заблокований, це показано користувачу.
