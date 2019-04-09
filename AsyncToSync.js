function taskA(done) { console.log('task A'); done(); }
function taskB(done) { setTimeout(function () { console.log('task B'); done(); }, 2000) }
function taskC(done) { setTimeout(function () { console.log('task C'); done(); }, 200) }
function taskD(done) { console.log('task D'); done(); }
function done() {}
// taskA(done);
// taskB(done);
// taskC(done);
// taskD(done);

function TaskRunner() {
  this.isRunning = false;
  this.taskQueue = [];
}
TaskRunner.prototype.add = function(task) {
  this.taskQueue.push(task);
  if (!this.isRunning) this.executeQueue();
}

TaskRunner.prototype.executeQueue = function() {
  if (this.taskQueue.length > 0) {
    let task = this.taskQueue.shift();
    this.invokeQueue(task);
  }
}

TaskRunner.prototype.invokeQueue = function(task) {
  this.isRunning = true;
  task.call(this, this.done.bind(this));
}

TaskRunner.prototype.done = function() {
  this.isRunning = false;
  this.executeQueue();
}

var taskRunner = new TaskRunner();
taskRunner.add(taskA);
taskRunner.add(taskB);
taskRunner.add(taskC);
taskRunner.add(taskD);
