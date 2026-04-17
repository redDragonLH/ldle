/**
 * 3783. 整数的镜像距离
 * 给你一个整数 n。
 * 定义它的 镜像距离 为：abs(n - reverse(n))​​​​​​​，其中 reverse(n) 表示将 n 的数字反转后形成的整数。
 * 返回表示 n 的镜像距离的整数。
 * 其中，abs(x) 表示 x 的绝对值。
 */
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const reverseNum = (x) => {
    let y = 0;
    while (x > 0) {
      y = y * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    return y;
  };
  return Math.abs(n- reverseNum(n))
};
/**
 * 执行用时 : 0ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :56.02 MB, 在所有 JavaScript 提交中击败了61.11%的用户
 */