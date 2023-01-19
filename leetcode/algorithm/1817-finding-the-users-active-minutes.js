/**
 * 1817. 查找用户活跃分钟数
 *
 * 给你用户在 LeetCode 的操作日志，和一个整数 k 。日志用一个二维整数数组 logs 表示，其中每个 logs[i] = [IDi, timei] 表示 ID 为 IDi 的用户在 timei 分钟时执行了某个操作。
 *
 * 多个用户 可以同时执行操作，单个用户可以在同一分钟内执行 多个操作 。
 *
 * 指定用户的 用户活跃分钟数（user active minutes，UAM） 定义为用户对 LeetCode 执行操作的 唯一分钟数 。 即使一分钟内执行多个操作，也只能按一分钟计数。
 *
 * 请你统计用户活跃分钟数的分布情况，统计结果是一个长度为 k 且 下标从 1 开始计数 的数组 answer ，对于每个 j（1 <= j <= k），answer[j] 表示 用户活跃分钟数 等于 j 的用户数。
 *
 * 返回上面描述的答案数组 answer 。
 */

/**
 * 题目比较绕,核心就是找到k之内的用户的所有操作数,注意有重复的数字,要去重,
 * 还有就是答案数组的下标是当前活跃分钟数的值有多少个用户
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  let mapping = {};
  let result = new Array(k).fill(0);
  for (const item of logs) {
    if (mapping[item[0]]) {
      mapping[item[0]] = mapping[item[0]].add(item[1]);
    } else {
      mapping[item[0]] = new Set();
      mapping[item[0]] = mapping[item[0]].add(item[1]);
    }
  }
  console.log(mapping);
  for (const key in mapping) {
    if (Object.hasOwnProperty.call(mapping, key)) {
      let item = mapping[key];
      result[item.size - 1]++;
    }
  }
  return result;
};
/**
 * 使用对象包set的结构保存每个用户的所有运行时间并去重,性能很差
 * 如果不去重就会出现错误结果,去重就要保存之前的准确数据
 * 
 * 执行用时：428 ms, 在所有 JavaScript 提交中击败了9.9%的用户
 * 内存消耗：68.9 MB, 在所有 JavaScript 提交中击败了9.9%的用户
 */