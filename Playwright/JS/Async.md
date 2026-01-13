# JavaScript: From Synchronous to Asynchronous (Promises – Beginner Guide)

## 1. JavaScript is Synchronous by Default

JavaScript executes code **line by line**, one statement after another.

```js
console.log("A");
console.log("B");
console.log("C");
```

**Output**
```
A
B
C
```

---

## 2. The Problem: Some Tasks Take Time

Some operations cannot finish immediately:
- Waiting for time (`setTimeout`)
- Fetching data from a server
- Waiting for UI elements
- Reading files

If JavaScript waited synchronously, the entire program would freeze.

---

## 3. How JavaScript Handles This – Asynchronous Behavior

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 2000);

console.log("End");
```

**Output**
```
Start
End
(2 seconds later)
Inside timeout
```

JavaScript stays responsive by handling long tasks asynchronously.

---

## 4. The New Problem: Getting Results from Async Code

```js
let data;

setTimeout(() => {
  data = "Loaded";
}, 1000);

console.log(data); // undefined
```

The result is not ready when we try to use it.

---

## 5. Enter Promises

A **Promise** means:
> “I am working now and I promise to give you the result later.”

Promises help us **reliably handle async results**.

---

## 6. Promise States

A Promise can be:
1. Pending
2. Fulfilled
3. Rejected

Once settled, it never changes.

---

## 7. Creating a Simple Promise

```js
let promise = new Promise((resolve, reject) => {
  resolve("Task Done");
});
```

---

## 8. Consuming a Promise using .then()

```js
promise.then((result) => {
  console.log(result);
});
```

**Output**
```
Task Done
```

---

## 9. Promise with Delay

```js
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
```

---

## 10. Why Promises Were Introduced

Callbacks caused problems like:
- Hard to read code
- Difficult debugging
- Callback Hell

Promises made async code clean and structured.

---

## 11. Promises with async / await

```js
function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Loaded");
    }, 1000);
  });
}

async function test() {
  let result = await loadData();
  console.log(result);
}

test();
```

`await` pauses execution **without blocking JavaScript**.

---

## 12. One-Line Summary

JavaScript is synchronous by default, but **Promises allow us to handle asynchronous tasks cleanly and safely**.
