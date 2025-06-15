/**
 * 1432. 改变一个整数能得到的最大差值
 *
 * 给你一个整数 num 。你可以对它进行以下步骤共计 两次：
 *  * 选择一个数字 x (0 <= x <= 9).
 *  * 选择另一个数字 y (0 <= y <= 9) 。数字 y 可以等于 x 。
 *  * 将 num 中所有出现 x 的数位都用 y 替换。
 * 令两次对 num 的操作得到的结果分别为 a 和 b 。
 * 请你返回 a 和 b 的 最大差值 。
 * 注意，新的整数（a 或 b）必须不能 含有前导 0，并且 非 0。
 */
/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  const str = num.toString();

  // 最大值: 把第一个不是9的数字全部替换成9
  let maxStr = "";
  let toReplaceMax = "";
  for (let c of str) {
    if (c !== "9") {
      toReplaceMax = c;
      break;
    }
  }
  if (toReplaceMax) {
    maxStr = str
      .split("")
      .map((ch) => (ch === toReplaceMax ? "9" : ch))
      .join("");
  } else {
    maxStr = str;
  }

  // 最小值: 如果首位不是1，把首位全部替换成1，否则把第一个不是0/1的数字全部替换成0
  let minStr = "";
  if (str[0] !== "1") {
    minStr = str
      .split("")
      .map((ch) => (ch === str[0] ? "1" : ch))
      .join("");
  } else {
    let toReplaceMin = "";
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== "0" && str[i] !== "1") {
        toReplaceMin = str[i];
        break;
      }
    }
    if (toReplaceMin) {
      minStr = str
        .split("")
        .map((ch) => (ch === toReplaceMin ? "0" : ch))
        .join("");
    } else {
      minStr = str;
    }
  }

  return parseInt(maxStr) - parseInt(minStr);
};
/*
* 执行用时：1 ms, 在所有 JavaScript 提交中击败了66.67%的用户
* 内存消耗：54.15 MB, 在所有 JavaScript 提交中击败了33.33%的用户
*/