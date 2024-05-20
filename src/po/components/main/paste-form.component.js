const BaseComponent = require("./../common/base.component");

class PasteFormComponent extends BaseComponent {
  constructor() {
    super("#w0");
  }

  get newPasteTextArea() {
    return this.rootEl.$("#postform-text");
  }

  get syntaxHighlightingDropdown() {
    return this.rootEl.$("div.field-postform-format span[role='presentation']");
  }

  get pasteExpirationDropdown() {
    return this.rootEl.$(
      "div.field-postform-expiration span[role='presentation']"
    );
  }

  get pasteNameInputText() {
    return this.rootEl.$("#postform-name");
  }

  get createNewPasteBtn() {
    return this.rootEl.$("//button[contains(text(), 'Create New Paste')]");
  }
}

module.exports = PasteFormComponent;
