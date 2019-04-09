/**
 *  Lazy instantiation skeleton for a singleton pattern
 */

var MyNameSpace = {};

MyNameSpace.Singleton = (function() {
  // Private attribute that holds the single instance
  var singletonInstance;

  // All of the normal code goes here
  function constructor() {
    // Private members
    var privateVar1 = "Shawn";
    var privateVar2 = [1, 2, 3, 4, 5];

    function privateMethod1() {
      // code stuff
    }

    function privateMethod2() {
      // code stuff
    }

    return {
      attribute1: "Shawn",
      publicMethod: function() {
        console.log(this.attribute1); // some code logic
      }
    }
  }

  return {
    // public method (Global access point to Singleton object)
    getInstance: function() {
      // instance already exist then return
      if (!singletonInstance) {
        singletonInstance = constructor();
      }
      return singletonInstance;
    }
  }
})();

// getting access of publicMethod
// console.log(MyNameSpace.Singleton.getInstance().publicMethod());
var ins = MyNameSpace.Singleton.getInstance().publicMethod();
console.log(ins);
var con = MyNameSpace.Singleton.getInstance().publicMethod();
console.log(con);
