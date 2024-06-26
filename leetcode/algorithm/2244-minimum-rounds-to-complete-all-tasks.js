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

/**
 * 官方题解,思路挺简单,每个条件处理,但是能想到每个条件就有点傻了
 * @param {*} tasks
 * @returns
 */
var minimumRounds = function (tasks) {
  const cnt = new Map();
  for (const t of tasks) {
    cnt.set(t, cnt.has(t) ? cnt.get(t) + 1 : 1);
  }
  let res = 0;
  for (const [k, v] of cnt) {
    // 1个肯定完成不了
    if (v === 1) {
      return -1;
    } else if (v % 3 === 0) {
      res += v / 3;
    } else {
      // 数字除以3剩1,剩2都有办法处理,都能处理完成
      res += Math.ceil(v / 3);
    }
  }
  return res;
};
/**
 * 核心点还是,3和2的关系和性质,如何从3的到2
 * 一个数可以是 3/n*3+2+2,可以是 3/n+2
 */