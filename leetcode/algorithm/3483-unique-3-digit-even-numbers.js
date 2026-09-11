/**
 * 3483. 不同三位偶数的数目
 *
 * 给你一个数字数组 digits，你需要从中选择三个数字组成一个三位偶数，你的任务是求出 不同 三位偶数的数量。
 * 注意：每个数字在三位偶数中都只能使用 一次 ，并且 不能 有前导零。
 */
/**
 * 排列相关的题目
 * 最后一位不能是奇数,第一位不能是0
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    // 第一位不能是0，最后一位必须是偶数
  const numbers = new Set();
  for (let i = 0; i < digits.length; i++) {
    // 第一位不能是0
    if (digits[i] === 0) continue;
    // 第二位可以是任意数字
    for (let j = 0; j < digits.length; j++) {
      if (j === i) continue;
      // 第三位必须是偶数
      for (let k = 0; k < digits.length; k++) {
        if (k === i || k === j || digits[k] % 2 !== 0) continue;
        // 全存啊,数据量不够大可以, 不过不能重复也是个问题,还得去重,不能单纯+1
        numbers.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
      }
    }
  }

  return numbers.size;
};
/**
 * 执行用时：3 ms, 在所有 JavaScript 提交中击败了83.33%的用户
 * 内存消耗：55.99 MB, 在所有 JavaScript 提交中击败了83.33%的用户
 */
