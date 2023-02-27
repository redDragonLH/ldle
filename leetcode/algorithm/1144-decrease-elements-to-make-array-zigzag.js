/**
 * 1144. 递减元素使数组呈锯齿状
 *
 * 给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。
 *
 * 如果符合下列情况之一，则数组 A 就是 锯齿数组：
 *  * 每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
 *  * 或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
 *
 * 返回将数组 nums 转换为锯齿数组所需的最小操作次数。
 */

/**
 * 只能减少,不能增加,所以从头算就可以,谨慎的话可以算两遍,根据两个条件
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  let len = nums.length;
  let result = 0;
  let parity = 1;
  let next = nums[0];
  for (let i = 1; i < len; i++) {
    if (parity === 1) {
      if (nums[i] < nums[i - 1]) {
        let gap = nums[i - 1] - next + 1;
        result += gap;

        next = nums[i - 1] - nums[i] - 1;
        parity = nums[i] - gap;
      }
    }
  }
};
/**
 * 逻辑就非常复杂了,从奇偶性分到大于小于等于
 */