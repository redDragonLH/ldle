/**
 * 2460. 对数组执行操作
 *
 * 给你一个下标从 0 开始的数组 nums ，数组大小为 n ，且由 非负 整数组成。
 * 你需要对数组执行 n - 1 步操作，其中第 i 步操作（从 0 开始计数）要求对 nums 中第 i 个元素执行下述指令：
 *  * 如果 nums[i] == nums[i + 1] ，则 nums[i] 的值变成原来的 2 倍，nums[i + 1] 的值变成 0 。否则，跳过这步操作。
 *
 * 在执行完 全部 操作后，将所有 0 移动 到数组的 末尾 。
 *  * 例如，数组 [1,0,2,0,0,1] 将所有 0 移动到末尾后变为 [1,2,1,0,0,0] 。
 *
 * 返回结果数组。
 * 注意 操作应当 依次有序 执行，而不是一次性全部执行。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }
  // 缺少移动逻辑
};

/**
 * 官方题解 
 * 改完数据就换吗?不会影响数据处理顺序吗
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  let n = nums.length;
  let j = 0;
  // 应该只遍历n-1,但是都组合到一个循环里面了,只能全遍历
  for (let i = 0; i < n; i++) {
    // 第一步处理流程
    if (i + 1 < n && nums[i] == nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
    // j 在最开始指向 nums 的 0位置,
    // 那这个i不为0的时候交换是什么意思
    // 如果0位置是0那就不动,如果不是0,交换过程中i就等于j,
    // 直到遇到一个0,j 停到元素0所在位置,i继续执行,直到i遇到不为0的元素,交换j的0与i的具体元素
    // 如此能把交换的时间复杂度减少到n,且把0都移到末尾而去不改变非零元素的相对位置
    // 并且没有改变具体算法逻辑的处理顺序,因为i已经超过j了吧,
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
};
