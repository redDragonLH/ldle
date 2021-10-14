/**
 * 剑指 Offer II 069. 山峰数组的顶部
 *
 * 符合下列属性的数组 arr 称为 山峰数组（山脉数组） ：
 *  * arr.length >= 3
 *  * 存在 i（0 < i < arr.length - 1）使得：
 *  *  * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 *  *  * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 *
 * 给定由整数组成的山峰数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i ，即山峰顶部。
 */

/**
 * 二分会不会快一点,用二分法查找两边中点两边的数字,中点最大则返回中点,其他边最大则二分这边
 * 不过二分得是数据量够大才能达到理论效率
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  arr[-1] = Number.MIN_SAFE_INTEGER;
  arr[arr.length] = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) return i;
  }
};
/**
 * 需要对数组原始数据进行修改,配置边界,也就在js这种假数组中才可以这样做,其他语言要在判断条件里面处理.可能还是二分才可以免除这个问题
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了73.20%的用户
 * 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了5.23%的用户
 */