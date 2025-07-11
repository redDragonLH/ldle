/**
 * 1865. 找出和为指定值的下标对
 *
 * 给你两个整数数组 nums1 和 nums2 ，请你实现一个支持下述两类查询的数据结构：
 *  1 累加 ，将一个正整数加到 nums2 中指定下标对应元素上。
 *  2 计数 ，统计满足 nums1[i] + nums2[j] 等于指定值的下标对 (i, j) 数目（0 <= i < nums1.length 且 0 <= j < nums2.length）。
 * 实现 FindSumPairs 类：
 *  * FindSumPairs(int[] nums1, int[] nums2) 使用整数数组 nums1 和 nums2 初始化 FindSumPairs 对象。
 *  * void add(int index, int val) 将 val 加到 nums2[index] 上，即，执行 nums2[index] += val 。
 *  * int count(int tot) 返回满足 nums1[i] + nums2[j] == tot 的下标对 (i, j) 数目。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.cnt = new Map();
  for (const num of nums2) {
    this.cnt.set(num, (this.cnt.get(num) || 0) + 1);
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  const oldVal = this.nums2[index];
  this.cnt.set(oldVal, (this.cnt.get(oldVal) || 0) - 1);
  this.nums2[index] += val;
  const newVal = this.nums2[index];
  this.cnt.set(newVal, (this.cnt.get(newVal) || 0) + 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let ans = 0;
  for (const num of this.nums1) {
    const rest = tot - num;
    ans += this.cnt.get(rest) || 0;
  }
  return ans;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
