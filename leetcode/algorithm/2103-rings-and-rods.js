/**
 * 2103. 环和杆
 *
 * 总计有 n 个环，环的颜色可以是红、绿、蓝中的一种。这些环分别穿在 10 根编号为 0 到 9 的杆上。
 * 给你一个长度为 2n 的字符串 rings ，表示这 n 个环在杆上的分布。rings 中每两个字符形成一个 颜色位置对 ，用于描述每个环：
 *  * 第 i 对中的 第一个 字符表示第 i 个环的 颜色（'R'、'G'、'B'）。
 *  * 第 i 对中的 第二个 字符表示第 i 个环的 位置，也就是位于哪根杆上（'0' 到 '9'）。
 * 例如，"R3G2B1" 表示：共有 n == 3 个环，红色的环在编号为 3 的杆上，绿色的环在编号为 2 的杆上，蓝色的环在编号为 1 的杆上。
 * 找出所有集齐 全部三种颜色 环的杆，并返回这种杆的数量。
 */

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let map = [];
  for (let i = 0; i < rings.length; i += 2) {
    let posi = parseInt(rings[i + 1]);
    if (!map[rings[i + 1]]) {
      map[posi] = [0, 0, 0];
    }
    if (rings[i] === "R") {
      map[posi][0] += 1;
    } else if (rings[i] === "G") {
      map[posi][1] += 1;
    } else if (rings[i] === "B") {
      map[posi][2] += 1;
    }
  }
  let result = 0;
  for (const iterator of map) {
    if (iterator && iterator[0] && iterator[1] && iterator[2]) {
      result++;
    }
  }
  return result;
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了84.62%的用户
 * 内存消耗：40.05 MB, 在所有 JavaScript 提交中击败了58.97%的用户
 */
