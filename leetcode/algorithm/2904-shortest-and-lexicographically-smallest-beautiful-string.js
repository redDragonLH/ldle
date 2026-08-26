/**
 * 2904. 最短且字典序最小的美丽子字符串
 *
 * 给你一个二进制字符串 s 和一个正整数 k 。
 * 如果 s 的某个子字符串中 1 的个数恰好等于 k ，则称这个子字符串是一个 美丽子字符串 。
 * 令 len 等于 最短 美丽子字符串的长度。
 * 返回长度等于 len 且字典序 最小 的美丽子字符串。如果 s 中不含美丽子字符串，则返回一个 空 字符串。
 * 对于相同长度的两个字符串 a 和 b ，如果在 a 和 b 出现不同的第一个位置上，a 中该位置上的字符严格大于 b 中的对应字符，则认为字符串 a 字典序 大于 字符串 b 。
 *  * 例如，"abcd" 的字典序大于 "abcc" ，因为两个字符串出现不同的第一个位置对应第四个字符，而 d 大于 c 。
 */

/**
 * 使用滑动窗口获取,
 * 但是字典序最小要以什么判断条件?
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    // 滑动窗口
  let left = 0;
  let right = 0;
  let count = 0; // 当前窗口1的个数
  let minLength = Infinity; // 最短长度
  let result = ""; // 最短且字典序最小的美丽子字符串

  // 终止条件是右指针到达字符串末尾
  while (right < s.length) {
    // 更新当前窗口1的个数
    if (s[right] === "1") {
      count++;
    }
    // 必须等于k,
    while (count === k) {
        // 当前窗口长度
      const currentLength = right - left + 1;
      if (
        currentLength < minLength ||
        (currentLength === minLength && s.substring(left, right + 1) < result) // 字典序比较
      ) {
        minLength = currentLength;
        result = s.substring(left, right + 1);
      }
      // 不管上边处理如何,都要移动左指针,缩小窗口
      // 减少之后跳出循环
      if (s[left] === "1") {
        count--;
      }
      // 移动左指针,缩小当前处理数据的长度,
      left++;
    }
    // 跳出循环后right指针继续移动,扩大窗口 
    right++;
  }

  return result;
};
/**
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了94.12%的用户
 * 内存消耗：55.98 MB, 在所有 JavaScript 提交中击败了82.35%的用户
 */