/**
 * 3356. 零数组变换 II
 *
 * 给你一个长度为 n 的整数数组 nums 和一个二维数组 queries，其中 queries[i] = [li, ri, vali]。
 * 每个 queries[i] 表示在 nums 上执行以下操作：
 *  * 将 nums 中 [li, ri] 范围内的每个下标对应元素的值 最多 减少 vali。
 *  * 每个下标的减少的数值可以独立选择。
 * 零数组 是指所有元素都等于 0 的数组。
 * 返回 k 可以取到的 最小非负 值，使得在 顺序 处理前 k 个查询后，nums 变成 零数组。如果不存在这样的 k，则返回 -1。
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  let left = 0,
    right = queries.length;
  if (!check(nums, queries, right)) {
    return -1;
  }
  while (left < right) {
    const k = Math.floor((left + right) / 2);
    if (check(nums, queries, k)) {
      right = k;
    } else {
      left = k + 1;
    }
  }
  return left;
};

const check = (nums, queries, k) => {
  const deltaArray = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < k; i++) {
    const left = queries[i][0];
    const right = queries[i][1];
    const value = queries[i][2];
    deltaArray[left] += value;
    deltaArray[right + 1] -= value;
  }
  const operationCounts = [];
  let currentOperations = 0;
  for (const delta of deltaArray) {
    currentOperations += delta;
    operationCounts.push(currentOperations);
  }
  for (let i = 0; i < nums.length; i++) {
    if (operationCounts[i] < nums[i]) {
      return false;
    }
  }
  return true;
};
