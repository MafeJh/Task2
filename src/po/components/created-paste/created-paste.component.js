const BaseComponent = require("../common/base.component");

class CreatedPasteComponent extends BaseComponent {
  constructor() {
    super("div.container div.content");
  }

  get titleNamePasted() {
    return this.rootEl.$("div.info-top h1");
  }

  get bashLinkElement() {
    return this.rootEl.$("//a[@href='/archive/bash']");
  }

  get createdCodeTextArea() {
    return this.rootEl.$("ol.bash");
  }
}

module.exports = CreatedPasteComponent;
