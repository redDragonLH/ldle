/**
 * 2287. 重排字符形成目标字符串
 *
 * 给你两个下标从 0 开始的字符串 s 和 target 。你可以从 s 取出一些字符并将其重排，得到若干新的字符串。
 *
 * 从 s 中取出字符并重新排列，返回可以形成 target 的 最大 副本数。
 */
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  let targetMapping = {};
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < target.length; i++) {
    if (targetMapping[target[i]]) {
      targetMapping[target[i]] += 1;
    } else {
      targetMapping[target[i]] = 1;
    }
  }
  let t = {};
  for (let i = 0; i < s.length; i++) {
    if (t[s[i]]) {
      t[s[i]] += 1;
    } else {
      t[s[i]] = 1;
    }
  }

  for (const key in targetMapping) {
    if (Object.hasOwnProperty.call(targetMapping, key)) {
      if (!t[key]) return 0;
      result = Math.min(result, parseInt(t[key] / targetMapping[key]));
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了87.50%的用户
 * 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了41.76%的用户
 */
