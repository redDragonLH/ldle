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
for (const [key,item] of nums2) {
    console.log(key,item);
}
  return nums1
};
const switchItem = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
