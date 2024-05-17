/**
 * 826. 安排工作以达到最大收益
 *
 * 你有 n 个工作和 m 个工人。给定三个数组： difficulty, profit 和 worker ，其中:
 *  * difficulty[i] 表示第 i 个工作的难度，profit[i] 表示第 i 个工作的收益。
 *  * worker[i] 是第 i 个工人的能力，即该工人只能完成难度小于等于 worker[i] 的工作。
 *
 * 每个工人 最多 只能安排 一个 工作，但是一个工作可以 完成多次 。
 *  * 举个例子，如果 3 个工人都尝试完成一份报酬为 $1 的同样工作，那么总收益为 $3 。如果一个工人不能完成任何工作，他的收益为 $0 。
 *
 * 返回 在把工人分配到工作岗位后，我们所能获得的最大利润 。
 */

/**
 *
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  let workerLen = worker.length,
    workLen = difficulty.length;
  let result = 0;
  for (let i = 0; i < workerLen; i++) {
    let max = -1; // 还得是收入才行啊
    let power = worker[i];
    for (let j = 0; j < workLen; j++) {
      if (difficulty[j] <= power) {
        max = Math.max(max, profit[j]);
      }
    }
    console.log(max);

    max > -1 && (result += max);
  }
  return result;
};
/**
 * 难度和报酬不成正比
 * 执行用时：1538 ms, 在所有 JavaScript 提交中击败了15.63%的用户
 * 内存消耗：61.54 MB, 在所有 JavaScript 提交中击败了6.25%的用户
 */

/**
 * 官方题解
 * 这个排序的方法挺有意思
 * @param {*} difficulty
 * @param {*} profit
 * @param {*} worker
 * @returns
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  // 生成难度和价值的二维数组,然后用难度排序
  // 用难度排序不会有报酬的问题么
  const jobs = difficulty
    .map((d, i) => [d, profit[i]])
    .sort((a, b) => a[0] - b[0]);
  let res = 0,
    i = 0,
    best = 0;
    // 排序动作在循环声明中,看来是不用担心每次重新计算了
  for (const w of worker.sort((a, b) => a - b)) {
    // 感觉也是大部分遍历了,只不过排序之后大于的可以直接舍弃
    while (i < jobs.length && w >= jobs[i][0]) {
      best = Math.max(best, jobs[i][1]);
      i++;
    }
    res += best;
  }
  return res;
};
/**
 * 但确实快了太多
 */