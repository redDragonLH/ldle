/**
 * 1247. 交换字符使得字符串相同
 *
 * 有两个长度相同的字符串 s1 和 s2，且它们其中 只含有 字符 "x" 和 "y"，你需要通过「交换字符」的方式使这两个字符串相同。
 *
 * 每次「交换字符」的时候，你都可以在两个字符串中各选一个字符进行交换。
 *
 * 交换只能发生在两个不同的字符串之间，绝对不能发生在同一个字符串内部。也就是说，我们可以交换 s1[i] 和 s2[j]，但不能交换 s1[i] 和 s1[j]。
 *
 * 最后，请你返回使 s1 和 s2 相同的最小交换次数，如果没有方法能够使得这两个字符串相同，则返回 -1 。
 */

/**
 *
 * 查找对应位置，让一次交换能满足两个位置要求
 * 话说就是用s1 的错位的 x减去s2的x（或者y？），y也同样，得到的数就是一次满足两个的数量，剩下的x,y就是得一次换一个的那种
 *
 * 贪心
 *
 * 这个算法把错位的情况抽象为 xy和yx（理论上也就只有这两种情况，但是要一个xy和一个yx才是一个完整的交换组，一个同位置xy或一个yx 并不满足交换后字符串相等的要求）
 * 抽象为这两种情况后只要找到两种情况成对的数量就找到能压缩的最少交换次数，然后剩余的就是不能压缩的
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  let xy = 0,
    yx = 0;
  const n = s1.length;
  // 错位只有两种情况： xy/yx
  for (let i = 0; i < n; i++) {
    const a = s1[i],
      b = s2[i];
    if (a === "x" && b === "y") {
      xy++;
    }
    if (a === "y" && b === "x") {
      yx++;
    }
  }
  // 如果xy不是偶数那么说明无法对称
  if ((xy + yx) % 2 === 1) {
    return -1;
  }
  // 因为xy与yx基本是对称的，所以它们的一般就是一次交换能满足两个错位位置；但是可能是奇数。这样他们的一半就要剩下点，所以要余一下
  return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) + (yx % 2);
};
