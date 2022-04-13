/**
 * 380. O(1) 时间插入、删除和获取随机元素
 *
 * 实现RandomizedSet 类：
 *  * RandomizedSet() 初始化 RandomizedSet 对象
 *  * bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
 * *  bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
 *  * int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。
 *
 * 你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。
 */

var RandomizedSet = function () {
  this.data = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  let index = this.data.includes(val);
  if (index) return false;
  this.data.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  let index = this.data.findIndex((e) => e === val);
  if (index === -1) return false;
  this.data.splice(index, 1);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let index = Math.floor(Math.random() * this.data.length);
  return this.data[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/**
 * 最简单直观的解法,应该不给过的
 * 
 * 可以增加一个对象或set作为优化,这样删除时和新增时不需要遍历检查是否存在
 * 
 * 所以此题解还到不了O1的时间复杂度
 * 执行用时：408 ms, 在所有 JavaScript 提交中击败了39.47%的用户
 * 内存消耗：92.1 MB, 在所有 JavaScript 提交中击败了35.17%的用户
 */