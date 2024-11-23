/**
 * 3238. 求出胜利玩家的数目
 *
 * 给你一个整数 n ，表示在一个游戏中的玩家数目。同时给你一个二维整数数组 pick ，其中 pick[i] = [xi, yi] 表示玩家 xi 获得了一个颜色为 yi 的球。
 * 如果玩家 i 获得的球中任何一种颜色球的数目 严格大于 i 个，那么我们说玩家 i 是胜利玩家。换句话说：
 *  * 如果玩家 0 获得了任何的球，那么玩家 0 是胜利玩家。
 *  * 如果玩家 1 获得了至少 2 个相同颜色的球，那么玩家 1 是胜利玩家。
 *  * ...
 *  * 如果玩家 i 获得了至少 i + 1 个相同颜色的球，那么玩家 i 是胜利玩家。
 * 请你返回游戏中 胜利玩家 的数目。
 * 注意，可能有多个玩家是胜利玩家。
 */
/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
  let mapping = new Array(n).fill(1).map((it) => ({}));
  let result = 0;
  let winner = [];
  for (const item of pick) {
    mapping[item[0]][item[1]] = mapping[item[0]][item[1]]
      ? mapping[item[0]][item[1]] + 1
      : 1;
    if (
      !winner.includes(item[0]) &&
      mapping[item[0]][item[1]] > new Number(item[0])
    ) {
      result++;
      winner.push(item[0]);
    }
  }
  return result;
};
/**
 * 执行用时：17 ms, 在所有 JavaScript 提交中击败了0.00%的用户
 * 内存消耗：55.88 MB, 在所有 JavaScript 提交中击败了7.14%的用户
 */

/**
 * 官方题解 
 * 好在哪？
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    let cnt = Array.from({ length: n }, () => Array(11).fill(0)); 
    // 大概的流程是差不多的，为什么人家这么快
    pick.forEach(p => {
        cnt[p[0]][p[1]]++;
    });
    
    return cnt.filter((player, i) => 
        player.some((count, j) => count > i)
    ).length;
};
