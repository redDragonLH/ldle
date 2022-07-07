/**
 * 648. 单词替换
 *
 * 在英语中，我们有一个叫做 词根(root) 的概念，可以词根后面添加其他一些词组成另一个较长的单词——我们称这个词为 继承词(successor)。例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。
 *
 * 现在，给定一个由许多词根组成的词典 dictionary 和一个用空格分隔单词形成的句子 sentence。你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。
 *
 * 你需要输出替换之后的句子。
 */

/**
 * 遍历+正则匹配,但是时间复杂度就是d*s
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let result = [];
  sentence.split(" ").forEach((item) => {
    let root = item;
    for (const v of dictionary) {
      if (new RegExp("^" + v + ".*").test(item)) {
        root = v.length < root.length ? v : root;
      }
    }
    result.push(root);
  });
  return result.join(" ");
};
/**
 * 执行用时：864 ms, 在所有 JavaScript 提交中击败了5.17%的用户
 * 内存消耗：60.6 MB, 在所有 JavaScript 提交中击败了22.41%的用户
 */