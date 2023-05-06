new Promise((resolve) => {
  setTimeout(() => {
    console.log("promise 1");
    resolve();
  }, 1000);
})
  .then(() => {
    const p2 = new Promise((resolve) => {
      setTimeout(() => {
        console.log("promise 2");
        resolve();
      }, 2000);
    });

    return p2;
  })
  .then(() => {
    const p3 = new Promise((resolve) => {
      setTimeout(() => {
        console.log("promise 3");
        resolve();
      }, 3000);
    });

    return p3;
  });
