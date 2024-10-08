/**
 * 2844. 生成特殊数字的最少操作
 *
 * 给你一个下标从 0 开始的字符串 num ，表示一个非负整数。
 * 在一次操作中，您可以选择 num 的任意一位数字并将其删除。请注意，如果你删除 num 中的所有数字，则 num 变为 0。
 * 返回最少需要多少次操作可以使 num 变成特殊数字。
 * 如果整数 x 能被 25 整除，则该整数 x 被认为是特殊数字。
 */
/**
 * 那么最后一位必须是5/0,倒数第二位也有要求;
 *  如果它的位数为 1，则它必须是 0。
 *  如果它的位数为 2，则它必须是 25，50 或者 75。
 *  如果它的位数为大于等于 3，则它必须以 00，25，50 或者 75结尾。
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function (num) {
  let n = num.length;
  let find0 = false,
    find5 = false;
  for (let i = n - 1; i >= 0; i--) {
    if (num[i] === "0" || num[i] === "5") {
      if (find0) {
        return n - i - 2;
      }
      if (num[i] === "0") {
        find0 = true;
      } else {
        find5 = true;
      }
    } else if (num[i] === "2" || num[i] === "7") {
      if (find5) {
        return n - i - 2;
      }
    }
  }
  if (find0) {
    return n - 1;
  }
  return n;
};
