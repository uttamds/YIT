
## 1️⃣ Same Task Using **Callback vs Promise vs Async–Await**

### 🎯 Task

Wait for **1 second** and then print **Task Completed**

---

### 🔹 A. Using **Callback**

```js
function doTask(callback) {
  setTimeout(() => {
    callback("Task Completed");
  }, 1000);
}

doTask((message) => {
  console.log(message);
});
```

---

### 🔹 B. Using **Promise**

```js
function doTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Completed");
    }, 1000);
  });
}

doTask().then((message) => {
  console.log(message);
});
```

---

### 🔹 C. Using **Async / Await**

```js
function doTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task Completed");
    }, 1000);
  });
}

async function runTask() {
  const message = await doTask();
  console.log(message);
}

runTask();
```

---

### Quick Comparison

| Style             | Readability |
| ----------------- | ----------- |
| Callback          | Low         |
| Promise (`.then`) | Medium      |
| `async / await`   | High        |

---

---

## 2️⃣ Simple Example – **Checking / Managing State in JavaScript**

---

### 🔹 Example 1: Login State Simulation

```js
let isLoggedIn = false;

function login() {
  return new Promise((resolve) => {
    console.log("Logging in...");
    setTimeout(() => {
      isLoggedIn = true;
      resolve();
    }, 1500);
  });
}

async function checkLoginStatus() {
  await login();
  console.log("Is user logged in?", isLoggedIn);
}

checkLoginStatus();
```

---

### 🔹 Example 2: State Before and After Async Task

```js
let dataLoaded = false;

function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      dataLoaded = true;
      resolve();
    }, 2000);
  });
}

async function run() {
  console.log("Before load:", dataLoaded);
  await loadData();
  console.log("After load:", dataLoaded);
}

run();
```

---

### Student Takeaway

> In JavaScript, **state changes over time**, and `async / await` ensures it is checked only after the change completes.

