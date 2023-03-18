/**
 * 1616. 分割两个字符串得到回文串
 *
 * 给你两个字符串 a 和 b ，它们长度相同。请你选择一个下标，将两个字符串都在 相同的下标 分割开。由 a 可以得到两个字符串： aprefix 和 asuffix ，满足 a = aprefix + asuffix ，同理，由 b 可以得到两个字符串 bprefix 和 bsuffix ，满足 b = bprefix + bsuffix 。请你判断 aprefix + bsuffix 或者 bprefix + asuffix 能否构成回文串。
 *
 * 当你将一个字符串 s 分割成 sprefix 和 ssuffix 时， ssuffix 或者 sprefix 可以为空。比方说， s = "abc" 那么 "" + "abc" ， "a" + "bc" ， "ab" + "c" 和 "abc" + "" 都是合法分割。
 *
 * 如果 能构成回文字符串 ，那么请返回 true，否则返回 false 。
 *
 * 注意， x + y 表示连接字符串 x 和 y 。
 */

/**
 * 双指针，也就是遍历把，不过优化了一些，性能损耗较小
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  return checkConcatenation(a, b) || checkConcatenation(b, a);
};

const checkConcatenation = (a, b) => {
  const n = a.length;
  let left = 0,
    right = n - 1;
    // 从a的开头和b的结尾遍历找到不相等的地方
  while (left < right && a[left] === b[right]) {
    left++;
    right--;
  }
    // 如果发现这个位置已经超过了中位线可以证明能组成回文串
    // 如果没有超过一半说明两个字符的一半相加不能组成回文串
  if (left >= right) {
    return true;
  }
  // 这里就演变成了查找单个字符内的回文串
  return (
    checkSelfPalindrome(a, left, right) || checkSelfPalindrome(b, left, right)
  );
};

const checkSelfPalindrome = (a, left, right) => {
  while (left < right && a[left] === a[right]) {
    left++;
    right--;
  }
  return left >= right;
};
