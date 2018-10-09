// STANDARD MODULE PATTERN

const UICtrl = (function() {
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

UICtrl.callChangeText();
// console.log(UICtrl.text); // cannot access text as it is private
// UICtrl.changeText(); // It is private and hence not accessible directly
