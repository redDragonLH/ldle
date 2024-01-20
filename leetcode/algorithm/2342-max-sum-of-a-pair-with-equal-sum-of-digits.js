/**
 * 2342. 数位和相等数对的最大和
 *
 * 给你一个下标从 0 开始的数组 nums ，数组中的元素都是 正 整数。请你选出两个下标 i 和 j（i != j），且 nums[i] 的数位和 与  nums[j] 的数位和相等。
 *
 * 请你找出所有满足条件的下标 i 和 j ，找出并返回 nums[i] + nums[j] 可以得到的 最大值 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const map = new Map();
  let ans = -1;
  for (const num of nums) {
    const sum = num
      .toString()
      .split("")
      .reduce((a, b) => +a + +b, 0);
    if (map.has(sum)) {
      ans = Math.max(ans, num + map.get(sum));
      map.set(sum, Math.max(map.get(sum), num)); // 更新更大的
    } else {
      map.set(sum, num);
    }
  }
  return ans;
};
