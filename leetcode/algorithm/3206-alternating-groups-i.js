/**
 * 3206. 交替组 I
 *
 * 给你一个整数数组 colors ，它表示一个由红色和蓝色瓷砖组成的环，第 i 块瓷砖的颜色为 colors[i] ：
 *  * colors[i] == 0 表示第 i 块瓷砖的颜色是 红色 。
 *  * colors[i] == 1 表示第 i 块瓷砖的颜色是 蓝色 。
 * 环中连续 3 块瓷砖的颜色如果是 交替 颜色（也就是说中间瓷砖的颜色与它 左边 和 右边 的颜色都不同），那么它被称为一个 交替 组。
 * 请你返回 交替 组的数目。
 * 注意 ，由于 colors 表示一个 环 ，第一块 瓷砖和 最后一块 瓷砖是相邻的。
 */
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  let count = 0;
  for (let i = 1; i < colors.length; i++) {
    if (
      colors[i] !== colors[i - 1] &&
      colors[i] !== colors[(i + 1) % colors.length]
    ) {
      count++;
    }
  }
  // 没有处理第一个的情况
  if (colors[0] !== colors[colors.length - 1] && colors[0] !== colors[1]) {
    count++;
  }
  return count;
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：52.14 MB, 在所有 JavaScript 提交中击败了14.81%的用户
 */