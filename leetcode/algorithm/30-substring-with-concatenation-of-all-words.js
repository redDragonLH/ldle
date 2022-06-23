/**
 * 30. 串联所有单词的子串
 *
 * 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 *
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。
 */

/**
 * 滑动窗口
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let allWordsLen = words[0].length * words.length;
  let start = 0,
    end = allWordsLen;
  let firstWord = "";
  words.forEach((e) => {
    firstWord += e[0];
  });
  console.log(allWordsLen, firstWord);
  let wordLen = words[0].length;
  let len = s.length;
  let count = words.length;
  let result = [];
  for (; end < len; end++) {
    if (firstWord.includes(s[start])) {
      let offset = start;
      let c = count;
      while (c--) {
        let str = getWord(offset, offset + wordLen);
        // 这个位置需要去重,因为要求不能重复,那还得把words转对象或者set,然后计数
        if (!words.includes(str)) {
          break;
        }
        offset += wordLen;
      }
      result.push(start);
      start++;
    } else {
      start++;
      continue;
    }
  }
  return result;
};
function getWord(str, start, end) {
  let subStr = "";
  for (let i = start; i < end; i++) {
    subStr += str[i];
  }
  return subStr;
}
