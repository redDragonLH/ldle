/**
 * 1753. 移除石子的最大得分
 *
 * 你正在玩一个单人游戏，面前放置着大小分别为 a​​​​​​、b 和 c​​​​​​ 的 三堆 石子。
 *
 * 每回合你都要从两个 不同的非空堆 中取出一颗石子，并在得分上加 1 分。当存在 两个或更多 的空堆时，游戏停止。
 *
 * 给你三个整数 a 、b 和 c ，返回可以得到的 最大分数 。
 */

/**
 * 思路
 *  先升序排序，如果c >= a+b,那么直接返回a+b,即可
 *  如果 c < a+b,那么就要先把a,b去匹配，一旦a+b小于c，就用c把他们全部匹配掉
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  let arr = [a, b, c];
  arr.sort((a, b) => a - b);
  [a, b, c] = arr;
  if (a + b <= c) {
    return a + b;
  }

  t = a + b - c;
  t = Math.ceil(t / 2);
  res = t;
  a = a - t;
  b = b - t;
  res += a;
  res += b;
  return res;
};
