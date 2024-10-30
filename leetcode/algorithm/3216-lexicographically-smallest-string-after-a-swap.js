/**
 * 3216. 交换后字典序最小的字符串
 *
 * 给你一个仅由数字组成的字符串 s，在最多交换一次 相邻 且具有相同 奇偶性 的数字后，返回可以得到的字典序最小的字符串。
 * 如果两个数字都是奇数或都是偶数，则它们具有相同的奇偶性。例如，5 和 9、2 和 4 奇偶性相同，而 6 和 9 奇偶性不同。
 */

/**
 * 必须从左到右遍历，找到第一个奇数或偶数相邻的位置，交换后返回,因为这样可以保证交换后的字符串字典序最小
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  let len = s.length;
  let sArr = s.split("").map(Number);
  for (let i = 1; i < len; i++) {
    if (isSame(sArr[i], sArr[i - 1]) && sArr[i] < sArr[i - 1]) {
      let temp = sArr[i];
      sArr[i] = sArr[i - 1];
      sArr[i - 1] = temp;
      return sArr.join("");
    }
  }
  return s;
};

let isSame = (a, b) => a % 2 === b % 2;
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：51.15 MB, 在所有 JavaScript 提交中击败了92.00%的用户
 */