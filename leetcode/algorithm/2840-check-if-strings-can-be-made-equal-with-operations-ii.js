/**
 * 2840. 判断通过操作能否让字符串相等 II
 *
 * 给你两个字符串 s1 和 s2 ，两个字符串长度都为 n ，且只包含 小写 英文字母。
 * 你可以对两个字符串中的 任意一个 执行以下操作 任意 次：
 *  * 选择两个下标 i 和 j ，满足 i < j 且 j - i 是 偶数，然后 交换 这个字符串中两个下标对应的字符。
 * 如果你可以让字符串 s1 和 s2 相等，那么返回 true ，否则返回 false 。
 */

/**
 * 在一轮循环中同时遍历 s1和 s2，对 s1 当前下标的字符在对应集合中的频次加一；
 * 而对于 s2 当前下标的字符，则在对应集合中的频次减一。最后检验两个集合上的元素，
 * 若全归零，则说明两个字符串的奇偶集合相同，反之则不相等。
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const counts = new Int32Array(256);

  for (let i = 0; i < s1.length; i++) {
    const offset = (i & 1) << 7;
    counts[offset + s1.charCodeAt(i)]++;
    counts[offset + s2.charCodeAt(i)]--;
  }

  for (let i = 0; i < 256; i++) {
    if (counts[i] !== 0) {
      return false;
    }
  }

  return true;
};
