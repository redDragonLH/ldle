/**
 * 1090. 受标签影响的最大值
 * 
 * 我们有一个 n 项的集合。给出两个整数数组 values 和 labels ，第 i 个元素的值和标签分别是 values[i] 和 labels[i]。还会给出两个整数 numWanted 和 useLimit 。

 * 从 n 个元素中选择一个子集 s :
 *  * 子集 s 的大小 小于或等于 numWanted 。
 *  * s 中 最多 有相同标签的 useLimit 项。
 * 
 * 一个子集的 分数 是该子集的值之和。
 * 
 * 返回子集 s 的最大 分数 。
 * 
 * ---------------------
 *翻译:有一筐水果，里面有苹果、香蕉、鸭梨(labels)，每个水果的重量用values数组表示； 允许拿总计不超过numWanted个水果，且每一类水果最多拿useLimit个； 请问最重可以拿走多重的水果？
 */

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  const n = values.length;
  const idx = Array.from(Array(n), (_, i) => i);
  idx.sort((i, j) => values[j] - values[i]);

  let ans = 0,
    choose = 0;
  const cnt = {};
  for (let i = 0; i < n; i++) {
    const label = labels[idx[i]];
    if (cnt[label] === useLimit) {
      continue;
    }
    choose++;
    ans += values[idx[i]];
    cnt[label] = (cnt[label] || 0) + 1;
    if (choose === numWanted) {
      break;
    }
  }
  return ans;
};
