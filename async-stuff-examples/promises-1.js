const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("promise 1");
    resolve();
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("promise 2");
    resolve();
  }, 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("promise 3");
    resolve();
  }, 3000);
});

Promise.all([p1, p2, p3]).then(() => {
  // happens after 3 seconds because Promise.all *WAITS* until all 3 promises have resolved
  console.log("Promise.all");
});
