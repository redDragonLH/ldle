/**
 * 3137. K 周期字符串需要的最少操作次数
 *
 * 给你一个长度为 n 的字符串 word 和一个整数 k ，其中 k 是 n 的因数。
 * 在一次操作中，你可以选择任意两个下标 i 和 j，其中 0 <= i, j < n ，且这两个下标都可以被 k 整除，然后用从 j 开始的长度为 k 的子串替换从 i 开始的长度为 k 的子串。也就是说，将子串 word[i..i + k - 1] 替换为子串 word[j..j + k - 1] 。
 * 返回使 word 成为 K 周期字符串 所需的 最少 操作次数。
 * 如果存在某个长度为 k 的字符串 s，使得 word 可以表示为任意次数连接 s ，则称字符串 word 是 K 周期字符串 。例如，如果 word == "ababab"，那么 word 就是 s = "ab" 时的 2 周期字符串 。
 */

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function (word, k) {
  // 反正选k个字符串肯定能变成 k周期字符串,但是怎么选才能使操作次数最少.
  // 每次必须选k个字符,所以只能选k个字符中出现次数最多的字符,然后把其他字符替换成这个字符.
  // 选出现次数最多的字符,然后把其他字符替换成这个字符,也得考虑位置,否则不行
  // 查找字符串的循环是以k为周期的
  let array = word.split("");
  let mapping = new Map();
  let max = 0;
  for (let i = 0; i < array.length; i += k) {
    let str = getSubString(array, k, i);
    if (mapping.has(str)) {
      mapping.set(str, mapping.get(str) + 1);
    } else {
      mapping.set(str, 1);
    }
    max = Math.max(max, mapping.get(str));
  }
  return (array.length - max * k) / k;
};

const getSubString = (word, k, start) => {
  let subString = "";
  for (let i = start; i < start + k; i++) {
    subString += word[i];
  }
  return subString;
};
/**
 * 执行用时：134 ms, 在所有 JavaScript 提交中击败了31.03%的用户
 * 内存消耗：67.86 MB, 在所有 JavaScript 提交中击败了10.43%的用户
 */

/**
 * 第三方题解 优化
 */
var minimumOperationsToMakeKPeriodic = function (word, k) {
    const map = new Map();
    let len = word.length,max = 0;
    for (let i = 0; i < word.length; i += k) {
        // 没必要数组循环,直接截取字符串即可,这还不用转换成数组
        const unit = word.slice(i, i + k)
        map.set(unit, (map.get(unit) || 0) + 1)
        max = Math.max(max, map.get(unit));

    }
    return (len - max * k) / k
};
/**
 * 执行用时：103 ms, 在所有 JavaScript 提交中击败了68.97%的用户
 * 内存消耗：58.82 MB, 在所有 JavaScript 提交中击败了86.21%的用户
 */