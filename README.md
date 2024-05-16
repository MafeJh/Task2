Configuration from scratch

1. Into the folder for the project execute `npm init wdio .`
   Set the options for the configuration from wdio like this:

- ? A project named "Task2" was detected at "D:\TrainingAutomation\WebDriverIO\Task2", correct? Yes
- ? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
- ? Where is your automation backend located? On my local machine
- ? Which environment you would like to automate? Web - web applications in the browser
- ? With which browser should we start? Chrome
- ? Which framework do you want to use? Mocha (https://mochajs.org/)
- ? Do you want to use a compiler? No!
- ? Do you want WebdriverIO to autogenerate some test files? Yes
- ? What should be the location of your spec files? D:\TrainingAutomation\WebDriverIO\Task2\test\specs\*\*\*.js
- ? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
- ? Where are your page objects located? D:\TrainingAutomation\WebDriverIO\Task2\test\pageobjects\*\*\*.js
- ? Which reporter do you want to use? spec
- ? Do you want to add a plugin to your test setup?
- ? Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! No
- ? Do you want to add a service to your test setup?
- ? Do you want me to run `npm install` Yes

2.  The command to run the tests is: `npm run wdio`
    Now the files for the project has beem created.

- Node modules folder
- test folder
- package-lock.json
- package.json file
- wdio.conf.js

3. Now delete test folder.

4. Refactor `wdio.config.js` in order to use common JS modules instead of EMS modules `exports.config` and descomenta the line `baseUrl: 'http://localhost:8080',`.

5. Create the root folder `src` with a `config` folder inside and paste the `wdio.conf.js` there and set the location for the specs in line: `specs: ["./../tests/*.tests.js"],`.

6. Create the folders `po`, `test` and `config` in the same level, into the `src` folder.

7. Into `tests` folder create the test file `pasteBin.tests.js`.

8. Into `po` folder create the `components` folder and `pages`, into components create `common` folder and `main` folder in the same level.

9. From main we have the component of interest named `paste-form.component.js` that has the text area for input the message, and the optional paste settings for fill and select the options nedeed in the test flow.

10. In `common` folder, we have the components shared for pages.

11. Implemented the POM desing pattern and best practices.
