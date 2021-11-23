/**
 * 859. 亲密字符串
 *
 * 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
 * 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
 * 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 */

/**
 * 也就是说,两个字符串只能有两个位置的字符不一样,且字符内容数量是一样的
 *
 * 让特殊用例搞爆炸,这个思路还能优化
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  let dislocation = [];
  let sLen = s.length;
  if (sLen !== goal.length) return false;
  for (let i = 0; i < sLen; i++) {
    if (s[i] !== goal[i]) dislocation.push(i);
  }
  if (dislocation.length === 0) {
    // 还要考虑相等但是能交换字符的情况
    // 也就是一个字符串里面必须有重复字符
    let letters = new Array(26).fill(0);
    const aCode = 97;
    for (let i = 0; i < sLen; i++) {
      let iCode = s[i].charCodeAt() - aCode;
      letters[iCode]++;
      if (letters[iCode] >= 2) return true;
    }
    return false;
  } else if (
    dislocation.length === 2 &&
    s[dislocation[0]] === goal[dislocation[1]] &&
    s[dislocation[1]] === goal[dislocation[0]]
  ) {
    return true;
  } else return false;
};
/**
 * 超慢
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了5.85%的用户
 * 内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了62.44%的用户
 */

/**
 * 官方题解
 */
var buddyStrings = function (s, goal) {
  if (s.length != goal.length) {
    return false;
  }
  // 简化为 数据相等时的情况
  if (s === goal) {
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s[i].charCodeAt() - "a".charCodeAt()]++;
      if (count[s[i].charCodeAt() - "a".charCodeAt()] > 1) {
        return true;
      }
    }
    return false;
  } else {
      //不相等就判断 
      // 多于两个直接返回false
    let first = -1,
      second = -1;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        if (first === -1) first = i;
        else if (second === -1) second = i;
        else return false;
      }
    }
    // 不相等的位置有两个且,两个位置的字符串交叉相等
    return (
      second !== -1 && s[first] === goal[second] && s[second] === goal[first]
    );
  }
};
