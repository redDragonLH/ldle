/**
 * 3408. 设计任务管理器
 *
 * 一个任务管理器系统可以让用户管理他们的任务，每个任务有一个优先级。这个系统需要高效地处理添加、修改、执行和删除任务的操作。
 * 请你设计一个 TaskManager 类：
 *  * TaskManager(vector<vector<int>>& tasks) 初始化任务管理器，初始化的数组格式为 [userId, taskId, priority] ，表示给 userId 添加一个优先级为 priority 的任务 taskId 。
 *  * void add(int userId, int taskId, int priority) 表示给用户 userId 添加一个优先级为 priority 的任务 taskId ，输入 保证 taskId 不在系统中。
 *  * void edit(int taskId, int newPriority) 更新已经存在的任务 taskId 的优先级为 newPriority 。输入 保证 taskId 存在于系统中。
 *  * void rmv(int taskId) 从系统中删除任务 taskId 。输入 保证 taskId 存在于系统中。
 *  * int execTop() 执行所有用户的任务中优先级 最高 的任务，如果有多个任务优先级相同且都为 最高 ，执行 taskId 最大的一个任务。执行完任务后，taskId 从系统中 删除 。同时请你返回这个任务所属的用户 userId 。如果不存在任何任务，返回 -1 。
 * 注意 ，一个用户可能被安排多个任务。
 */
/**
 * @param {number[][]} tasks
 */
var TaskManager = function (tasks) {
  this.taskInfo = new Map();
  this.heap = new PriorityQueue((a, b) => {
    if (a[0] === b[0]) {
      return a[1] > b[1] ? -1 : 1;
    }
    return a[0] > b[0] ? -1 : 1;
  });

  for (const [userId, taskId, priority] of tasks) {
    this.taskInfo.set(taskId, [priority, userId]);
    this.heap.enqueue([priority, taskId]);
  }
};

/**
 * @param {number} userId
 * @param {number} taskId
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function (userId, taskId, priority) {
  this.taskInfo.set(taskId, [priority, userId]);
  this.heap.enqueue([priority, taskId]);
};

/**
 * @param {number} taskId
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function (taskId, newPriority) {
  if (this.taskInfo.has(taskId)) {
    const [priority, userId] = this.taskInfo.get(taskId);
    this.taskInfo.delete(taskId);
    this.taskInfo.set(taskId, [newPriority, userId]);
    this.heap.enqueue([newPriority, taskId]);
  }
};

/**
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function (taskId) {
  this.taskInfo.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function () {
  while (!this.heap.isEmpty()) {
    const [priority, taskId] = this.heap.dequeue();
    if (this.taskInfo.has(taskId) && this.taskInfo.get(taskId)[0] == priority) {
      const userId = this.taskInfo.get(taskId)[1];
      this.taskInfo.delete(taskId);
      return userId;
    }
  }
  return -1;
};

/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
/**
 * 执行用时：509 ms, 在所有 JavaScript 提交中击败了42.86%的用户
 * 内存消耗：133.49 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */