Perfect 👍
Below is a **clean, step-by-step set of EXACT Playwright codes** mapped **1:1 with the flow I gave earlier**.
You can **copy–paste and demo each step in class**.

I’ll assume:

* JS + Playwright already installed
* Default Playwright project structure

---

# PHASE 1: First Working Test

### Task 1: Run Existing Sample Test

```bash
npx playwright test
```

---

# PHASE 2: Core Test Structure

### Task 2: Minimal Test – Open a Website

📁 `tests/basic.spec.js`

```js
const { test } = require('@playwright/test');

test('open google', async ({ page }) => {
  await page.goto('https://www.google.com');
});
```

Run:

```bash
npx playwright test
```

---

### Task 3: Multiple Tests in One File

```js
const { test } = require('@playwright/test');

test('open google', async ({ page }) => {
  await page.goto('https://www.google.com');
});

test('open wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
});
```

---

# PHASE 3: Locators & Actions

### Task 4: Locate and Type into Text Box

```js
const { test } = require('@playwright/test');

test('search in google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.locator('textarea[name="q"]').fill('Playwright automation');
  await page.keyboard.press('Enter');
});
```

---

### Task 5: Click a Button

```js
const { test } = require('@playwright/test');

test('click feeling lucky', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.locator('text=I\'m Feeling Lucky').click();
});
```

---

# PHASE 4: Assertions (Validation)

### Task 6: Verify Page Title

```js
const { test, expect } = require('@playwright/test');

test('verify title', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await expect(page).toHaveTitle('Wikipedia');
});
```

---

### Task 7: Verify Element Visibility

```js
const { test, expect } = require('@playwright/test');

test('search box visible', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await expect(page.locator('input#searchInput')).toBeVisible();
});
```

---

# PHASE 5: Auto-Wait (No Explicit Waits)

### Task 8: Auto Wait Demo

```js
const { test, expect } = require('@playwright/test');

test('auto wait demo', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.locator('textarea[name="q"]').fill('Playwright');
  await page.keyboard.press('Enter');
  await expect(page.locator('#search')).toBeVisible();
});
```

👉 No `sleep`, no `waitForTimeout`

---

# PHASE 6: Browser & Mode Control

### Task 9: Run in Headed Mode

```bash
npx playwright test --headed
```

---

### Task 10: Run in Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

# PHASE 7: Hooks & Test Organization

### Task 11: Use `beforeEach`

```js
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
});

test('check title', async ({ page }) => {
  await expect(page).toHaveTitle('Wikipedia');
});

test('check search box', async ({ page }) => {
  await expect(page.locator('#searchInput')).toBeVisible();
});
```

---

### Task 12: Group Tests using `describe`

```js
const { test, expect } = require('@playwright/test');

test.describe('Wikipedia tests', () => {

  test('title check', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');
    await expect(page).toHaveTitle('Wikipedia');
  });

  test('search input visible', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');
    await expect(page.locator('#searchInput')).toBeVisible();
  });

});
```

---

# PHASE 8: Reporting & Debugging

### Task 13: Generate HTML Report

```bash
npx playwright test
npx playwright show-report
```

---

### Task 14: Intentional Failure (Debugging)

```js
const { test, expect } = require('@playwright/test');

test('intentional failure', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await expect(page.locator('#wrongId')).toBeVisible();
});
```

👉 Show error, screenshot, trace in report

---

# PHASE 9: Mini End-to-End Flow

### Task 15: Complete User Flow

```js
const { test, expect } = require('@playwright/test');

test('end to end demo', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.locator('#searchInput').fill('Playwright');
  await page.keyboard.press('Enter');
  await expect(page.locator('#firstHeading')).toContainText('Playwright');
});
```

---

# WHAT STUDENTS MASTER AFTER THIS

✔ Writing tests
✔ Using async/await naturally
✔ Locators & actions
✔ Assertions
✔ Hooks & grouping
✔ Debugging failures
✔ HTML reports

---

If you want next:

* 🔹 **Same flow converted into LAB sheets**
* 🔹 **Interview-oriented Playwright tasks**
* 🔹 **Comparison demo: Selenium vs Playwright**
* 🔹 **7-day classroom-ready Playwright plan**

Say the word 👍
