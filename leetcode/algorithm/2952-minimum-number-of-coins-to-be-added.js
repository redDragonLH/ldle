/**
 * 2952. 需要添加的硬币的最小数量
 *
 * 给你一个下标从 0 开始的整数数组 coins，表示可用的硬币的面值，以及一个整数 target 。
 * 如果存在某个 coins 的子序列总和为 x，那么整数 x 就是一个 可取得的金额 。
 * 返回需要添加到数组中的 任意面值 硬币的 最小数量 ，使范围 [1, target] 内的每个整数都属于 可取得的金额 。
 * 数组的 子序列 是通过删除原始数组的一些（可能不删除）元素而形成的新的 非空 数组，删除过程不会改变剩余元素的相对位置。
 */

/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  coins.sort((a, b) => a - b);
  let ans = 0,
    s = 1,
    i = 0;
  while (s <= target) {
    if (i < coins.length && coins[i] <= s) {
      s += coins[i++];
    } else {
      s *= 2; // 必须添加 s
      ans++;
    }
  }
  return ans;
};
