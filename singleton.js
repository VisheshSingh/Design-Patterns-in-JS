// SINGLETON PATTERN
// It is a manifestation of the module pattern and has an aninymoues function
// that returns only one instance of an object at a time and repeated calls to
// the constructor will return the same instance

// It maintains a private reference that nothing from outside can access

// Often times singletons are frowned upon as they give you a global point of access
// rather that embracing encapsulation

const Singleton = (function() {
  let instance;

  const createInstance = function() {
    const obj = new Object("Object instance!!!");
    return obj;
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

var instanceA = Singleton.getInstance();
var instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
