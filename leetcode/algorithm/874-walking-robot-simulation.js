/**
 * 874. 模拟行走机器人
 *
 * 机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令 commands ：
 *  * -2 ：向左转 90 度
 *  * -1 ：向右转 90 度
 *  * 1 <= x <= 9 ：向前移动 x 个单位长度
 *
 * 在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点  obstacles[i] = (xi, yi) 。
 * 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。
 * 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）
 *
 * 注意：
 *  * 北表示 +Y 方向。
 *  * 东表示 +X 方向。
 *  * 南表示 -Y 方向。
 *  * 西表示 -X 方向。
 */

/**
 * 这题就是个广度优先或者深度优先搜索,但是欧氏距离是啥,
 *
 * 欧氏距离就是两点间直线距离,a^2+b^2,
 * 但是这是会拐弯的~~,得一边移动一边计算
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    //方向
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let px = 0,
    py = 0,
    d = 1;
  let set = new Set();
  // 把路障放到set里,那个数是为了不重复么
  for (const obstacle of obstacles) {
    set.add(obstacle[0] * 60001 + obstacle[1]);
  }
  let res = 0;
  // 遍历执行命令
  // 搜索最远能到哪里
  for (const c of commands) {
    // 转向
    if (c < 0) {
        // 这个转向逻辑很有意思
      d += c == -1 ? 1 : 3;
      d %= 4;
    } else {
        // 向前走
      for (let i = 0; i < c; i++) {
        // 有障碍物就停止命令执行
        if (set.has((px + dirs[d][0]) * 60001 + py + dirs[d][1])) {
          break;
        }
        // 逻辑就很简单了
        px += dirs[d][0];
        py += dirs[d][1];
        // 而且还是最终点到原点的距离,并不是每个障碍点或命令停止点的距离相加
        res = Math.max(res, px * px + py * py);
      }
    }
  }
  return res;
};
