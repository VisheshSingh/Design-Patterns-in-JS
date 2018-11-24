function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(item => {
      if (item !== fn) {
        return true;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(item => {
      item.call();
    });
  }
};

const click = new EventObserver();

// CLICK LISTENERS
document.getElementById("sub").addEventListener("click", function() {
  click.subscribe(getCurrentMilliSeconds);
});
document.getElementById("unsub").addEventListener("click", function() {
  click.unsubscribe(getCurrentMilliSeconds);
});
document.getElementById("fire").addEventListener("click", function() {
  click.fire();
});

// FUNCTIONS
function getCurrentMilliSeconds() {
  console.log(`Current Milli seconds: ${new Date().getMilliseconds()}`);
}
