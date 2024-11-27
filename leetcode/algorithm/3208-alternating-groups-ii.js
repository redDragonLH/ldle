/**
 * 3208. 交替组 II
 *
 * 给你一个整数数组 colors 和一个整数 k ，colors表示一个由红色和蓝色瓷砖组成的环，第 i 块瓷砖的颜色为 colors[i] ：
 *  * colors[i] == 0 表示第 i 块瓷砖的颜色是 红色 。
 *  * colors[i] == 1 表示第 i 块瓷砖的颜色是 蓝色 。
 * 环中连续 k 块瓷砖的颜色如果是 交替 颜色（也就是说除了第一块和最后一块瓷砖以外，中间瓷砖的颜色与它 左边 和 右边 的颜色都不同），那么它被称为一个 交替 组。
 * 请你返回 交替 组的数目。
 * 注意 ，由于 colors 表示一个 环 ，第一块 瓷砖和 最后一块 瓷砖是相邻的。
 */

/**
 * 滑动窗口?还是扩展一下遍历逻辑
 *
 * 第一块和最后一块颜色要一样
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const n = colors.length;
  let ans = 0,
    cnt = 0;
  for (let i = 0; i < n * 2; i++) {
    if (i > 0 && colors[i % n] === colors[(i - 1) % n]) {
      cnt = 0;
    }
    cnt++;
    // 只有当 i >= n 时，才开始计数
    // 也就是第一个n循环没有计数
    // 也就是第一个n循环只计算了最后一个交替组
    if (i >= n && cnt >= k) {
      ans++;
    }
  }
  return ans;
};
/**
 * 这就不好想了,谁能想到还要和第一遍的循环之前的数据有关联
 */