/**
 * 2048. 下一个更大的数值平衡数
 *
 * 如果整数  x 满足：对于每个数位 d ，这个数位 恰好 在 x 中出现 d 次。那么整数 x 就是一个 数值平衡数 。
 *
 * 给你一个整数 n ，请你返回 严格大于 n 的 最小数值平衡数 。
 */

/**
 * 大概是理解了，也没必要考虑太多，只要能匹配到规则得了
 * 
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  // 1224444 是题目给出的最大值
  for (let i = n + 1; i <= 1224444; i++) {
    if (isBalance(i)) {
      return i;
    }
  }
};

/**
 * 原理也是硬遍历
 * @param {*} x 
 * @returns 
 */
function isBalance(x) {
    // 创建一个长度为10的数组，用于统计每个数字出现的次数
    const count = new Array(10).fill(0);
    // 遍历x的每一位数字
    while (x > 0) {
        // 对应数字出现次数加1
        count[x % 10]++;
        // 去掉最低位
        x = Math.floor(x / 10);
    }
    // 检查每个数字d
    for (let d = 0; d < 10; d++) {
        // 如果d出现过，并且出现次数不等于d，则不是数值平衡数
        // 大于零就把数组中的不应该出现的0给过滤掉
        if (count[d] > 0 && count[d] != d) {
            return false;
        }
    }
    // 所有数字都满足条件，返回true
    return true;
}
