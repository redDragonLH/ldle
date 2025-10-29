/**
 * 3370. 仅含置位位的最小整数
 *
 * 给你一个正整数 n。
 * 返回 大于等于 n 且二进制表示仅包含 置位 位的 最小 整数 x 。
 * 置位 位指的是二进制表示中值为 1 的位。
 */

/**
 * 枚举仅包含置位位的整数： 1，3，7，15。我们可以发现这个数列的规律，是前一个数乘以 2 再加 1。
 * 首先我们初始化 x=1，每次循环把当前 x=x×2+1，循环一直进行，直到 x 大于等于 n，返回结果。
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
  let x = 1;
  while (x < n) {
    x = x * 2 + 1;
  }
  return x;
};

/**
 * @param {number} n
 * @return {number}
 */
function smallestNumber(n) {
    // 找到 n 的二进制长度
    let length = 0;
    let temp = n;
    while (temp > 0) {
        length++;
        // 右移 1 位，相当于除以 2，去掉最低位。（二进制）
        temp = temp >> 1;
    }
    
    // 候选答案：length 个 1
    // 左移，将所有位置位
    let candidate = (1 << length) - 1;
    
    // 如果候选数小于 n，需要 length+1 个 1
    if (candidate < n) {
        return (1 << (length + 1)) - 1;
    }
    
    return candidate;
}
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :55.93 MB, 在所有 JavaScript 提交中击败了30.00%的用户
 */