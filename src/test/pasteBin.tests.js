const { pages } = require("./../po/index");

describe("PasteBin page", () => {
  beforeEach(async () => {
    // Open https://pastebin.com/ or a similar service in any browser.
    await pages("main").open();
  });

  // Create 'New Paste' with the following attributes:
  it("Create a new paste", async () => {
    const expectedTextCode =
      `git config --global user.name "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`
        .replace(/\s+/g, " ")
        .trim();

    // Paste a message into the text area creating a New Paste
    await pages("main").pasteForm.newPasteTextArea.addValue(expectedTextCode);
    // * Syntax Highlighting: "Bash"
    await pages("main").pasteForm.syntaxHighlightingDropdown.click();
    await pages("main").pasteForm.selectorOption("bash").click();

    // * Paste Expiration: "10 Minutes"
    await pages("main").pasteForm.pasteExpirationDropdown.click();
    await pages("main").pasteForm.selectorOption("ten_minutes").click();

    // * Paste Name / Title: "how to gain dominance among developers"
    await pages("main").pasteForm.pasteNameInputText.addValue(
      "how to gain dominance among developers"
    );

    // 3. Save 'paste' and check the following:
    await pages("main").pasteForm.createNewPasteBtn.click();

    // * Browser page title matches 'Paste Name / Title'
    //await expect(browser).toHaveTitle("how to gain dominance among developers");
    // const element = await $(
    //   "//h1[contains(text(), 'how to gain dominance among developers')]"
    // );

    // const textTitle = await element.getText();
    // await expect(textTitle).toContain("how to gain dominance among developers");
    // * Syntax is suspended for bash

    // * Check that the code matches the one from paragraph 2
    // const textArea = await $("ol.bash");
    // await textArea.waitForExist();
    // const text = await textArea.getText();
    // const normalizedText = text.replace(/\s+/g, " ").trim();
    // expect(normalizedText).toContain(expectedTextCode);
  });
});
