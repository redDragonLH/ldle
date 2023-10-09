/**
 * 2578. 最小和分割
 *
 * 给你一个正整数 num ，请你将它分割成两个非负整数 num1 和 num2 ，满足：
 *  * num1 和 num2 直接连起来，得到 num 各数位的一个排列。
 *  *  * 换句话说，num1 和 num2 中所有数字出现的次数之和等于 num 中所有数字出现的次数。
 *  * num1 和 num2 可以包含前导 0 。
 *
 * 请你返回 num1 和 num2 可以得到的和的 最小 值。
 *
 * 注意：
 *  * num 保证没有前导 0 。
 *  * num1 和 num2 中数位顺序可以与 num 中数位顺序不同。
 */

/**
 * 简单点把数字排序,按最小分成两队计算
 *
 * 可以包含前导零就是可以把所有0放前面
 * 贪心可以么,不用全排列吧
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  let numArr = [];
  while (num) {
    numArr.push(num % 10);
    num = parseInt(num / 10);
  }
  numArr.sort((a, b) => a - b);
  let num1 = "",
    num2 = "";
  let position = 0;
  for (const item of numArr) {
    if (position) {
      num1 += item;
    } else {
      num2 += item;
    }
    position = !position;
  }
  return parseInt(num1) + parseInt(num2);
};
/**
 * 纯贪心蒙的
 * 执行用时：52 ms, 在所有 JavaScript 提交中击败了98.31%的用户
 * 内存消耗：40.37 MB, 在所有 JavaScript 提交中击败了23.73%的用户
 */