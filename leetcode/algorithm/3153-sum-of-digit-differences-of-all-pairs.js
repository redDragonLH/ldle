/**
 * 3153. 所有数对中数位不同之和
 *
 * 你有一个数组 nums ，它只包含 正 整数，所有正整数的数位长度都 相同 。
 * 两个整数的 数位不同 指的是两个整数 相同 位置上不同数字的数目。
 * 请你返回 nums 中 所有 整数对里，数位不同之和。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  let n = nums.length;
  let ans = 0;
  // 将数组转换为对象，键为数组的索引，值为数组的元素
  let mapping = nums.reduce((acc, cur, index) => {
    acc[cur] = cur.toString().split("");
    return acc;
  }, {});
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = 0; k < mapping[nums[i]].length; k++) {
        ans += mapping[nums[i]][k] === mapping[nums[j]][k] ? 0 : 1;
      }
    }
  }
  return ans;
};
/**
 * 竟然还超时
 */