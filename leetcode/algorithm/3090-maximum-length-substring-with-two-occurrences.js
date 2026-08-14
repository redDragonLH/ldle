/**
 * 3090. 每个字符最多出现两次的最长子字符串
 *
 * 给你一个字符串 s ，请找出满足每个字符最多出现两次的最长子字符串，并返回该子字符串的 最大 长度。
 */
/**
 * 滑动窗口
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const charCount = new Map();

  while (right < s.length) {
    const char = s[right];
    charCount.set(char, (charCount.get(char) || 0) + 1);

    while (charCount.get(char) > 2) {
      const leftChar = s[left];
      charCount.set(leftChar, charCount.get(leftChar) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};
