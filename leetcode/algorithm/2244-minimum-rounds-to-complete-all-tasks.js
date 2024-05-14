/**
 * 2244. 完成所有任务需要的最少轮数
 *
 * 给你一个下标从 0 开始的整数数组 tasks ，其中 tasks[i] 表示任务的难度级别。在每一轮中，你可以完成 2 个或者 3 个 相同难度级别 的任务。
 * 返回完成所有任务需要的 最少 轮数，如果无法完成所有任务，返回 -1 。
 */

/**
 * 奇怪的题
 * 转mapping结构应该有奇效喽
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let mapping = new Map();
  for (const task of tasks) {
    if (mapping.has(task)) {
      mapping.set(task, mapping.get(task) + 1);
    } else {
      mapping.set(task, 1);
    }
  }
  let result = 0;
  // 这里是个麻烦事,贪心或者动态规划才行
  mapping.forEach((v) => {
    if (result === -1) return false;
    if (v % 3 === 2) {
      result += parseInt(v / 3) + 1;
    } else if (v % 3 === 0) {
      result += parseInt(v / 3);
    } else if (v % 2 === 3) {
      result += parseInt(v / 2) + 1;
    } else if (v % 2 === 0) {
      result += parseInt(v / 2);
    }
    if (v % 3 !== 0 && v % 3 !== 2 && v % 2 !== 3 && v % 2 !== 0) {
      result = -1;
    }
  });
  return result;
};
/**
 * 估计得给每个走动态规划才行
 */