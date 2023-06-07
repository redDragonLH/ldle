/**
 * 2611. 老鼠和奶酪
 * 有两只老鼠和 n 块不同类型的奶酪，每块奶酪都只能被其中一只老鼠吃掉。
 * 下标为 i 处的奶酪被吃掉的得分为：
 *  * 如果第一只老鼠吃掉，则得分为 reward1[i] 。
 *  * 如果第二只老鼠吃掉，则得分为 reward2[i] 。
 *
 * 给你一个正整数数组 reward1 ，一个正整数数组 reward2 ，和一个非负整数 k 。
 * 请你返回第一只老鼠恰好吃掉 k 块奶酪的情况下，最大 得分为多少
 */

/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  let ans = 0;
  let n = reward1.length;
  let diffs = new Array(n);
  for (let i = 0; i < n; i++) {
    // 2的总分
    ans += reward2[i];
    //2,1对应位置的差
    diffs[i] = reward1[i] - reward2[i];
  }
  // 有正有负
  diffs.sort((a, b) => a - b);
  // 
  for (let i = 1; i <= k; i++) {
    ans += diffs[n - i];
  }
  return ans;
};
