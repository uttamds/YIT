Yesss this is the fun part 🔥 Let’s give them a **real-world style project** using a live demo e-commerce site used by automation engineers worldwide.

We’ll automate **Swag Labs** (by **Sauce Labs**)
Site: [https://www.saucedemo.com](https://www.saucedemo.com)
It’s perfect because it has login, products, cart, and checkout — a full user journey.

---

# 🧪 Project: End-to-End Shopping Flow (Real Site)

### 🧍 Test Scenario

1. Login as standard user
2. Add a product to cart
3. Open cart and verify item
4. Complete checkout
5. Verify order success message

![Image](https://user-images.githubusercontent.com/78273243/224333031-b4071ec1-cd61-4c47-a0df-250d68f3a55b.png)

![Image](https://webcompat.com/uploads/2023/10/c8460ee0-ac89-4559-9ee4-7fcd56a12b6a.jpeg)

![Image](https://pramam.github.io/webdriverio-saucedemo-testing/result-screenshots/allure-locked_out_user.png)

![Image](https://pramam.github.io/webdriverio-saucedemo-testing/images/checkout2.e2e.snapshot.png)

---

# 📁 Project Structure (Framework Style)

```
playwright-project/
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
└── tests/
    └── purchaseFlow.spec.js
```

This makes it feel like **industry automation framework**, not just scripts.

---

# 📄 pages/LoginPage.js

```js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
```

---

# 📄 pages/InventoryPage.js

```js
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartButton = '.inventory_item button';
    this.cartIcon = '.shopping_cart_link';
  }

  async addFirstProductToCart() {
    await this.page.locator(this.firstAddToCartButton).first().click();
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
```

---

# 📄 pages/CartPage.js

```js
export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = '.cart_item';
    this.checkoutButton = '#checkout';
  }

  async verifyItemInCart() {
    await this.page.waitForSelector(this.cartItem);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
```

---

# 📄 pages/CheckoutPage.js

```js
export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async fillDetails(fname, lname, zip) {
    await this.page.fill(this.firstName, fname);
    await this.page.fill(this.lastName, lname);
    await this.page.fill(this.postalCode, zip);
    await this.page.click(this.continueButton);
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  async verifyOrderSuccess() {
    await this.page.waitForSelector(this.successMessage);
  }
}
```

---

# 🧾 tests/purchaseFlow.spec.js

```js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete product purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Add product to cart
  await inventoryPage.addFirstProductToCart();

  // Step 3: Go to cart
  await inventoryPage.goToCart();
  await cartPage.verifyItemInCart();

  // Step 4: Checkout
  await cartPage.proceedToCheckout();
  await checkoutPage.fillDetails('Rahul', 'Sharma', '400001');

  // Step 5: Finish order
  await checkoutPage.finishOrder();

  // Step 6: Verify success
  await checkoutPage.verifyOrderSuccess();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
```

---

# 🎓 What Students Learn From This

✅ Real login handling
✅ Page Object Model structure
✅ Multi-page navigation
✅ Assertions in real flows
✅ Form filling & checkout process
✅ Framework-style reusable code

