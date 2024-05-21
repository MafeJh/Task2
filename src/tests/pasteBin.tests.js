const { pages } = require("../po/index");

describe("PasteBin Page", () => {
  let mainPage = null;
  let createdPastePage = null;

  beforeEach(async () => {
    // Instances
    mainPage = pages("main");
    createdPastePage = pages("createdPaste");
    // Open URL
    await browser.deleteCookies();
    await mainPage.open();
  });

  afterEach(() => {
    mainPage = null;
    createdPastePage = null;
  });

  it("Create a new paste", async () => {
    const expectedTextCode =
      `git config --global user.name "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`
        .replace(/\s+/g, " ")
        .trim();

    // Paste a message into the text area creating a New Paste
    await mainPage.form.newPasteTextArea.waitForExist();
    await mainPage.form.newPasteTextArea.addValue(expectedTextCode);
    // * Syntax Highlighting: "Bash"
    await mainPage.form.syntaxHighlightingDropdown.click();
    await mainPage.syntaxHighlightingItem("bash").click();

    // * Paste Expiration: "10 Minutes"
    await mainPage.form.pasteExpirationDropdown.click();
    await mainPage.pasteExpirationItem("ten_minutes").click();

    // * Paste Name / Title: "how to gain dominance among developers"
    await mainPage.form.pasteNameInputText.addValue(
      "how to gain dominance among developers"
    );

    // 3. Save 'paste' and check the following:
    await mainPage.form.createNewPasteBtn.click();

    // * Browser page title matches 'Paste Name / Title'
    const pasteNameTitle = await createdPastePage.form.titleNamePasted;
    await expect(pasteNameTitle).toHaveText(
      "how to gain dominance among developers"
    );

    // * Syntax is suspended for bash
    await expect(createdPastePage.form.bashLinkElement).toExist();

    // * Check that the code matches the one from paragraph 2
    const textArea = await createdPastePage.form.createdCodeTextArea;
    const text = await textArea.getText();
    const normalizedText = text.replace(/\s+/g, " ").trim();
    expect(normalizedText).toContain(expectedTextCode);
  });
});
