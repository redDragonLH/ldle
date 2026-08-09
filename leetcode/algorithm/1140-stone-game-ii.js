/**
 * 1140. 石子游戏 II
 *
 * Alice 和 Bob 继续他们的石子游戏。许多堆石子 排成一行，每堆都有正整数颗石子 piles[i]。游戏以谁手中的石子最多来决出胜负。
 * Alice 和 Bob 轮流进行，Alice 先开始。最初，M = 1。
 * 在每个玩家的回合中，该玩家可以拿走剩下的 前 X 堆的所有石子，其中 1 <= X <= 2M。然后，令 M = max(M, X)。
 * 游戏一直持续到所有石子都被拿走。
 * 假设 Alice 和 Bob 都发挥出最佳水平，返回 Alice 可以得到的最大数量的石头。
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
const max = Math.max;
const stoneGameII = function (piles) {
  const n = piles.length;

  const s = [0];
  for (const x of piles) s.push(s.at(-1) + x);

  const cache = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null));
  const dfs = (i, m) => {
    if (m * 2 >= n - i) return s[n] - s[i];
    if (cache[i][m] !== null) return cache[i][m];
    let res = -Infinity;
    for (let x = 1; x < m * 2 + 1; x++) {
      res = max(res, s[n] - s[i] - dfs(i + x, max(m, x)));
    }
    cache[i][m] = res;
    return res;
  };
  return dfs(0, 1);
};
