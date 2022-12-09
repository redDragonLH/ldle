/**
 * 1780. 判断一个数字是否可以表示成三的幂的和
 *
 * 给你一个整数 n ，如果你可以将 n 表示成若干个不同的三的幂之和，请你返回 true ，否则请返回 false 。
 *
 * 对于一个整数 y ，如果存在整数 x 满足 y == 3x ，我们称这个整数 y 是三的幂。
 */

/**
 * 若干不同的三的幂之和~~
 * 数得不同,而且数量不定
 * 回溯会好一点?
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  let deep = (/**次*/ power, /**当前*/ count, /** n */ n) => {
    console.log(power, count);
    if (Math.pow(3, power) + count > n) return false;
    if (Math.pow(3, power) + count === n) return true;
    for (let i = 0; i < power; i++) {
      if (deep(power + 1, Math.pow(3, power + 1) + count - Math.pow(3, i), n))
        return true;
    }
    return false;
  };
  return deep(1, 3, n);
};

/**
 * 失败
 */