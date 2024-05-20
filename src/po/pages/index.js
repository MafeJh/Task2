const MainPage = require("./main.page");
const CreatedPastePage = require("./created-paste.page");

function pages(page) {
  const items = {
    main: new MainPage(),
    createdPaste: new CreatedPastePage(),
  };
  return items[page];
}

module.exports = { MainPage, CreatedPastePage, pages };
