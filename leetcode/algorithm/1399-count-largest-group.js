/**
 * 1399. 统计最大组的数目
 *
 * 给你一个整数 n 。请你先求出从 1 到 n 的每个整数 10 进制表示下的数位和（每一位上的数字相加），然后把数位和相等的数字放到同一个组中。
 * 请你统计每个组中的数字数目，并返回数字数目并列最多的组有多少个。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let map = new Map();
  // 常规 遍历
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let num = i;
    // 数位和
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    // 找桶
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  // 找最大值
  // 可不可以在找桶的时候计算呢
  let maxCount = Math.max(...Array.from(map.values()));
  return Array.from(map.values()).filter((count) => count === maxCount).length;
};
