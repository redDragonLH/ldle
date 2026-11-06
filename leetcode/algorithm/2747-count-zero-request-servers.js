/**
 * 2747. 统计没有收到请求的服务器数目
 *
 * 给你一个整数 n ，表示服务器的总数目，再给你一个下标从 0 开始的 二维 整数数组 logs ，其中 logs[i] = [server_id, time] 表示 id 为 server_id 的服务器在 time 时收到了一个请求。
 * 同时给你一个整数 x 和一个下标从 0 开始的整数数组 queries  。
 * 请你返回一个长度等于 queries.length 的数组 arr ，其中 arr[i] 表示在时间区间 [queries[i] - x, queries[i]] 内没有收到请求的服务器数目。
 * 注意时间区间是个闭区间。
 */
/**
 * 类似桶排序吗.
 * 肯定要先排序,但是数据结构有点想不到,而且要的是没有收到请求的服务器数目
 * 不过时间点的话应该可以用桶排序吧?
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function (n, logs, x, queries) {
  logs.sort((a, b) => a[1] - b[1]); // 按时间排序日志
  const result = [];
  // 遍历每个查询时间，统计在时间区间内没有收到请求的服务器数目
  for (const query of queries) {
    const startTime = query - x;
    const endTime = query;
    const activeServers = new Set();
    // 遍历日志，找出在时间区间内活跃的服务器
    for (const [serverId, time] of logs) {
      if (time >= startTime && time <= endTime) {
        activeServers.add(serverId);
      }
    }
    result.push(n - activeServers.size);
  }
  return result;
};
/**
 * 没用桶或者什么数据结构,直接遍历,超时
 */

/**
 * 官方题解  滑动窗口
 * @param {number} n 
 * @param {number[][]} logs 
 * @param {number} x 
 * @param {number[]} queries 
 * @returns {number[]} 
 */
var countServers = function (n, logs, x, queries) {
    // 按时间对日志进行排序，方便后续滑动窗口处理
  logs.sort((a, b) => a[1] - b[1]);
  const m = queries.length;
  // 将查询按时间排序，方便滑动窗口处理
  const ids = Array.from({ length: m }, (_, i) => i);
  ids.sort((i, j) => queries[i] - queries[j]);

  const ans = new Array(m).fill(0);
  const cnt = new Array(n + 1).fill(0);
  let left = 0,
    right = 0,
    active = 0;

  for (const i of ids) {
    const q = queries[i];
    while (right < logs.length && logs[right][1] <= q) {
      const id = logs[right++][0];
      if (cnt[id]++ === 0) {
        ++active;
      }
    }
    while (left < right && logs[left][1] < q - x) {
      const id = logs[left++][0];
      if (--cnt[id] === 0) {
        --active;
      }
    }
    ans[i] = n - active;
  }
  return ans;
};
