/**
 * 1023. 驼峰式匹配
 * 如果我们可以将小写字母插入模式串 pattern 得到待查询项 query，那么待查询项与给定模式串匹配。（我们可以在任何位置插入每个字符，也可以插入 0 个字符。）
 *
 * 给定待查询列表 queries，和模式串 pattern，返回由布尔值组成的答案列表 answer。只有在待查项 queries[i] 与模式串 pattern 匹配时， answer[i] 才为 true，否则为 false。
 */

/**
 * 查找带查询串中的大写字母是否全匹配
 * 
 * 不是这么简单,模式串里面还有小写字母
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  let result = [];
  let UpPattern = pattern.match(/[A-Z]+/g).join("");
  for (const iterator of queries) {
    let upArray = iterator.match(/[A-Z]+/g);
    if (upArray) {
      result.push(upArray.join("") === UpPattern ? true : false);
    } else {
      result.push(false);
    }
  }
  return result;
};
