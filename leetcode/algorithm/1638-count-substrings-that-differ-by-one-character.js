/**
 * 1638. 统计只差一个字符的子串数目
 *
 * 给你两个字符串 s 和 t ，请你找出 s 中的非空子串的数目，这些子串满足替换 一个不同字符 以后，是 t 串的子串。换言之，请你找到 s 和 t 串中 恰好 只有一个字符不同的子字符串对的数目。
 *
 * 比方说， "computer" and "computation" 只有一个字符不同： 'e'/'a' ，所以这一对子字符串会给答案加 1 。
 *
 * 请你返回满足上述条件的不同子字符串对数目。
 *
 * 一个 子字符串 是一个字符串中连续的字符。
 */

/**
 * 官方题解:暴力枚举
 *
 * 枚举 s 与 t 的子串的起点 ,i,j，并依次往后遍历，二者不同的字符个数为 diff，当我们遍历到起点开始的第 k 个字符时
 *
 * * 如果 s[i+k]=t[j+k]，此时 diff 的数目保持不变；
 * * 如果 s[i+k]  ​ =t[j+k]，此时 diff 的数目加 1；
 * * 如果此时 diff=0 时，我们继续往后遍历；
 * * 如果此时 diff = 1时，此时子串 s[i,⋯,(i+k)] 与子串 t[j,⋯,(j+k)] 不同的字符数目为 1，此时计入答案一次；
 * * 如果此时 diff > 1 时，此时子串 s[i,⋯,(i+k)] 与子串 t[j,⋯,(j+k)] 不同的字符数目大于 1，直接退出遍历;
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  const m = s.length,
    n = t.length;
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 也是有状态的,在中层循环中
      let diff = 0;
      // 从开始遍历,当前元素相等则说明前面所遍历的字串到这里也是相等的,接续遍历
      for (let k = 0; i + k < m && j + k < n; k++) {
        // 如果不等则找到了不等的子串
        diff += s[i + k] === t[j + k] ? 0 : 1;
        if (diff > 1) {
          break;
        } else if (diff === 1) {
          ans++;
        }
      }
    }
  }
  return ans;
};
/**
 * 官方题解,不做性能留存
 */