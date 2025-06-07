/**
 * 3170. 删除星号以后字典序最小的字符串
 *
 * 给你一个字符串 s 。它可能包含任意数量的 '*' 字符。你的任务是删除所有的 '*' 字符。
 * 当字符串还存在至少一个 '*' 字符时，你可以执行以下操作：
 *  * 删除最左边的 '*' 字符，同时删除该星号字符左边一个字典序 最小 的字符。如果有多个字典序最小的字符，你可以删除它们中的任意一个。
 * 请你返回删除所有 '*' 字符以后，剩余字符连接而成的 字典序最小 的字符串。
 */
/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  let arr = s.split("");
  while (arr.includes("*")) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "*") {
        // 找到左侧最近的字典序最小字符
        let minIdx = -1;
        let minChar = "{"; // 比 'z' 大的字符
        for (let j = i - 1; j >= 0; j--) {
          if (arr[j] !== "" && arr[j] < minChar) {
            minChar = arr[j];
            minIdx = j;
          }
        }
        if (minIdx !== -1) arr[minIdx] = "";
        arr[i] = "";
        break; // 只处理最左边的一个星号
      }
    }
  }
  return arr.filter((c) => c !== "" && c !== "*").join("");
};
/**
 * 有超时用例，可以用预处理的方式优化，前缀和？
 */

/**
 * 官方题解
 */
var clearStars = function (s) {
    // 二维数组，留存每个字母出现的位置
  const cnt = Array(26)
    .fill()
    .map(() => []);
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "*") {
      cnt[arr[i].charCodeAt(0) - "a".charCodeAt(0)].push(i);
    } else {
      for (let j = 0; j < 26; j++) {
        if (cnt[j].length > 0) {
            // 吐出的是最近的位置
          arr[cnt[j].pop()] = "*";
          break;
        }
      }
    }
  }
  // 最后统一处理，减少字符串操作
  return arr.filter((c) => c !== "*").join("");
};
/**
 * 执行用时：63 ms, 在所有 JavaScript 提交中击败了88.89%的用户
 * 内存消耗：65.96 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */