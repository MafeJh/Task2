const BasePage = require("./base.page");
const PasteFormComponent = require("../components/main/paste-form.component");

class MainPage extends BasePage {
  constructor() {
    super("/");
    this.pasteForm = new PasteFormComponent();
  }
}

module.exports = MainPage;
