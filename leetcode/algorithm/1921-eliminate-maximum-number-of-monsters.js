/**
 * 1921. 消灭怪物的最大数量
 *
 * 你正在玩一款电子游戏，在游戏中你需要保护城市免受怪物侵袭。给你一个 下标从 0 开始 且长度为 n 的整数数组 dist ，其中 dist[i] 是第 i 个怪物与城市的 初始距离（单位：米）。
 * 怪物以 恒定 的速度走向城市。给你一个长度为 n 的整数数组 speed 表示每个怪物的速度，其中 speed[i] 是第 i 个怪物的速度（单位：米/分）。
 * 怪物从 第 0 分钟 时开始移动。你有一把武器，并可以 选择 在每一分钟的开始时使用，包括第 0 分钟。但是你无法在一分钟的中间使用武器。这种武器威力惊人，一次可以消灭任一还活着的怪物。
 * 一旦任一怪物到达城市，你就输掉了这场游戏。如果某个怪物 恰 在某一分钟开始时到达城市，这会被视为 输掉 游戏，在你可以使用武器之前，游戏就会结束。
 * 返回在你输掉游戏前可以消灭的怪物的 最大 数量。如果你可以在所有怪物到达城市前将它们全部消灭，返回  n 。
 */

/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  // 还是得排序吧
  // distance 和speed 都不能单独揭示当前怪兽需要多少时间到达城市，得先得出来时间
  // distance / speed = time

  let len = dist.length;
  let arrivaTimes = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    /**
     * Math.ceil 向上取整
     * Math.floor 向下取整
     * Math.round 四舍五入取整
     *
     * parseInt 去掉小数
     */
    arrivaTimes[i] = Math.ceil(dist[i] / speed[i]);
  }
  arrivalTimes.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (arrivalTimes[i] <= i) {
      return i;
    }
  }
  return len;
};
