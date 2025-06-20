/**
 * 3443. K 次修改后的最大曼哈顿距离
 *
 * 给你一个由字符 'N'、'S'、'E' 和 'W' 组成的字符串 s，其中 s[i] 表示在无限网格中的移动操作：
 *  * 'N'：向北移动 1 个单位。
 *  * 'S'：向南移动 1 个单位。
 *  * 'E'：向东移动 1 个单位。
 *  * 'W'：向西移动 1 个单位。
 * 初始时，你位于原点 (0, 0)。你 最多 可以修改 k 个字符为任意四个方向之一。
 * 请找出在 按顺序 执行所有移动操作过程中的 任意时刻 ，所能达到的离原点的 最大曼哈顿距离 。
 * 曼哈顿距离 定义为两个坐标点 (xi, yi) 和 (xj, yj) 的横向距离绝对值与纵向距离绝对值之和，即 |xi - xj| + |yi - yj|。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (s, k) {
  let ans = 0;
  let north = 0,
    south = 0,
    east = 0,
    west = 0;
  for (const it of s) {
    switch (it) {
      case "N":
        north++;
        break;
      case "S":
        south++;
        break;
      case "E":
        east++;
        break;
      case "W":
        west++;
        break;
    }

    const count = (drt1, drt2, times) => {
      return Math.abs(drt1 - drt2) + times * 2; // Calculate modified Manhattan distance
    };

    let times1 = Math.min(north, south, k); // modification times for N and S
    let times2 = Math.min(east, west, k - times1); // modification times for E and W
    ans = Math.max(
      ans,
      count(north, south, times1) + count(east, west, times2)
    );
  }
  return ans;
};
/**
 * 执行用时：87 ms, 在所有 JavaScript 提交中击败了50.00%的用户
 * 内存消耗：67.12 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */