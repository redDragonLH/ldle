/**
 * 2154. 将找到的值乘以 2
 * 
 * 给你一个整数数组 nums ，另给你一个整数 original ，这是需要在 nums 中搜索的第一个数字。

 * 接下来，你需要按下述步骤操作：

 *  1 如果在 nums 中找到 original ，将 original 乘以 2 ，得到新 original（即，令 original = 2 * original）。
 *  2 否则，停止这一过程。
 *  3 只要能在数组中找到新 original ，就对新 original 继续 重复 这一过程。
 * 返回 original 的 最终 值。
 */

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let isFound = false;
  do {
    isFound = false;
    for (let num of nums) {
      let index = nums.indexOf(original);
      if (index !== -1) {
        original = original * 2;
        isFound = true;
        break;
      }
    }
  } while (isFound);
  return original;
};
/**
 * 执行用时 :16 ms, 在所有 JavaScript 提交中击败了6.67%的用户
 * 内存消耗 :55.89 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */