/**
 * 851. 喧闹和富有
 *
 * 有一组 n 个人作为实验对象，从 0 到 n - 1 编号，其中每个人都有不同数目的钱，以及不同程度的安静值（quietness）。为了方便起见，我们将编号为 x 的人简称为 "person x "。
 *
 * 给你一个数组 richer ，其中 richer[i] = [ai, bi] 表示 person ai 比 person bi 更有钱。另给你一个整数数组 quiet ，其中 quiet[i] 是 person i 的安静值。
 * richer 中所给出的数据 逻辑自恰（也就是说，在 person x 比 person y 更有钱的同时，不会出现 person y 比 person x 更有钱的情况 ）。
 *
 * 现在，返回一个整数数组 answer 作为答案，其中 answer[x] = y 的前提是，在所有拥有的钱肯定不少于 person x 的人中，person y 是最安静的人（也就是安静值 quiet[y] 最小的人）。
 */

/**
 * 官方题解:深度优先搜索
 * 根据richer构建一张有向图:把人看成点,如果ai 比 bi更有钱,那么就从bi向ai连一条有向边,可以得到一张有向无环图
 * 
 * 从这个图上任意一点(设为x)出发,沿着有向边所能访问到的点,都比x更有钱
 * 
 * 题目需要计算拥有的钱肯定不少于x的人中,最安静的人.可分为拥有的钱肯定与x相等,以及拥有的钱肯定比x多两种情况. 对于前者,根据题目信息,只知道x拥有的钱肯定与自己相等,无法知道是否有其他热拥有的钱肯定与x相等;
 * 对于后者,可以先计算出x的邻居的answer值再取这些answer 值中的最小值为结果,这是因为从x的邻居出发所能访问到的点,并上x的邻居后所得到的点集,就是从x出发所能访问到的点
 * 
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const n = quiet.length;
  const g = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    g[i] = [];
  }
  for (const r of richer) {
    g[r[1]].push(r[0]);
  }

  const ans = new Array(n).fill(-1);
  for (let i = 0; i < n; ++i) {
    dfs(i, quiet, g, ans);
  }
  return ans;
};

const dfs = (x, quiet, g, ans) => {
  if (ans[x] !== -1) {
    return;
  }
  ans[x] = x;
  for (const y of g[x]) {
    dfs(y, quiet, g, ans);
    if (quiet[ans[y]] < quiet[ans[x]]) {
      ans[x] = ans[y];
    }
  }
};
