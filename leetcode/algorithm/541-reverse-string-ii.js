/**
 * 541. 反转字符串 II
 *
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。
 *  * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 *  * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = Array.from(s);
  let curr = k * 2;
  let len = arr.length;

  while (curr <= len) {
    swap(arr, curr - k * 2, curr - 1 - k);
    curr += k * 2;
  }
  // 处理剩下的数据,也可能正好没剩下
  // if (curr - k < len) {
  swap(arr, curr - k * 2, curr - 1 - k);
  // }
  return arr.join("");
};
const swap = (arr, left, rigth) => {
  while (left < rigth) {
    let temp = arr[left];
    arr[left] = arr[rigth];
    arr[rigth] = temp;
    left++, rigth--;
  }
};

/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了64.33%的用户
 * 内存消耗：41.7 MB, 在所有 JavaScript 提交中击败了16.42%的用户
 */
