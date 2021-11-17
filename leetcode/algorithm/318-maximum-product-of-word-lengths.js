/**
 * 318. 最大单词长度乘积
 *
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
 */
/**
 * 字符串之间不能用有一样的元素,而且还要全匹配,才能知道最长长度,这样效率太低了吧
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {};

/**
 * 官方题解: 转为位运算
 *
 * 就是把字符串转为26位有效位的二进制数字,如果相应位置的字母存在则把相应位置为1,全部转换之后再对比查找字母不重复的字符串,得到两个最长的字符串相乘
 */
var maxProduct = function (words) {
  const length = words.length;
  const masks = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    const word = words[i];
    const wordLength = word.length;
    for (let j = 0; j < wordLength; j++) {
        // 
      masks[i] |= 1 << (word[j].charCodeAt() - "a".charCodeAt());
    }
  }
  let maxProd = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
        // 没有重复字母
      if ((masks[i] & masks[j]) === 0) {
        maxProd = Math.max(maxProd, words[i].length * words[j].length);
      }
    }
  }
  return maxProd;
};
