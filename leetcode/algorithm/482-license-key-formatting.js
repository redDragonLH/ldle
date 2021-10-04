/**
 * 482. 密钥格式化
 *
 * 有一个密钥字符串 S ，只包含字母，数字以及 '-'（破折号）。其中， N 个 '-' 将字符串分成了 N+1 组。
 *
 * 给你一个数字 K，请你重新格式化字符串，使每个分组恰好包含 K 个字符。特别地，第一个分组包含的字符个数必须小于等于 K，但至少要包含 1 个字符。
 * 两个分组之间需要用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母。
 *
 * 给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。
 */

/**
 * 按部就班有点超时~~
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let sLen = s.length;
  let sArr = s.split("-");
  sLen = sLen - sArr.length + 1;
  let first = sLen % k;
  let result = "";
  let i = 0;
  while (first || i === sLen) {
    if (s[i] !== "-") {
      result += s[i].toLocaleUpperCase();
      first--;
      i++;
    }
  }
  i > 0 && (result += "-");

  let num = 0;
  for (; i < s.length; i++) {
    if (s[i] !== "-") {
      result += s[i].toLocaleUpperCase();
      num++;
      if (!(num % k)) {
        result += "-";
      }
    }
  }
  return result.slice(0, result.length - 1);
};

/**
 * 官方题解
 */
var licenseKeyFormatting = function (s, k) {
  const ans = [];
  let cnt = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "-") {
      cnt++;
      ans.push(s[i].toUpperCase());
      if (cnt % k === 0) {
        ans.push("-");
      }
    }
  }
  if (ans.length > 0 && ans[ans.length - 1] === "-") {
    ans.pop();
  }

  return ans.reverse().join("");
};
