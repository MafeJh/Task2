const BaseComponent = require("./base.component");

class DropdownComponent extends BaseComponent {
  constructor(rootSelector) {
    super(rootSelector);
  }

  item(selectors, option) {
    return this.rootEl.$(selectors[option.toLowerCase()]);
  }
}

module.exports = DropdownComponent;
