/**
 * 1235. 规划兼职工作
 *
 * 你打算利用空闲时间来做兼职工作赚些零花钱。
 * 这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。
 * 给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。
 * 注意，时间上出现重叠的 2 份工作不能同时进行。
 * 如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作。
 */

/**
 *
 * dp[i]=max(dp[i−1],dp[k]+profit[i−1])
 * 
 * 核心还是要查到前一个和他联系的数据
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length;

  // 纠合成三元组
  const jobs = new Array(n)
    .fill(0)
    .map((_, i) => [startTime[i], endTime[i], profit[i]]);
    // 排序,  starttime 排序不也一样么
  jobs.sort((a, b) => a[1] - b[1]);
  //  dp第一步 定数据结构
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    // 往前查starttime
    const k = binarySearch(jobs, i - 1, jobs[i - 1][0]);
    // 查的是dp的档期元素位置,应该是就是能和当前位置连起来,但是不重叠的位置,可以加起来
    dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2]);
  }
  return dp[n];
};
// 二分法查找
const binarySearch = (jobs, right, target) => {
  let left = 0;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (jobs[mid][1] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
