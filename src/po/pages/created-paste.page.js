const BasePage = require("./base.page");
const CreatedPasteComponent = require("../components/created-paste/created-paste.component");

class CreatedPastePage extends BasePage {
  constructor() {
    super("");
    this.form = new CreatedPasteComponent();
  }
}

module.exports = CreatedPastePage;
