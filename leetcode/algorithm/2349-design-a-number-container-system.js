/**
 * 2349. 设计数字容器系统
 * 
 * 设计一个数字容器系统，可以实现以下功能：
 *  * 在系统中给定下标处 插入 或者 替换 一个数字。
 *  * 返回 系统中给定数字的最小下标。
 * 请你实现一个 NumberContainers 类：

 *  * NumberContainers() 初始化数字容器系统。
 *  * void change(int index, int number) 在下标 index 处填入 number 。如果该下标 index 处已经有数字了，那么用 number 替换该数字。
 *  * int find(int number) 返回给定数字 number 在系统中的最小下标。如果系统中没有 number ，那么返回 -1 。
 */

var NumberContainers = function () {
  this.nums = new Map();
  this.heaps = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
  const oldNumber = this.nums.get(index);
  this.nums.set(index, number);
  if (!this.heaps.has(number)) {
    this.heaps.set(number, new MinPriorityQueue());
  }
  this.heaps.get(number).enqueue(index);
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  if (!this.heaps.has(number)) {
    return -1;
  }
  const heap = this.heaps.get(number);
  while (!heap.isEmpty() && this.nums.get(heap.front()) !== number) {
    heap.dequeue();
  }
  return heap.isEmpty() ? -1 : heap.front();
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
/**
 * 执行用时：256 ms, 在所有 JavaScript 提交中击败了-%的用户
 * 内存消耗：125.51 MB, 在所有 JavaScript 提交中击败了40.00%的用户
 */