/**
 * 2679. 矩阵中的和
 *
 * 给你一个下标从 0 开始的二维整数数组 nums 。一开始你的分数为 0 。你需要执行以下操作直到矩阵变为空：
 *  * 矩阵中每一行选取最大的一个数，并删除它。如果一行中有多个最大的数，选择任意一个并删除。
 *  * 在步骤 1 删除的所有数字中找到最大的一个数字，将它添加到你的 分数 中。
 * 请你返回最后的 分数 。
 */
/**
 * 排序后遍历
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
  let result = 0;
  let index = 0;
  nums.forEach((e) => {
    e.sort((a, b) => b - a);
  });
  let len = nums[0].length;

  while (len--) {
    result += Math.max(
      ...nums.map((e) => {
        return e[index];
      })
    );
    index++;
  }
  return result;
};
/**
 * 执行用时：160 ms, 在所有 JavaScript 提交中击败了57.60%的用户
 * 内存消耗：51.4 MB, 在所有 JavaScript 提交中击败了44.80%的用户
 */