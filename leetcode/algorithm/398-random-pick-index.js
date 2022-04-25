/**
 * 398. 随机数索引
 *
 * 给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。
 *
 * 注意：
 *  * 数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。
 */

/**
 * 不能太对是啥意思啊,转对象索引不给过么
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.map = new Map();
  nums.forEach((e, i) => {
    if (this.map.has(e)) {
      this.map.set(e, [...this.map.get(e), i]);
    } else {
      this.map.set(e, [i]);
    }
  });
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let nums = this.map.get(target);

  return nums[Math.floor(Math.random() * nums.length)];
};
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

/**
 * 还是给过了,不过效率感人
 *
 * 执行用时：124 ms, 在所有 JavaScript 提交中击败了25.40%的用户
 * 内存消耗：66.5 MB, 在所有 JavaScript 提交中击败了6.35%的用户
 */
