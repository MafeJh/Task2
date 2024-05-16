const BaseComponent = require("./../common/base.component");
const TextAreaComponent = require("./../common/text-area.component");
const DropdownSyntaxHighlightComponent = require("../common/dropdownSyntaxHighlight.component");
const DropdownPasteExpirationComponent = require("../common/dropdownSyntaxHighlight.component");
const InputNameComponent = require("../common/inputName.component");
const ButtonCreateNewPaste = require("../common/inputName.component");

class PasteFormComponent extends BaseComponent {
  constructor() {
    super("#w0");
    this._newPasteTextArea = new TextAreaComponent("#postform-text");
    this._syntaxHighligthDropdown = new DropdownSyntaxHighlightComponent(
      "div.field-postform-format span[role='presentation']"
    );
    this._pasteExpirationDropdown = new DropdownPasteExpirationComponent(
      "div.field-postform-expiration span[role='presentation']"
    );
    this._pasteNameInputText = new InputNameComponent("#postform-name");
    this._buttonCreateNewPaste = new ButtonCreateNewPaste(
      "//button[contains(text(), 'Create New Paste')]"
    );
  }

  get newPasteTextArea() {
    return this._newPasteTextArea.rootEl;
  }

  get syntaxHighlightingDropdown() {
    return this._syntaxHighligthDropdown.rootEl;
  }

  get pasteExpirationDropdown() {
    return this._pasteExpirationDropdown.rootEl;
  }

  get pasteNameInputText() {
    return this._pasteNameInputText.rootEl;
  }

  get createNewPasteBtn() {
    return this._buttonCreateNewPaste.rootEl;
  }

  selectorOption(option) {
    const selectors = {
      bash: `(//li[contains(text(), 'Bash')])[1]`,
      ten_minutes: `//li[contains(@id,'10M')]`,
    };
    return this._syntaxHighligthDropdown.item(selectors, option);
  }
}

module.exports = PasteFormComponent;
