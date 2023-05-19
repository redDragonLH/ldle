/**
 * 1079. 活字印刷
 *
 * 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。
 * 注意：本题中，每个活字字模只能使用一次。
 */
/**
 * 回溯
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const count = new Map();
  // 这是把同样的字母统一处理
  for (let t of tiles) {
    count.set(t, (count.get(t) || 0) + 1);
  }
  const tile = new Set(tiles);
  const n = tiles.length;

  // 回溯算法核心
  function dfs(i) {
    if (i == n) {
      return 1;
    }
    let res = 1;
    // 再次遍历
    for (let t of tile) {
      if (count.get(t) > 0) {
        count.set(t, count.get(t) - 1);
        res += dfs(i + 1);
        count.set(t, count.get(t) + 1);
      }
    }
    return res;
  }

  return dfs(0) - 1;
};
