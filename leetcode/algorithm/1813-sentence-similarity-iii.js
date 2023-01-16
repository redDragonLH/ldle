/**
 * 1813. 句子相似性 III
 *
 * 一个句子是由一些单词与它们之间的单个空格组成，且句子的开头和结尾没有多余空格。
 * 比方说，"Hello World" ，"HELLO" ，"hello world hello world" 都是句子。每个单词都 只 包含大写和小写英文字母。
 *
 * 如果两个句子 sentence1 和 sentence2 ，可以通过往其中一个句子插入一个任意的句子（可以是空句子）而得到另一个句子，那么我们称这两个句子是 相似的 。
 * 比方说，sentence1 = "Hello my name is Jane" 且 sentence2 = "Hello Jane" ，我们可以往 sentence2 中 "Hello" 和 "Jane" 之间插入 "my name is" 得到 sentence1 。
 *
 * 给你两个句子 sentence1 和 sentence2 ，如果 sentence1 和 sentence2 是相似的，请你返回 true ，否则返回 false 。
 */
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === sentence2) return true;
  if (!sentence1.length || !sentence2.length) return true;
  let sentence1Arr = sentence1.split(" ");
  let sentence2Arr = sentence2.split(" ");
  let sentence1ArrLen = sentence1Arr.length;
  let sentence2ArrLen = sentence2Arr.length;
  if (sentence1ArrLen === 1) {
    if (
      sentence1Arr[0] === sentence2Arr[0] ||
      sentence1Arr[0] === sentence2Arr[sentence2ArrLen - 1]
    ) {
      return true;
    } else return false;
  }
  if (sentence2ArrLen === 1) {
    if (
      sentence2Arr[0] === sentence1Arr[0] ||
      sentence2Arr[0] === sentence1Arr[sentence1ArrLen - 1]
    ) {
      return true;
    } else return false;
  }

  let s1left = 0;
  let s1right = sentence1ArrLen;

  let s2left = 0;
  let s2right = sentence2ArrLen;

  let left = 0;
  let right = s1right > s2right ? s2right : s1right;
  // 要考虑两边平衡,又要考虑两边不平衡
  // 失败
  while (right > left) {
    if (
      sentence1Arr[s1left] === sentence2Arr[s2left] &&
      sentence1Arr[s1right] === sentence2Arr[s2left]
    ) {
      right--;
      left++;
      s1left++;
      s1right--;
      s2left++;
      s2right--;
    } else {
      console.log(right, left);
      return false;
    }
  }
  return false;
};

/**
 * 可以考虑构建字符串对比,但是有点二
 */