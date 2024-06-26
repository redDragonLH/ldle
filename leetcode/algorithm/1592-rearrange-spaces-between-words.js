/**
 * 1592. 重新排列单词间的空格
 *
 * 给你一个字符串 text ，该字符串由若干被空格包围的单词组成。每个单词由一个或者多个小写英文字母组成，并且两个单词之间至少存在一个空格。题目测试用例保证 text 至少包含一个单词 。
 *
 * 请你重新排列空格，使每对相邻单词之间的空格数目都 相等 ，并尽可能 最大化 该数目。如果不能重新平均分配所有空格，请 将多余的空格放置在字符串末尾 ，这也意味着返回的字符串应当与原 text 字符串的长度相等。
 *
 * 返回 重新排列空格后的字符串 。
 */
/**
 * 计算有多少空格和单词间隙~如不能平均分则吧多余空格放在末尾,
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let space = 0;
  let leteralArr = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      space++;
    } else {
      let str = "";
      while (text[i] !== " ") {
        str += text[i];
        i++;
      }
      space++;
      leteralArr.push(str);
    }
  }
  console.log(leteralArr);
  let gap = leteralArr.length - 1;
  let midSpace = Number.parseInt(space / gap);
  let footerSpace = space % gap;

  let result = "";
  for (let i = 0; i < gap; i++) {
    result += leteralArr[i];
    let current = midSpace;
    while (current--) {
      result += " ";
    }
  }
  result += leteralArr.pop();
  while (footerSpace--) {
    result += " ";
  }
  return result;
};
