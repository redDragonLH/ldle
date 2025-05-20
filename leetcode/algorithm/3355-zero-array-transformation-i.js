/**
 * 3355. 零数组变换 I
 *
 * 给定一个长度为 n 的整数数组 nums 和一个二维数组 queries，其中 queries[i] = [li, ri]。
 * 对于每个查询 queries[i]：
 *  * 在 nums 的下标范围 [li, ri] 内选择一个下标 子集。
 *  * 将选中的每个下标对应的元素值减 1。
 * 零数组 是指所有元素都等于 0 的数组。
 * 如果在按顺序处理所有查询后，可以将 nums 转换为 零数组 ，则返回 true，否则返回 false。
 */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
    // 使用差分数组来记录每个区间的操作次数
  const deltaArray = new Array(nums.length + 1).fill(0);
    // 遍历每个查询，将对应的区间的操作次数加1
  for (const [left, right] of queries) {
    deltaArray[left] += 1;
    // 注意这里是 right + 1，因为我们要在 right 的下一个位置减去 1
    // 这样才能保证在 [left, right] 区间内的操作次数是正确的
    deltaArray[right + 1] -= 1;
  }
  // 计算每个位置的操作次数
  const operationCounts = [];
  // 计算当前操作次数
  let currentOperations = 0;
  // 遍历差分数组，计算每个位置的操作次数
  for (const delta of deltaArray) {
    // 为什么有后效性?
    // 因为我们在计算当前操作次数时，已经将前面的操作次数累加到 currentOperations 中了
    // 所以我们只需要将当前 delta 加到 currentOperations 上即可
    // 这样就可以得到当前操作次数
    // 这里的 deltaArray[i] 是差分数组中的值
    // deltaArray[i] 表示 nums[i] 这个位置的操作次数
    // 这里的 currentOperations 是当前操作次数
    // currentOperations += deltaArray[i]
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
/**
 * 执行用时：55 ms, 在所有 JavaScript 提交中击败了27.27%的用户
 * 内存消耗：96.87 MB, 在所有 JavaScript 提交中击败了27.27%的用户
 */
