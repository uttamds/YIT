Below is a **bare-minimum, classroom-friendly LAB** to get students **running 2 simple Playwright tests**.
No extras, no theory—just what they *must do* to see tests execute.

---

## 🧪 **LAB: Run Basic Playwright Tests**

### 🎯 Outcome

By the end of this lab, the student will:

* Install Playwright
* Run 2 basic browser tests
* View test results in the terminal

---

## ✅ **Prerequisite**

* Node.js installed
  (Check using: `node -v`)

---

## 🔹 **Step 1: Create Project Folder**

```bash
mkdir pw-lab
cd pw-lab
```

---

## 🔹 **Step 2: Initialize Playwright**

```bash
npm init playwright@latest
```

**Choose:**

* Language: **JavaScript**
* Tests folder: **tests**
* GitHub Actions: **No**
* Install browsers: **Yes**

---

## 🔹 **Step 3: Verify Folder Structure**

You should see:

```
pw-lab
 ├─ tests
 │   └─ example.spec.js
 ├─ playwright.config.js
 └─ package.json
```

---

## 🔹 **Step 4: Create First Test**

Create file: `tests/google.spec.js`

```js
const { test } = require('@playwright/test');

test('Open Google', async ({ page }) => {
  await page.goto('https://www.google.com');
});
```

---

## 🔹 **Step 5: Create Second Test**

Create file: `tests/title.spec.js`

```js
const { test, expect } = require('@playwright/test');

test('Check page title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
```

---

## 🔹 **Step 6: Run All Tests**

```bash
npx playwright test
```

---

## 🔹 **Step 7: Run Tests in Headed Mode**

```bash
npx playwright test --headed
```

---

## 🔹 **Step 8: View HTML Report**

```bash
npx playwright show-report
```

---

## ✅ **Expected Result**

* Browser opens
* Both tests pass
* Report opens in browser

---

## 🧠 **Instructor Tip (1-line explanation)**

> “Each test gets a fresh browser page, runs steps, and closes automatically.”
