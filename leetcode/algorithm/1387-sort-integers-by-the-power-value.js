/**
 * 1387. 将整数按权重排序
 *
 * 我们将整数 x 的 权重 定义为按照下述规则将 x 变成 1 所需要的步数：
 *  * 如果 x 是偶数，那么 x = x / 2
 *  * 如果 x 是奇数，那么 x = 3 * x + 1
 * 比方说，x=3 的权重为 7 。因为 3 需要 7 步变成 1 （3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1）。
 * 给你三个整数 lo， hi 和 k 。你的任务是将区间 [lo, hi] 之间的整数按照它们的权重 升序排序 ，如果大于等于 2 个整数有 相同 的权重，那么按照数字自身的数值 升序排序 。
 * 请你返回区间 [lo, hi] 之间的整数按权重排序后的第 k 个数。
 * 注意，题目保证对于任意整数 x （lo <= x <= hi） ，它变成 1 所需要的步数是一个 32 位有符号整数。
 */
/**
 * 模拟~~
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
function getF(x) {
  if (x === 1) {
    return 0;
  }
  if (x & 1) {
    return getF(x * 3 + 1) + 1;
  } else {
    return getF(Math.floor(x / 2)) + 1;
  }
}

var getKth = function (lo, hi, k) {
  let v = [];
  for (let i = lo; i <= hi; i++) {
    v.push(i);
  }
  v.sort((u, v) => {
    let f1 = getF(u);
    let f2 = getF(v);
    if (f1 !== f2) {
      return f1 - f2;
    }
    return u - v;
  });
  return v[k - 1];
};
/**
 * 顶多加点缓存
 */