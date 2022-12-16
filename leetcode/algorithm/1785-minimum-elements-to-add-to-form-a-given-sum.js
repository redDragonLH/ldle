/**
 * 1785. 构成特定和需要添加的最少元素
 *
 * 给你一个整数数组 nums ，和两个整数 limit 与 goal 。数组 nums 有一条重要属性：abs(nums[i]) <= limit 。
 *
 * 返回使数组元素总和等于 goal 所需要向数组中添加的 最少元素数量 ，添加元素 不应改变 数组中 abs(nums[i]) <= limit 这一属性。
 *
 * 注意，如果 x >= 0 ，那么 abs(x) 等于 x ；否则，等于 -x 。
 */

/**
 * 逻辑较为简单吧~~为啥是中等难度
 * 1. 算出当前总和,
 * 2. 判断当前缺少或多出多少
 * 3. 用limit 除+余,得出数量
 * 
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  let sum = nums.reduce((p, c) => p + c, 0);
  let gap = Math.abs(goal - sum);
  limit = Math.abs(limit);

  return Math.floor(gap / limit) + (gap % limit ? 1 : 0);
};
/**
 * 正负号并不影响逻辑计算的流程,把握主要问题 差值,
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了72.50%的用户
 * 内存消耗：51.8 MB, 在所有 JavaScript 提交中击败了55%的用户
 */