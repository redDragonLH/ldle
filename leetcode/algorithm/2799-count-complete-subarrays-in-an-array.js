/**
 * 2799. 统计完全子数组的数目
 *
 * 给你一个由 正 整数组成的数组 nums 。
 * 如果数组中的某个子数组满足下述条件，则称之为 完全子数组 ：
 * 子数组中 不同 元素的数目等于整个数组不同元素的数目。
 * 返回数组中 完全子数组 的数目。
 * 子数组 是数组中的一个连续非空序列。
 */

/**
 * 双层遍历可以解决这个问题
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const n = nums.length;
  const set = new Set(nums);
  const m = set.size;
  let res = 0;
  for (let i = 0; i < n; i++) {
    const s = new Set();
    for (let j = i; j < n; j++) {
      s.add(nums[j]);
      if (s.size === m) {
        res++;
      }
    }
  }
  return res;
};
/**
 * 执行用时：214 ms, 在所有 JavaScript 提交中击败了 13.46%的用户
 * 内存消耗：60.54 MB, 在所有 JavaScript 提交中击败了 11.54%的用户
 */

/**
 * 滑动窗口
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  let res = 0;
  let cnt = new Map();
  const n = nums.length;
  let right = 0;
  // 计算不同元素的个数
  // 这里使用了 Set 来去重
  // size 属性可以获取 Set 的大小
  const distinct = new Set(nums).size;

  for (let left = 0; left < n; left++) {
    if (left > 0) {
      // 这里使用了 Map 来统计元素的个数
      const remove = nums[left - 1];
      // 如果元素的个数减一后为 0，则删除该元素
      cnt.set(remove, cnt.get(remove) - 1);
      if (cnt.get(remove) === 0) {
        cnt.delete(remove);
      }
    }
    // 这里使用了 Map 来统计元素的个数
    while (right < n && cnt.size < distinct) {
        // 如果元素的个数小于 distinct，则继续向右移动
      const add = nums[right];
        // 如果元素的个数加一后为 1，则添加该元素
      cnt.set(add, (cnt.get(add) || 0) + 1);
      right++;
    }
    if (cnt.size === distinct) {
      res += n - right + 1;
    }
  }
  return res;
};
