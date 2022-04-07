/**
 * 796. 旋转字符串
 *
 * 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。
 *
 * s 的 旋转操作 就是将 s 最左边的字符移动到最右边。
 *  * 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
 */

/**
 * 长度首先要一样
 * 暴力遍历,要注意字符串末尾转到字符串头
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
};

/**
 * 因为goal是s旋转之后构成的额,说明只有s的左右连接在一起之后里面一定存在goal
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了87.83%的用户
 * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了55.49%的用户
 */