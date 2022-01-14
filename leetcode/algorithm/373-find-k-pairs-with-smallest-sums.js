/**
 * 373. 查找和最小的K对数字
 *
 * 给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。
 * 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
 * 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。
 */

/**
 * 暴力遍历应该是一定得超时
 *
 * 
 * 二分查找思路: 
 *  利用二分查找找到第k小的数对和为 pairSum.利用滑动窗口即可计算出两个数组中满足数对和小于等于目标值 target 的数对有多少个,
 * 找到最小的target 且满足小于等于它的数对数目刚好大于等于 k 即为目标值 pairSum,然后在数组中找到最小的k个数对满足数对和小于等于pairSum
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  m = nums1.length;
  n = nums2.length;
  /*二分查找第 k 小的数对和的大小*/
  // 数对最小值
  let left = nums1[0] + nums2[0];
  // 数对最大值
  let right = nums1[m - 1] + nums2[n - 1];
  // 第k个最小数对的值,从小到大查么,为啥初始值给最大的
  let pairSum = right;
  // 查找的停止判断
  while (left <= right) {
      // 中位数
    const mid = left + ((right - left) >> 1);
    // cnt 是啥
    let cnt = 0;
    let start = 0;
    let end = n - 1;
    // 循环查找停止逻辑:start 超出右侧最高位,end跌出左侧最低位
    while (start < m && end >= 0) {
        // 这遍历也不少次吧
      if (nums1[start] + nums2[end] > mid) {
        end--;
      } else {
          //为啥小于中位数就cnt加一
        cnt += end + 1;
        start++;
      }
    }
    if (cnt < k) {
      left = mid + 1;
    } else {
      pairSum = mid;
      right = mid - 1;
    }
  }

  const ans = [];
  let pos = n - 1;
  /*找到小于目标值 pairSum 的数对*/
  for (let i = 0; i < m; i++) {
    while (pos >= 0 && nums1[i] + nums2[pos] >= pairSum) {
      pos--;
    }
    for (let j = 0; j <= pos && k > 0; j++, k--) {
      const list = [];
      list.push(nums1[i]);
      list.push(nums2[j]);
      ans.push(list);
    }
  }

  /*找到等于目标值 pairSum 的数对*/
  pos = n - 1;
  for (let i = 0; i < m && k > 0; i++) {
    while (pos >= 0 && nums1[i] + nums2[pos] > pairSum) {
      pos--;
    }
    for (
      let j = i;
      k > 0 && j >= 0 && nums1[j] + nums2[pos] == pairSum;
      j--, k--
    ) {
      const list = [];
      list.push(nums1[i]);
      list.push(nums2[pos]);
      ans.push(list);
    }
  }
  return ans;
};
