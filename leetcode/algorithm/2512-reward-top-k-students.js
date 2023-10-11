/**
 * 2512. 奖励最顶尖的 K 名学生
 *
 * 给你两个字符串数组 positive_feedback 和 negative_feedback ，分别包含表示正面的和负面的词汇。不会 有单词同时是正面的和负面的。
 *
 * 一开始，每位学生分数为 0 。每个正面的单词会给学生的分数 加 3 分，每个负面的词会给学生的分数 减  1 分。
 *
 * 给你 n 个学生的评语，用一个下标从 0 开始的字符串数组 report 和一个下标从 0 开始的整数数组 student_id 表示，其中 student_id[i] 表示这名学生的 ID ，这名学生的评语是 report[i] 。每名学生的 ID 互不相同。
 *
 * 给你一个整数 k ，请你返回按照得分 从高到低 最顶尖的 k 名学生。如果有多名学生分数相同，ID 越小排名越前。
 */

/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  let len = student_id.length;
  let scores = [];
  let positive ={}
  let negative ={}
  for (const iterator of positive_feedback) {
    positive[iterator]=true
  }
  for (const iterator of negative_feedback) {
    negative[iterator]=true
  }
  for (let i = 0; i < len; i++) {
    let word = report[i].split(" ");
    let score = 0;
    for (const item of word) {
      if (positive[item]) {
        score += 3;
      } else if (negative[item]) {
        score -= 1;
      }
    }
    scores.push({ id: student_id[i], score });
  }
  scores.sort((a, b) => {
    if (a.score != b.score) {
      return b.score - a.score;
    } else {
      return a.id - b.id;
    }
  });
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(scores[i].id);
  }
  return result;
};
/**
 * includes 也是遍历数组,转为hash 表之后时间复杂度O(n)降到 O(1)
 * 
 * 执行用时 :236 ms, 在所有 JavaScript 提交中击败了25.00%的用户
 * 内存消耗 :65.73 MB, 在所有 JavaScript 提交中击败33.33%的用户
 */