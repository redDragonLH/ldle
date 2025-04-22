/**
 * 781. 森林中的兔子
 *
 * 森林中有未知数量的兔子。提问其中若干只兔子 "还有多少只兔子与你（指被提问的兔子）颜色相同?" ，将答案收集到一个整数数组 answers 中，其中 answers[i] 是第 i 只兔子的回答。
 * 给你数组 answers ，返回森林中兔子的最少数量。
 */
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    if (map.has(answers[i])) {
      map.set(answers[i], map.get(answers[i]) + 1);
    } else {
      map.set(answers[i], 1);
    }
  }
  for (let [key, value] of map) {
    count += Math.ceil(value / (key + 1)) * (key + 1);
  }
  return count;
};
/**
 * 
 * 执行用时：4 ms, 在所有 JavaScript 提交中击败了43.75%的用户
 * 内存消耗：56.72 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */