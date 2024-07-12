/**
 * 2974. 最小数字游戏
 *
 * 你有一个下标从 0 开始、长度为 偶数 的整数数组 nums ，同时还有一个空数组 arr 。Alice 和 Bob 决定玩一个游戏，游戏中每一轮 Alice 和 Bob 都会各自执行一次操作。游戏规则如下：
 *  * 每一轮，Alice 先从 nums 中移除一个 最小 元素，然后 Bob 执行同样的操作。
 *  * 接着，Bob 会将移除的元素添加到数组 arr 中，然后 Alice 也执行同样的操作。
 *  * 游戏持续进行，直到 nums 变为空。
 * 返回结果数组 arr 。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    let temp = nums[i];
    nums[i] = nums[i + 1];
    nums[i + 1] = temp;
  }
  return nums;
};
/**
 * 执行用时：79 ms, 在所有 JavaScript 提交中击败了47.96%的用户
 * 内存消耗：51.27 MB, 在所有 JavaScript 提交中击败了86.73%的用户
 */
