/**
 * 2833. 距离原点最远的点
 *
 * 给你一个长度为 n 的字符串 moves ，该字符串仅由字符 'L'、'R' 和 '_' 组成。字符串表示你在一条原点为 0 的数轴上的若干次移动。
 * 你的初始位置就在原点（0），第 i 次移动过程中，你可以根据对应字符选择移动方向：
 *  * 如果 moves[i] = 'L' 或 moves[i] = '_' ，可以选择向左移动一个单位距离
 *  * 如果 moves[i] = 'R' 或 moves[i] = '_' ，可以选择向右移动一个单位距离
 * 移动 n 次之后，请你找出可以到达的距离原点 最远 的点，并返回 从原点到这一点的距离 。
 */
/**
 * 贪心?
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let left = 0,
    right = 0,
    blank = 0;
  for (let move of moves) {
    if (move === "L") {
      left++;
    } else if (move === "R") {
      right++;
    } else {
      blank++;
    }
  }
  return Math.abs(left - right) + blank;
};
/**
 * 提取出 L 和 R 的数量，剩下的 _ 都可以当做 L 或 R 来用，所以距离就是 L 和 R 的数量差值加上 _ 的数量
 * 执行用时 :3 ms, 在所有 JavaScript 提交中击败了40.00%的用户
 * 内存消耗 :56.40 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */