/**
 * 611. 有效三角形的个数
 *
 * 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
 */

/**
 * 官方题解: 排序 + 二分
 * 设三条边为a,b,c
 *  三角形的三条边任意一条边必须小于其他两条边之和,
 *  那么可以将数组进行升序排序,随后使用二重循环枚举a和b,设 a=nums[i],b = nums[j],为了防止重复统计答案,需要保证 i < j,剩余的边c需要满足c< nums[i] + nums[j],
 * 可以[j+1,n-1] 的下标范围内使用二分查找(n是数组 nums 的长度),找出最大的满足 nums[k] < nums[i] + nums[j] 的下标 k,这样一来,在[j+1,k] 范围内的下标都可作为边c的下标,
 * 将该范围的长度 k - j 累加入答案
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let left = j + 1,
        right = n - 1,
        k = j;
      // nums[k] < nums[i] + nums[j] 的最大的k的下标
      // 使用二分法查找
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[i] + nums[j]) {
          k = mid;
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      ans += k - j;
    }
  }
  return ans;
};
