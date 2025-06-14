/**
 * 2566. 替换一个数字后的最大差值
 * 给你一个整数 num 。你知道 Danny Mittal 会偷偷将 0 到 9 中的一个数字 替换 成另一个数字。
 * 请你返回将 num 中 恰好一个 数字进行替换后，得到的最大值和最小值的差为多少。
 * 注意：
 *  * 当 Danny 将一个数字 d1 替换成另一个数字 d2 时，Danny 需要将 nums 中所有 d1 都替换成 d2 。
 *  * Danny 可以将一个数字替换成它自己，也就是说 num 可以不变。
 *  * Danny 可以将数字分别替换成两个不同的数字分别得到最大值和最小值。
 *  * 替换后得到的数字可以包含前导 0 。
 *  * Danny Mittal 获得周赛 326 前 10 名，让我们恭喜他。
 */
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  let s = num.toString();
  let t = s;
  let pos = 0;
  while (pos < s.length && s[pos] === "9") {
    pos++;
  }
  if (pos < s.length) {
    s = s.replace(new RegExp(s[pos], "g"), "9");
  }
  t = t.replace(new RegExp(t[0], "g"), "0");
  return parseInt(s) - parseInt(t);
};

/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.16 MB, 在所有 JavaScript 提交中击败了44.44%的用户
 */