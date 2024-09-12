/**
 * 2576. 求出最多标记下标
 *
 * 给你一个下标从 0 开始的整数数组 nums 。
 * 一开始，所有下标都没有被标记。你可以执行以下操作任意次：
 *  * 选择两个 互不相同且未标记 的下标 i 和 j ，满足 2 * nums[i] <= nums[j] ，标记下标 i 和 j 。
 * 请你执行上述操作任意次，返回 nums 中最多可以标记的下标数目。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  let set = new Set();
  let count = 0;
  nums.sort((a, b) => b - a);
  let start = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] * 2 <= nums[0]) {
      start = i;
      break;
    }
  }
  let left = 0;
  for (let i = start; i < nums.length; i++) {
    if (nums[left] >= nums[i] * 2 && !set.has(left) && !set.has(i)) {
      set.add(left);
      set.add(i);
      count += 2;
      left++;
    } else if (set.has(left)) {
      while (set.has(left)) {
        left++;
      }
    }
  }
  return count;
};
/**
 *  此思路是找的最大节点与对应公式的内部节点,从此节点遍历查找,
 * 此解法无法解决起始节点不是最优开始节点的问题,会导致节点浪费
 */

/**
 * 官方题解: 双指针
 */
var maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // 简单粗暴
  const m = Math.floor(n / 2);
  let res = 0;
// 反正就是查,查不到就一直查,直到查到头
  for (let i = 0, j = m; i < m && j < n; i++) {
    while (j < n && 2 * nums[i] > nums[j]) {
      j++;
    }
    if (j < n) {
      res += 2;
      j++;
    }
  }

  return res;
};
/**
 * 有时候简单粗暴一点更符合要求
 */