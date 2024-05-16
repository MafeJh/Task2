const MainPage = require("./main.page");

function pages(page) {
  const items = {
    main: new MainPage(),
  };
  return items[page.toLowerCase()];
}

module.exports = { MainPage, pages };
