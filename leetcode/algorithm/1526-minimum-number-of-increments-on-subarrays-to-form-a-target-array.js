/**
 * 1526. 形成目标数组的子数组最少增加次数
 * 给你一个整数数组 target 和一个数组 initial ，initial 数组与 target  数组有同样的维度，且一开始全部为 0 。
 * 请你返回从 initial 得到  target 的最少操作次数，每次操作需遵循以下规则：
 *  * 在 initial 中选择 任意 子数组，并将子数组中每个元素增加 1 。
 * 答案保证在 32 位有符号整数以内。
 */

/**
 * 这虽然是困难题，感觉也不是很困难~~
 *
 * 找到子数组中的最低点，然后计算每个点相对于最低点的增量，累加起来就是答案
 * 这道题的核心就是分组喽
 *  如何搜索这个分组或者说叫窗口
 * 子数组：连续的元素组成的数组
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  let max = Math.max(...target);
  let min = Math.min(...target);
  let res = min; // 先把最低点的增量加上
  let bucket = [];
  let nextMin = max;
  while (min < max) {
    for (let i = 0; i < target.length; i++) {
      if (target[i] <= min) {
        console.log(bucket, min, max);
        res += bucket.length ? 1 : 0; // 有子数组才加1
        bucket = [];
      } else if (target[i] > min) {
        bucket.push(target[i]);
        nextMin = Math.min(max, target[i]);
      }
    }
    min = nextMin;
    res += bucket.length ? 1 : 0; // 有子数组才加
    bucket = [];
  }
  //   let maxNum = target.filter((num) => num === max).length;
  //   console.log(res,maxNum)
  return res;
};
/**
 * 失败
 */

/**
 * 官方题解：差分数组
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  const n = target.length;
  let ans = target[0];
  for (let i = 1; i < n; ++i) {
    ans += Math.max(target[i] - target[i - 1], 0);
  }
  return ans;
};
