/**
 * 面试题 01.09. 字符串轮转
 *
 * 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
 */
/**
 * 思路简单,写起来比较复杂
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) return false;

  // 找到一个线头,然后遍历
  let len = s1.length;
  if (!len) return true;
  // 查找位置比较复杂,等位置查出来都好了,那就得两重循环
  for (let s2if = 0; s2if < len; s2if++) {
    let i = 0;
    let s2i = s2if;
    // 比对初始元素
    if (s1[i] === s2[s2i]) {
      while (i < len) {
        if (s2i >= len) {
          s2i = 0;
        }
        if (s1[i] !== s2[s2i]) {
          break;
        }
        if (i === len - 1) return true;
        i++;
        s2i++;
      }
    }
  }

  return false;
};
