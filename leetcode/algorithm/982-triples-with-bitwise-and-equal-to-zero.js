/**
 * 982. 按位与为零的三元组
 *
 * 给你一个整数数组 nums ，返回其中 按位与三元组 的数目。
 * 按位与三元组 是由下标 (i, j, k) 组成的三元组，并满足下述全部条件：
 *  * 0 <= i < nums.length
 *  * 0 <= j < nums.length
 *  * 0 <= k < nums.length
 *  * nums[i] & nums[j] & nums[k] == 0 ，其中 & 表示按位与运算符。
 */

/**
 * 官方题解： 枚举？~~
 *
 * 三重枚举肯定超时
 * 题中限制了长度为2的16次方，那么nums[i] & nums[j]的长度肯定不会超过2的16次方，这样可以先把nums[i] & nums[j]的结果保存到一个2的16次方数组中，
 * 然后就再用 nums[k] 与新数组中的数据对比，可以把O(n^3) 降低到 O(n^2 + 2^16 * n)
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
    // 1左移16位，就是前一个的基础上翻了16翻
  const cnt = new Array(1 << 16).fill(0);
  for (const x of nums) {
    for (const y of nums) {
    // 这个 ++ 语法有意思，但是使用时要注意
      ++cnt[x & y];
    }
  }
  let ans = 0;
  for (const x of nums) {
    for (let mask = 0; mask < 1 << 16; ++mask) {
      if ((x & mask) === 0) {
        ans += cnt[mask];
      }
    }
  }
  return ans;
};
/**
 * 困难题用这种解法~~是不是想说明总有没有好办法的时候~~~
 */