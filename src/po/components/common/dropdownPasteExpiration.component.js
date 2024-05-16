const BaseComponent = require("./base.component");

class DropdownPasteExpirationComponent extends BaseComponent {
  constructor(rootSelector) {
    super(rootSelector);
  }

  item(selectors, option) {
    return this.rootEl.$(selectors[option.toLowerCase()]);
  }
}
module.exports = DropdownPasteExpirationComponent;
