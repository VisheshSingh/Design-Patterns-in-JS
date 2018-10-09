// STANDARD MODULE PATTERN

/* const UICtrl = (function() {
  let text = "May the force be with you!";

  function changeText() {
    let el = document.querySelector("h1");
    el.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText(); */
// console.log(UICtrl.text); // cannot access text as it is private
// UICtrl.changeText(); // It is private and hence not accessible directly

// REVEALING MODULE PATTERN

const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item pushed...");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, product: "Lightsaber" });
console.log(ItemCtrl.get(1));
