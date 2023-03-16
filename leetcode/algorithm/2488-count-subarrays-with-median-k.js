/**
 * 2488. 统计中位数为 K 的子数组
 *
 * 给你一个长度为 n 的数组 nums ，该数组由从 1 到 n 的 不同 整数组成。另给你一个正整数 k 。
 *
 * 统计并返回 nums 中的 中位数 等于 k 的非空子数组的数目。
 *
 * 注意：
 *  * 数组的中位数是按 递增 顺序排列后位于 中间 的那个元素，如果数组长度为偶数，则中位数是位于中间靠 左 的那个元素。
 *  * 例如，[2,3,1,4] 的中位数是 2 ，[8,4,3,5,1] 的中位数是 4 。
 *  * 子数组是数组中的一个连续部分。
 */
/**
 * 前缀和
 *  前缀和的高级应用么?还是组合应用
 *
 * 解释:
 *      由于数组 nums的长度是n,数组由从1到n的不同整数组成,因此数组中的元素各不相同,满足 1 <= k <= n的正整数k在数组中恰好出现一次
 *
 *      用 kIndex 表示正整数 k在数组 nums 中的下标.根据中位数的定义,中位数等于 k 的非空子数组应满足以下条件
 *          * 子数组的开始下标小于等于 kIndex 且结束下标大于等于 kIndex
 *          * 子数组中的大于k的元素个数与小于 k 的元素个数之差为 0 或 1
 *      为了计算每个子数组中的大于 k 的元素个数与小于 k 的元素个数之差,需要将原始数组做转换,将大于 k 的元素转换成1,小于 k 的元素转换成 -1,
 * 等于k 的元素转换成0,转换后的数组中,每个子元素的元素和为对应的原始子数组中的大于k的元素个数与小于 k 的元素个数之差
 *
 *      为了在转换后的数组中寻找符合要求的子数组,可以计算转换后的数组的前缀和,根据前缀和寻找符合要求的子数组.规定空前缀的前缀和是0,且对应下标 -1.
 * 如果存在下标 left 和right 满足 -1 <= left < kIndex <= right < n 且下标 right 处的前缀和与下标 left 处的前缀和之差为0或者1,则等价于
 * 下标范围 [left+1,right]包含下标 kIndex 且该下标范围的转换后的子数组的元素和为0或1,对应该下标范围的原始子数组的中位数等于k
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  let kIndex = -1;
  // 找到k元素位置,相等
  // 注意: 也只有一个k存在
  for (let i = 0; i < n; i++) {
    if (nums[i] === k) {
      kIndex = i;
      break;
    }
  }
  let ans = 0;
  // 保存前缀和的元素,看来也不太在意顺序
  const counts = new Map();
  counts.set(0, 1);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += sign(nums[i] - k);
    // 元素在k左边
    if (i < kIndex) {
        // 直接塞
      counts.set(sum, (counts.get(sum) || 0) + 1);
    } else {
        //在右边之后就要查找中位数了
        // 右侧之后就不再set,只是查找.这样就保证所查找的数组肯定是从kIndex 分成两边,不会污染的
        // 而前缀和的性质保证都是从 kIndex 向两侧延伸的
        // 好像不能保证~~ 但是实际上是保证了,那么有什么我不知道的性质么
      const prev0 = counts.get(sum) || 0;
      const prev1 = counts.get(sum - 1) || 0;
      ans += prev0 + prev1;
    }
  }
  return ans;
};
/**
 * 转换为 信号
 * @param {*} num 
 * @returns 
 */
const sign = (num) => {
  if (num === 0) {
    return 0;
  }
  return num > 0 ? 1 : -1;
};
/**
 * 总结
 *  问题转换为前缀和差值
 */