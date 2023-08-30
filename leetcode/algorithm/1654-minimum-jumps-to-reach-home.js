/**
 * 1654. 到家的最少跳跃次数
 *
 * 有一只跳蚤的家在数轴上的位置 x 处。请你帮助它从位置 0 出发，到达它的家。
 *
 * 跳蚤跳跃的规则如下：
 *  * 它可以 往前 跳恰好 a 个位置（即往右跳）。
 *  * 它可以 往后 跳恰好 b 个位置（即往左跳）。
 *  * 它不能 连续 往后跳 2 次。
 *  * 它不能跳到任何 forbidden 数组中的位置。
 * 跳蚤可以往前跳 超过 它的家的位置，但是它 不能跳到负整数 的位置。
 *
 * 给你一个整数数组 forbidden ，其中 forbidden[i] 是跳蚤不能跳到的位置，同时给你整数 a， b 和 x ，请你返回跳蚤到家的最少跳跃次数。如果没有恰好到达 x 的可行方案，请你返回 -1 。
 */

/**
 * 重要条件
 *  * 不能跳到负整数位置
 *  * 不能连续向后跳2次
 *
 * 这两个条件基本规定了跳跃范围,但是得按照不同情况分别判断
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
  const lower = 0;
  // 可跳跃最远距离么
  const upper = Math.max(Math.max(...forbidden) + a, x) + b;
  // 初始数据,这部分有点像动态规划的逻辑
  /**
   * position
   * direction
   * step
   */
  let q = [[0, 1, 0]];
  const visited = new Set([0]);
  const forbiddenSet = new Set(forbidden);
  while (q.length > 0) {
    let position = q[0][0];
    let direction = q[0][1];
    let step = q[0][2];
    q.shift();
    // 终结条件
    if (position == x) {
      return step;
    }
    let nextPosition = position + a;
    let nextDirection = 1;
    if (
      lower <= nextPosition &&
      nextPosition <= upper &&
      !visited.has(nextPosition * nextDirection) &&
      !forbiddenSet.has(nextPosition)
    ) {
      visited.add(nextPosition * nextDirection);
      q.push([nextPosition, nextDirection, step + 1]);
    }
    if (direction == 1) {
      nextPosition = position - b;
      nextDirection = -1;
      if (
        lower <= nextPosition &&
        nextPosition <= upper &&
        !visited.has(nextPosition * nextDirection) &&
        !forbiddenSet.has(nextPosition)
      ) {
        visited.add(nextPosition * nextDirection);
        q.push([nextPosition, nextDirection, step + 1]);
      }
    }
  }
  return -1;
};
/**
 * 感觉动态规划也可以
 */