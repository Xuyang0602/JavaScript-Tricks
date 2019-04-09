// taskRunner -> run the task one by one,
// Api, push, -> push the task into current task queue, and run the task queue im

// var r = new TaskRunner(3);
// r.push(exampleSimpleTask); // executes immediately
// r.push(exampleSimpleTask); // executes immediately
// r.push(exampleSimpleTask); // executes immediately
// r.push(exampleSimpleTask); // should wait until one of the running tasks completes
// r.push(exampleSimpleTask); // should wait until one of the running tasks completes


function TaskRunner(size) {
  this.size = size;
  this.queue = [];
}

TaskRunner.prototype.add = function(task) {
  if (this.size === 0) { // save it for future use
    this.queue.push(task);
  } else this.invokeQueue(task); // 立即执行
}

TaskRunner.prototype.invokeQueue = function(task) {
  task.call(this, this.done.bind(this));
  this.size--;
}

TaskRunner.prototype.done = function() {
  this.size++;
  this.executeQueue();
}

TaskRunner.prototype.executeQueue = function() {
  if (this.queue.length > 0) {
    let task = this.queue.shift();
    this.invokeQueue(task);
  }
}

function exampleSimpleTask(done) {
  console.log('task', new Date().getTime());
  setTimeout(done, 2000);
}

function done() {
  console.log('task', new Date().getTime());
}

var taskRunner = new TaskRunner(2);
taskRunner.add(exampleSimpleTask);
taskRunner.add(exampleSimpleTask);
taskRunner.add(exampleSimpleTask);
taskRunner.add(exampleSimpleTask);
