const curry = (fn) => {
  let limit = fn.length;
  return function judgeCurry(...args) {
    if (args.length >= limit) {
      return fn.apply(null, args);
    } else {
      return function (...args2) {
        return judgeCurry.apply(null, args.concat(args2));
      }
    }
  }
};

const add = (a, b, c) => {return a + b + c};


const a = curry(add); // [Function: judgeCurry]
const b = a(1);       // [Function]
const c = b(2);       // [Function]
const d = c(3);       // 6


newFunction();

function newFunction() {
  console.log(a);
}
