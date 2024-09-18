/**
 * 2848. 与车相交的点
 *
 * 给你一个下标从 0 开始的二维整数数组 nums 表示汽车停放在数轴上的坐标。对于任意下标 i，nums[i] = [starti, endi] ，其中 starti 是第 i 辆车的起点，endi 是第 i 辆车的终点。
 * 返回数轴上被车 任意部分 覆盖的整数点的数目。
 */

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  let status = new Array(100).fill(0);
  for (const e of nums) {
    for (let i = e[0]; i <= e[1]; i++) {
      status[i] = 1;
    }
  }
  return status.reduce((p, c) => (c === 1 ? p + c : p), 0);
};
/**
 * 执行用时：87 ms, 在所有 JavaScript 提交中击败了6.67%的用户
 * 内存消耗：51.91 MB, 在所有 JavaScript 提交中击败了80.00%的用户
 */

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  const set = new Set();
  for (let arr of nums) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      set.add(i)
    }
  }
  return set.size;
};
