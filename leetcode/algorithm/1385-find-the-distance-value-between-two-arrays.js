/**
 * 1385. 两个数组间的距离值
 *
 * 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。
 * 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。
 */
/**
 * 如何找到距离最近的元素,双循环肯定是可以,但是效率太低
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let isValid = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }
    if (isValid) count++;
  }
  return count;
};
/**
 * 要元素数目啊,双循环吧~
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了90.91%的用户
 * 内存消耗：54.58 MB, 在所有 JavaScript 提交中击败了95.45%的用户
 */