Ohhh yes — mocking/intercepting isn’t just for payments. In real projects, it’s used *everywhere*. Here are **solid real-world use cases** you can tell students.

---

### 🔹 1️⃣ Login with OTP / 2FA

Apps send OTP via SMS/email using a third-party service.

**Why mock?**
We can’t access real OTP messages in automation.

**Mocked API:**
`POST /api/send-otp` → Return success
`POST /api/verify-otp` → Return verified

---

### 🔹 2️⃣ Flight / Hotel Search Results

Search results often come from external inventory systems.

**Why mock?**
Real availability and prices change constantly → tests become unstable.

**Mocked API:**
`GET /api/flights/search` → Return fixed list of flights

---

### 🔹 3️⃣ Product List in E-commerce

Homepage loads products from backend.

**Why mock?**
Backend data changes daily → test assertions break.

**Mocked API:**
`GET /api/products` → Return fixed product catalog

---

### 🔹 4️⃣ Order Confirmation

After checkout, system calls order service.

**Why mock?**
Real order creation may affect databases or inventory.

**Mocked API:**
`POST /api/orders/create` → Return order ID

---

### 🔹 5️⃣ Maps / Location Services

Apps use Google Maps or location APIs.

**Why mock?**
External APIs have limits, require keys, and may be slow.

**Mocked API:**
`GET /api/location/search?city=Mumbai`

---

### 🔹 6️⃣ Notification Services

System sends email or push notification after actions.

**Why mock?**
We don’t want to send real emails during tests.

**Mocked API:**
`POST /api/notifications/send`

---

### 🔹 7️⃣ Stock Market / Live Price Data

Finance apps pull live stock prices.

**Why mock?**
Live data changes every second → impossible to assert.

**Mocked API:**
`GET /api/stocks/latest`

---

### 🔹 8️⃣ File Upload to Cloud

Uploading files to AWS/GCP storage.

**Why mock?**
Real uploads cost time and storage.

**Mocked API:**
`POST /api/upload`

---

### 🔹 9️⃣ Weather Data

Travel or event apps fetch weather forecasts.

**Why mock?**
Weather APIs are external and rate-limited.

**Mocked API:**
`GET /api/weather/today`

---

### 🔹 🔟 Dashboard Analytics

Dashboards call heavy reporting APIs.

**Why mock?**
Reports may take minutes to generate.

**Mocked API:**
`GET /api/reports/sales-summary`

---

### 🧠 One-line takeaway for students

> **We mock whenever the UI depends on something external, unstable, costly, or slow.**

---

If you want next, I can give a **classroom activity** where students decide
👉 *“Mock or Not Mock?”* for different scenarios.
