

## ✅ What students already learned from this test

* Page navigation
* Button click
* Locator basics
* Simple assertion
* Real (live) data, no mocks

So the next test should **reuse the same page** and **same API**, but introduce **one new testing concept**.

---

# 🔹 NEXT TEST (Recommended):

## Verify *number of products loaded*

### 🎯 Why this is the best next step

* Introduces **multiple elements**
* Introduces **count()**
* No new HTML, no new API
* Very intuitive for beginners

---

### ✅ Test 2: Verify products count is greater than 0

```ts
import { test, expect } from '@playwright/test';

test('Verify products are loaded', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/api.html');

  await page.click('button');

  const products = page.locator('.card');

  await expect(products).toHaveCount(30); // or >= 1 if API changes
});
```

🧠 **Teaching takeaway:**

> “We are no longer checking one element, we are validating a list.”

---

# 🔹 NEXT AFTER THAT (Very logical follow-up)

## Test 3: Verify first product title is not empty

### 🎯 New concept

* `toBeVisible()`
* `not.toHaveText('')`

```ts
test('Verify first product title is displayed', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/api.html');
  await page.click('button');

  const firstTitle = page.locator('.card h3').first();

  await expect(firstTitle).toBeVisible();
  await expect(firstTitle).not.toHaveText('');
});
```

---

# 🔹 NEXT STEP (Introduce data reuse gently)

## Test 4: Reuse price value in assertion

```ts
test('Verify first product price contains $', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/api.html');
  await page.click('button');

  const firstPrice = page.locator('.card p').first();

  await expect(firstPrice).toContainText('$');
});
```

🧠 **Teaching takeaway:**

> “Sometimes exact values change — we assert patterns instead.”

---

# 🧩 Suggested Teaching Flow (1 session)

| Order  | Concept Introduced           |
| ------ | ---------------------------- |
| Test 1 | Single element + exact value |
| Test 2 | Multiple elements + count    |
| Test 3 | Visibility + non-empty       |
| Test 4 | Partial text assertion       |

---

