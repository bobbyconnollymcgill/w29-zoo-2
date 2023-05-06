// inversion of control
function assistant_chef(callback) {
  //do stuff
  setTimeout(() => {
    callback();
  }, 2000);
}

function recipe() {
  console.log("hi");
}

assistant_chef(recipe);
