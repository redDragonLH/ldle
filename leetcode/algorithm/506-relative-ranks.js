/**
 * 506. 相对名次
 *
 * 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。
 *
 * 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：
 *  * 名次第 1 的运动员获金牌 "Gold Medal" 。
 *  * 名次第 2 的运动员获银牌 "Silver Medal" 。
 *  * 名次第 3 的运动员获铜牌 "Bronze Medal" 。
 *  * 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。
 *
 * 使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。
 */

/**
 * 得到结果比较简单,但是怎样效率最高~~
 * 
 * 大顶堆感觉不错~~
 * 
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let map = new Map();
  score.forEach((e, i) => {
    map.set(e, i);
  });
  score.sort((a, b) => b - a);
  let result = new Array(score.length).fill("");
  let ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  score.forEach((e, i) => {
    result[map.get(e)] = ranks.shift() || (i + 1).toString();
  });
  return result;
};
/**
 * 感觉循环挺多的,还有显式类型转换
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了86.69%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了34.60%的用户
 */