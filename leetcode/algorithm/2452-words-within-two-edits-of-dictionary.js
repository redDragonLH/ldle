/**
 * 2452. 距离字典两次编辑以内的单词
 *
 * 给你两个字符串数组 queries 和 dictionary 。数组中所有单词都只包含小写英文字母，且长度都相同。
 * 一次 编辑 中，你可以从 queries 中选择一个单词，将任意一个字母修改成任何其他字母。从 queries 中找到所有满足以下条件的字符串：不超过 两次编辑内，字符串与 dictionary 中某个字符串相同。
 * 请你返回 queries 中的单词列表，这些单词距离 dictionary 中的单词 编辑次数 不超过 两次 。单词返回的顺序需要与 queries 中原本顺序相同。
 */
/**
 * 就是求 queries 中的单词和 dictionary 中的单词的编辑距离不超过 2 的单词列表。
 *
 * 那就得一个一个比较了，比较的方式就是求编辑距离，编辑距离不超过 2 就加入结果列表。
 *
 * 编辑距离的求法就是比较两个字符串的每个字符，如果不相同就编辑距离加 1，最后看编辑距离是否不超过 2。
 *
 * 时间复杂度是 O(n*m*k)，其中 n 是 queries 的长度，m 是 dictionary 的长度，k 是单词的长度。
 * 空间复杂度是 O(1)，因为我们只使用了常数级别的额外空间。
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    for (let j = 0; j < dictionary.length; j++) {
      let dict = dictionary[j];
      let editDistance = 0;
      for (let k = 0; k < query.length; k++) {
        if (query[k] !== dict[k]) {
          editDistance++;
        }
        if (editDistance > 2) {
          break;
        }
      }
      if (editDistance <= 2) {
        res.push(query);
        break;
      }
    }
  }
  return res;
};
/**
 * 暴力
 * 执行用时 :6 ms, 在所有 JavaScript 提交中击败了83.33%的用户
 * 内存消耗 :57.07 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */