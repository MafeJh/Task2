const { pages } = require("../po/index");

describe("PasteBin Page", () => {
  beforeEach(async () => {
    // Instances
    // mainPage = pages("main");
    // createdPastePage = pages("createdPaste");
    // Open URL
    await browser.deleteCookies();
    await pages("main").open();
    // await browser.deleteCookies();
  });

  it("Create a new paste", async () => {
    const expectedTextCode =
      `git config --global user.name "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`
        .replace(/\s+/g, " ")
        .trim();

    // Paste a message into the text area creating a New Paste
    await pages("main").form.newPasteTextArea.waitForExist();
    await pages("main").form.newPasteTextArea.addValue(expectedTextCode);
    // * Syntax Highlighting: "Bash"
    await pages("main").form.syntaxHighlightingDropdown.click();
    await pages("main").syntaxHighlightingItem("bash").click();

    // * Paste Expiration: "10 Minutes"
    await pages("main").form.pasteExpirationDropdown.click();
    await pages("main").pasteExpirationItem("ten_minutes").click();

    // * Paste Name / Title: "how to gain dominance among developers"
    await pages("main").form.pasteNameInputText.addValue(
      "how to gain dominance among developers"
    );

    // 3. Save 'paste' and check the following:
    await pages("main").form.createNewPasteBtn.click();

    // * Browser page title matches 'Paste Name / Title'

    console.log(await browser.getUrl());

    const pasteNameTitle = await pages("createdPaste").form.titleNamePasted;
    console.log(pasteNameTitle);
    await pasteNameTitle.waitForExist();
    const title = await pasteNameTitle.getText();
    await expect(title).toContain("how to gain dominance among developers");

    // * Syntax is suspended for bash
    //await expect($("//a[@href='/archive/bash']")).toExist();
    await expect(pages("createdPaste").form.bashElement).toExist();
    //await expect($("//a[@href='/archive/bash']")).toBeEnabled();
    await expect(pages("createdPaste").form.bashElement).toBeEnabled();

    // * Check that the code matches the one from paragraph 2
    //const textArea = await $("ol.bash");
    const textArea = await pages("createdPaste").form.createdCodeTextArea;
    await textArea.waitForExist();
    const text = await textArea.getText();
    const normalizedText = text.replace(/\s+/g, " ").trim();
    expect(normalizedText).toContain(expectedTextCode);
  });
});
