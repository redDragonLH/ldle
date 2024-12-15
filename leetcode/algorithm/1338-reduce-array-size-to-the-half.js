/**
 * 1338. 数组大小减半
 *
 * 给你一个整数数组 arr。你可以从中选出一个整数集合，并删除这些整数在数组中的每次出现。
 * 返回 至少 能删除数组中的一半整数的整数集合的最小大小。
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const freq = new Map();
  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  const occ = [...freq.values()].sort((a, b) => b - a);
  let cnt = 0,
    ans = 0;
  for (const c of occ) {
    cnt += c;
    ans++;
    if (cnt * 2 >= arr.length) {
      break;
    }
  }
  return ans;
};
