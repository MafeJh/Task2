const BasePage = require("./base.page");
const PasteFormComponent = require("../components/main/paste-form.component");

class MainPage extends BasePage {
  constructor() {
    super("/");
    this.form = new PasteFormComponent();
  }

  pasteExpirationItem(option) {
    const selectors = {
      ten_minutes: `//li[contains(@id,'10M')]`,
    };
    return this.form.item(this.form.pasteExpirationDropdown, selectors, option);
  }

  syntaxHighlightingItem(option) {
    const selectors = {
      bash: `(//li[contains(text(), 'Bash')])[1]`,
    };
    return this.form.item(
      this.form.syntaxHighlightingDropdown,
      selectors,
      option
    );
  }
}

module.exports = MainPage;
