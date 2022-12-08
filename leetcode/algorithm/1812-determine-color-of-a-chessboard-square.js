/**
 * 1812. 判断国际象棋棋盘中一个格子的颜色
 *
 * 给你一个坐标 coordinates ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。
 *
 * 如果所给格子的颜色是白色，请你返回 true，如果是黑色，请返回 false 。
 *
 * 给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。
 */

/**
 * 数据是定死的~~可以用存数据解法
 * 不过算了~~
 * 横坐标偶数,纵坐标奇数为 黑色
 * 横坐标偶数,纵坐标偶数为 白色
 * 横坐标奇数,纵坐标奇数为 白色
 * 横坐标奇数,纵坐标偶数为 黑色
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let coordinateArr = coordinates.split("");
  coordinateArr[0] = (coordinateArr[0].charCodeAt() - "a".charCodeAt()) % 2;
  coordinateArr[1] = parseInt(coordinateArr[1]) % 2;
  let map = {
    0: {
      0: true,
      1: false,
    },
    1: {
      0: false,
      1: true,
    },
  };
  return map[coordinateArr[0]][coordinateArr[1]];
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了32.61%的用户
 * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了28.26%的用户
 */
