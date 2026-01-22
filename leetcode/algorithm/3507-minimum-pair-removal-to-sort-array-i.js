/**
 * 3507. 移除最小数对使数组有序 I
 *
 * 给你一个数组 nums，你可以执行以下操作任意次数：
 *  * 选择 相邻 元素对中 和最小 的一对。如果存在多个这样的对，选择最左边的一个。
 *  * 用它们的和替换这对元素。
 * 返回将数组变为 非递减 所需的 最小操作次数 。
 * 如果一个数组中每个元素都大于或等于它前一个元素（如果存在的话），则称该数组为非递减。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let count = 0;

  while (nums.length > 1) {
    let isAscending = true;
    let minSum = Infinity;
    let targetIndex = -1;

    for (let i = 0; i < nums.length - 1; i++) {
      const sum = nums[i] + nums[i + 1];

      if (nums[i] > nums[i + 1]) {
        isAscending = false;
      }

      if (sum < minSum) {
        minSum = sum;
        targetIndex = i;
      }
    }

    if (isAscending) {
      break;
    }

    count++;
    nums[targetIndex] = minSum;
    nums.splice(targetIndex + 1, 1);
  }

  return count;
};
/**
 * 执行用时 :3 ms, 在所有 JavaScript 提交中击败了53.33%的用户
 * 内存消耗 :56.04 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */