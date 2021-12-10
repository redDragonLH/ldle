/**
 * 748. 最短补全词
 *
 * 给你一个字符串 licensePlate 和一个字符串数组 words ，请你找出并返回 words 中的 最短补全词 。
 *
 * 补全词 是一个包含 licensePlate 中所有的字母的单词。在所有补全词中，最短的那个就是 最短补全词 。
 *
 * 在匹配 licensePlate 中的字母时：
 *  * 忽略 licensePlate 中的 数字和空格 。
 *  * 不区分大小写。
 *  * 如果某个字母在 licensePlate 中出现不止一次，那么该字母在补全词中的出现次数应当一致或者更多。
 * 例如：licensePlate = "aBc 12c"，那么它的补全词应当包含字母 'a'、'b' （忽略大写）和两个 'c' 。可能的 补全词 有 "abccdef"、"caaacab" 以及 "cbca" 。
 *
 * 请你找出并返回 words 中的 最短补全词 。题目数据保证一定存在一个最短补全词。当有多个单词都符合最短补全词的匹配条件时取 words 中 最靠前的 那个。
 */

/**
 * 也就是找到存在 licensePlate 所有字母的 最短的 words 元素
 *
 * 先知道licensePlate有多少字母,然后再匹配 words 中的元素找到存在且最短的
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let letter = new Array(26).fill(0);
  let zeroSign = "a".charCodeAt();
  let result = "";
  licensePlate = licensePlate.toLocaleLowerCase();
  for (let i = 0; i < licensePlate.length; i++) {
    let num = licensePlate[i].charCodeAt() - zeroSign;
    num > -1 && num < 26 && letter[num]++;
  }
  let isContinue = false;
  // 然后循环word 计算出word的包含的字母,然后匹配是否都能覆盖掉licensePlate,通过的话查看是不是最短的
  for (let i = 0; i < words.length; i++) {
    let itemLetter = new Array(26).fill(0);
    for (let j = 0; j < words[i].length; j++) {
      itemLetter[words[i][j].charCodeAt() - zeroSign]++;
    }
    for (let l = 0; l < 26; l++) {
      if (letter[l] - itemLetter[l] > 0) {
        isContinue = true;
        break;
      }
    }
    if (isContinue) {
      isContinue = false;
      continue;
    }
    result === "" && (result = words[i]);
    result.length > words[i].length && (result = words[i]);
  }
  return result;
};
/**
 * 真实效率应该不高,因为要对所有字符转换和对比
 * 
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了83.87%的用户
 * 内存消耗：43 MB, 在所有 JavaScript 提交中击败了35.48%的用户
 */