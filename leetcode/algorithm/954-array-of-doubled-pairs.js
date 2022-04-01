/**
 * 954. 二倍数对数组
 *
 * 给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。
 */

/**
 * ，题目本质上是问 arr 能否分成 2/n 对元素，每对元素中一个数是另一个数的两倍
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
  const cnt = new Map();
  for (const x of arr) {
    cnt.set(x, (cnt.get(x) || 0) + 1);
  }
  if ((cnt.get(0) || 0) % 2 !== 0) {
    return false;
  }

  const vals = [];
  for (const x of cnt.keys()) {
    vals.push(x);
  }
  vals.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (const x of vals) {
    if ((cnt.get(2 * x) || 0) < cnt.get(x)) {
      // 无法找到足够的 2x 与 x 配对
      return false;
    }
    cnt.set(2 * x, (cnt.get(2 * x) || 0) - cnt.get(x));
  }
  return true;
};
