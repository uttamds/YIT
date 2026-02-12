Here are **30 MCQs on Playwright** (basic → intermediate → a few advanced).
Good for students, interviews, or quizzes.

---

# Playwright MCQs

## Basics

**1. Playwright is mainly used for:**
A. Database testing
B. API development
C. End-to-end browser testing
D. Mobile app development
**Answer:** C

---

**2. Playwright was developed by:**
A. Google
B. Microsoft
C. Facebook
D. Amazon
**Answer:** B

---

**3. Default languages supported by Playwright include:**
A. Java, Python, C#, JavaScript
B. C++, Rust, Go
C. Kotlin only
D. PHP only
**Answer:** A

---

**4. Which command is used to install Playwright test framework?**
A. npm install playwright
B. npm init playwright@latest
C. npm install test-playwright
D. npm playwright install test
**Answer:** B

---

**5. Playwright supports which browsers?**
A. Chrome only
B. Firefox only
C. Chromium, Firefox, WebKit
D. Edge only
**Answer:** C

---

## Core Concepts

**6. The `page` object represents:**
A. A browser
B. A tab in the browser
C. A test file
D. A locator
**Answer:** B

---

**7. Which method is used to navigate to a URL?**
A. page.open()
B. page.goto()
C. page.navigate()
D. page.visit()
**Answer:** B

---

**8. Which locator strategy is recommended by Playwright?**
A. XPath only
B. CSS only
C. Text & role-based locators
D. ID only
**Answer:** C

---

**9. Which function is used for assertions in Playwright Test?**
A. assert()
B. verify()
C. expect()
D. check()
**Answer:** C

---

**10. Playwright tests run in:**
A. Single thread only
B. Parallel by default
C. Sequential only
D. Manual mode
**Answer:** B

---

## Locators

**11. Which locator finds element by visible text?**
A. getByText()
B. getByValue()
C. getByName()
D. getByClass()
**Answer:** A

---

**12. Which locator is best for buttons with ARIA roles?**
A. getByRole()
B. getByCSS()
C. getByXPath()
D. getByButton()
**Answer:** A

---

**13. `locator()` in Playwright is used to:**
A. Navigate pages
B. Find elements
C. Capture screenshots
D. Handle alerts
**Answer:** B

---

## Actions

**14. Which method is used to click an element?**
A. page.press()
B. page.click()
C. page.tap()
D. page.hit()
**Answer:** B

---

**15. Which method types into an input field?**
A. fill()
B. typeText()
C. write()
D. sendKeys()
**Answer:** A

---

**16. To select from a dropdown:**
A. chooseOption()
B. selectOption()
C. pickOption()
D. dropdownSelect()
**Answer:** B

---

## Waiting & Auto-wait

**17. Playwright auto-waits for:**
A. Elements to be visible and actionable
B. Page title
C. Database connection
D. Console logs
**Answer:** A

---

**18. Hard waits should be avoided because:**
A. They slow tests and are unreliable
B. They break browsers
C. They delete cookies
D. They disable locators
**Answer:** A

---

## Screenshots & Videos

**19. Method to take a screenshot:**
A. page.capture()
B. page.screenshot()
C. page.photo()
D. page.image()
**Answer:** B

---

**20. Playwright can record:**
A. Only logs
B. Only screenshots
C. Videos of test execution
D. Database queries
**Answer:** C

---

## Network & API

**21. Which feature allows mocking API responses?**
A. route()
B. intercept()
C. mockAPI()
D. fakeResponse()
**Answer:** A

---

**22. `page.route()` is used to:**
A. Navigate between pages
B. Intercept network requests
C. Handle popups
D. Capture logs
**Answer:** B

---

**23. To continue a request without modification:**
A. route.pass()
B. route.continue()
C. route.next()
D. route.forward()
**Answer:** B

---

## Frames, Tabs, Windows

**24. To interact with an iframe:**
A. page.switchFrame()
B. frameLocator()
C. page.iframe()
D. getFrameById()
**Answer:** B

---

**25. A new browser tab is called:**
A. window
B. page
C. session
D. frame
**Answer:** B

---

## Test Structure

**26. `test.describe()` is used for:**
A. Assertions
B. Grouping tests
C. Skipping tests
D. Running tests
**Answer:** B

---

**27. `beforeEach()` runs:**
A. Once per test file
B. Before every test
C. After every test
D. Only on failure
**Answer:** B

---

**28. Playwright configuration file name:**
A. playwright.json
B. config.js
C. playwright.config.ts
D. test.config.js
**Answer:** C

---

## Advanced

**29. Which feature helps with flaky tests?**
A. Retries
B. Console logs
C. Screenshots
D. Debug mode
**Answer:** A

---

**30. Trace viewer in Playwright is used to:**
A. Edit tests
B. Debug test execution step-by-step
C. Record videos
D. Run tests faster
**Answer:** B

---

