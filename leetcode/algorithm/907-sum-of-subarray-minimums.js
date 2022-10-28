/**
 * 907. 子数组的最小值之和
 *
 * 给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。
 *
 * 由于答案可能很大，因此 返回答案模 10^9 + 7 。
 */

/**
 *
 * 获取当前子数组的最小值,那么和谐就是如何获得所有字数组
 * 回溯么
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {};

/**
 *
 * 找区间最小值是更优化的做法,
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const n = arr.length;
  let monoStack = [];
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  // 循环所有数组
  for (let i = 0; i < n; i++) {
    // monoStack 栈不为空,并且  当前遍历元素比栈顶小
    // 则弹出
    while (
      monoStack.length !== 0 &&
      arr[i] <= arr[monoStack[monoStack.length - 1]]
    ) {
      monoStack.pop();
    }
    // 主要计算当前i下面
    left[i] =
      i - (monoStack.length === 0 ? -1 : monoStack[monoStack.length - 1]);
      // 推进去的是元素位置
    monoStack.push(i);
  }
  monoStack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (
      monoStack.length !== 0 &&
      arr[i] < arr[monoStack[monoStack.length - 1]]
    ) {
      monoStack.pop();
    }
    right[i] =
      (monoStack.length === 0 ? n : monoStack[monoStack.length - 1]) - i;
    monoStack.push(i);
  }
  let ans = 0;
  const MOD = 1000000007;
  for (let i = 0; i < n; i++) {
    ans = (ans + left[i] * right[i] * arr[i]) % MOD;
  }
  return ans;
};
