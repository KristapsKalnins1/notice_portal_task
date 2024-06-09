## Description
This is test project, based on Playwright framework to automate the testing of employee notice portal https://omega-vismatestingapp.azurewebsites.net/

Test reports are generated using Allure

## Setup
To set up the project on your local machine, follow these steps:

**1. Install dependencies:**

```
npm install
```

**2. Install Playwright:**

```
npx playwright install
```

**3. Run the tests(by default 
it will run tests in `e2e` folder):**

```
npx playwright test
```

**4. Generate Allure report:**

```
allure generate allure-results -o allure-report --clean
```

**5. Open Allure report in browser:**
```
allure open allure-report
```