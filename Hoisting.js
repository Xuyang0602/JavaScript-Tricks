var employeeId = 'abc123';
function foo(){
  console.log(employeeId);
	employeeId = '123bcd';
  console.log(employeeId);
	return;

  function employeeId() {};
}
foo();
console.log(employeeId);

(function() {
  bar();
  function bar() {
    abc();
    console.log(typeof abc);
  }
  function abc() {
    console.log(typeof bar);
  }
}())
