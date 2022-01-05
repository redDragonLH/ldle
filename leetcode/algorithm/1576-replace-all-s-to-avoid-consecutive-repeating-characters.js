/**
 * 1576. 替换所有的问号
 *
 * 给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。
 *
 * 注意：你 不能 修改非 '?' 字符。
 *
 * 题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。
 *
 * 在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。
 */

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  if (s.indexOf("?") === -1) return s;
  let sArr = s.split("?");
  for (let i = 1; i < sArr.length; i++) {
    let prev = sArr[i - 1];
    // 获取前一个字符串的最后一个字符以及当前字符串的第一个字符,判断两个字符是否是a或b,都不是a,b就+一个,不行就+一个c
    if (prev[prev.length - 1] === "a" && sArr[i][0] === "b") {
      sArr[i] = "c" + sArr[i];
    } else if (prev[prev.length - 1] === "b" && sArr[i][0] === "a") {
      sArr[i] = "c" + sArr[i];
    } else if (prev[prev.length - 1] === "a" || sArr[i][0] === "a") {
      sArr[i] = "b" + sArr[i];
    } else if (prev[prev.length - 1] === "b" || sArr[i][0] === "b") {
      sArr[i] = "a" + sArr[i];
    } else {
      sArr[i] = "a" + sArr[i];
    }
  }
  return sArr.join("");
};
/**
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了13.11%的用户
 * 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了81.97%的用户
 */

/**
 * 官方题解
 * 
 * 也就是abc三个字母,因为?周围只有相邻两个元素,所以用三个字母就可以排列为间隔字符串
 */
var modifyString = function (s) {
  const n = s.length;
  // 直接把所有字符串分解为单个字符的元素数组
  const arr = [...s];
  for (let i = 0; i < n; ++i) {
      // 遇到问号进入处理流程
    if (arr[i] === "?") {
    // 循环三次就能得出结果
      for (let j = 0; j < 3; ++j) {
          // j 的用处就是charCode 的参数,从a-c
        if (
          (i > 0 && arr[i - 1] === String.fromCharCode("a".charCodeAt() + j)) ||
          (i < n - 1 &&
            arr[i + 1] === String.fromCharCode("a".charCodeAt() + j))
        ) {
            // 如果前一个元素或后一个元素等于 a或b,跳过这次轮询
          continue;
        }

        arr[i] = String.fromCharCode("a".charCodeAt() + j);
        break;
      }
    }
  }
  return arr.join("");
};
