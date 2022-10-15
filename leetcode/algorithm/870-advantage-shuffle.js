/**
 * 870. 优势洗牌
 *
 * 给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。
 *
 * 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  // 比nums[i]大一点么,但是nums2 是未排序的,要不要一起排序~~
  // 不对,没有看nums2,说明nums2是不能动的
  // 那 大一点 这个概念就有点坑
  // 还要保证已处理数据不来捣乱
  let len = nums1.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (nums2[i] < nums1[j] && nums2[i] > nums1[j - 1]) {
        switchItem(nums1, i, j);
        nums2.splice(j, 1);
      }
    }
  }
  return nums1;
};
const switchItem = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var advantageCount = function (nums1, nums2) {
  const n = nums1.length;
  const idx1 = new Array(n).fill(0);
  const idx2 = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    idx1[i] = i;
    idx2[i] = i;
  }
  // 这个排序~
  idx1.sort((i, j) => nums1[i] - nums1[j]);
  idx2.sort((i, j) => nums2[i] - nums2[j]);

  const ans = new Array(n).fill(0);
  let left = 0,
    right = n - 1;
  for (let i = 0; i < n; ++i) {
    if (nums1[idx1[i]] > nums2[idx2[left]]) {
      ans[idx2[left]] = nums1[idx1[i]];
      ++left;
    } else {
      ans[idx2[right]] = nums1[idx1[i]];
      --right;
    }
  }
  return ans;
};
