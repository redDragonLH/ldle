/**
 * 3354. 使数组元素等于零
 *
 * 给你一个整数数组 nums 。
 * 开始时，选择一个满足 nums[curr] == 0 的起始位置 curr ，并选择一个移动 方向 ：向左或者向右。
 * 此后，你需要重复下面的过程：
 *  * 如果 curr 超过范围 [0, n - 1] ，过程结束。
 *  * 如果 nums[curr] == 0 ，沿当前方向继续移动：如果向右移，则 递增 curr ；如果向左移，则 递减 curr 。
 *  * 如果 nums[curr] > 0:
 *  *  * 将 nums[curr] 减 1 。
 *  *  * 反转 移动方向（向左变向右，反之亦然）。
 *  *  * 沿新方向移动一步。
 * 如果在结束整个过程后，nums 中的所有元素都变为 0 ，则认为选出的初始位置和移动方向 有效 。
 * 返回可能的有效选择方案数目。
 */
/**
 * 没看懂题目
 * 
 * 将数组 nums 中每个为 0 元素的位置作为初始位置，分别向两个方向进行模拟。模拟时，我们判断当前元素是否为 0，如果为 0 继续朝原方向移动，否则将当前值减 1，并将方向反转，移动到下一个位置。当所有元素变为 0 或移动到数组下标范围外时模拟结束时。如果此时所有元素都变为 0 则是有效方案。
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
  let count = 0,
    nonZeros = nums.filter((x) => x > 0).length,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (isValid([...nums], nonZeros, i, -1)) {
        count++;
      }
      if (isValid([...nums], nonZeros, i, 1)) {
        count++;
      }
    }
  }
  return count;
};

function isValid(nums, nonZeros, start, direction) {
  let curr = start;
  while (nonZeros > 0 && curr >= 0 && curr < nums.length) {
    if (nums[curr] > 0) {
      nums[curr]--;
      direction *= -1;
      if (nums[curr] === 0) {
        nonZeros--;
      }
    }
    curr += direction;
  }
  return nonZeros === 0;
}
/**
 * 执行用时 :186 ms, 在所有 JavaScript 提交中击败了5.26%的用户
 * 内存消耗 :57.37 MB, 在所有 JavaScript 提交中击败了36.84%的用户
 */