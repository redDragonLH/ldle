/**
 * 3330. 找到初始输入字符串 I
 *
 * Alice 正在她的电脑上输入一个字符串。但是她打字技术比较笨拙，她 可能 在一个按键上按太久，导致一个字符被输入 多次 。
 * 尽管 Alice 尽可能集中注意力，她仍然可能会犯错 至多 一次。
 * 给你一个字符串 word ，它表示 最终 显示在 Alice 显示屏上的结果。
 * 请你返回 Alice 一开始可能想要输入字符串的总方案数。
 */

/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let count = 1; // 至少有一种可能性，即原始字符串就是 word
  let i = 0;

  while (i < word.length) {
    let j = i + 1;
    // 找到连续相同的字符
    while (j < word.length && word[j] === word[i]) {
      j++;
      // 如果连续相同的字符超过 1 个，则可以选择删除其中一个
      if (j - i > 1) {
        count++;
      }
    }

    i = j; // 移动到下一个不同的字符
  }

  return count;
};
/**
 * 执行用时：50 ms, 在所有 JavaScript 提交中击败了93.75%的用户
 * 内存消耗：54.38 MB, 在所有 JavaScript 提交中击败了81.25%的用户
 */