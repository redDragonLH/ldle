/**
 * 3499. 操作后最大活跃区段数 I
 *
 * 给你一个长度为 n 的二进制字符串 s，其中：
 *  * 1' 表示一个 活跃 区段。
 *  * '0' 表示一个 非活跃 区段。
 * 你可以执行 最多一次操作 来最大化 s 中的活跃区段数量。在一次操作中，你可以：
 *  * 将一个被 '0' 包围的连续 '1' 区块转换为全 '0'。
 *  * 然后，将一个被 '1' 包围的连续 '0' 区块转换为全 '1'。
 * 返回在执行最优操作后，s 中的 最大 活跃区段数。
 * 注意：处理时需要在 s 的两侧加上 '1' ，即 t = '1' + s + '1'。这些加上的 '1' 不会影响最终的计数。
 */
/**
 * 中译中：求“被若干个1隔开的两段0长度之和的最大值”，把这个值加上原字符串1的数量。
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (s) {
  const n = s.length;
  let cnt1 = 0;
  for (let c of s) {
    if (c === "1") cnt1++;
  }

  const zeroBlocks = [];
  let i = 0;
  while (i < n) {
    const start = i;
    while (i < n && s[i] === s[start]) {
      i++;
    }
    if (s[start] === "0") {
      zeroBlocks.push(i - start);
    }
  }

  const m = zeroBlocks.length;
  if (m < 2) {
    return cnt1;
  }

  let bestGain = 0; // 最优增量
  for (let j = 0; j < m - 1; j++) {
    bestGain = Math.max(bestGain, zeroBlocks[j] + zeroBlocks[j + 1]);
  }

  return cnt1 + bestGain;
};
