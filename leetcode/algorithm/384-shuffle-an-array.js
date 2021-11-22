/**
 * 384. 打乱数组
 *
 * 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。
 *
 * 实现 Solution class:
 *  * Solution(int[] nums) 使用整数数组 nums 初始化对象
 *  * int[] reset() 重设数组到它的初始状态并返回
 *  * int[] shuffle() 返回数组随机打乱后的结果
 */
/**
 *
 * 官方题解: 洗牌算法
 *
 * 思路: 把数据放到一个数组 waiting 里面,每次随机移除一个元素,把移除的元素放到结果数组里,
 *      在移除元素时,将这个元素与数组的最后一个元素交换,然后移除交换后数组的最后1个元素,这样只需要O(1)的时间复杂度即可完成移除
 *      第k个元素的操作,此时,被移除的交换后数组的最后1个元素即为根据随机下标获取的元素
 *       再次基础上,也可以不移除最后1个元素,而直接将其作为乱序后的结果,并更新待乱序数组的长度,从而实现原地乱序
 * 
 * 算法:
 *      * 设待原地乱序的数组 nums
 *      * 循环n次,在第i次循环中(0<=i<n)
 *          * 将[i,n) 中随机抽取一个下标j;
 *          * 将第i个元素与第j个元素交换
 *  其中数组种的 nums[i...n-1] 的部分为待乱序的数组,其长度为n-i;nums[0...i-1]的部分为乱序后的数据,长度为i
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.originNums = nums;
  this.nums = nums.map((e) => e);
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.originNums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    // 从头循环数组
  for (let i = 0; i < this.nums.length; ++i) {
      // j 是从i 位置起始的
    const j = Math.floor(Math.random() * (this.nums.length - i)) + i;
    // i j交换数据,i的数据就定了,不再改动
    // j位置的数据可能还会被交换
    const temp = this.nums[i];
    this.nums[i] = this.nums[j];
    this.nums[j] = temp;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

/**
 * Knuth-Shuffle 洗牌算法逻辑
 * 公平:每个元素的所在的位置的概率应该是一样的
 * 随机: 概率,
 * 
 * 从后往前遍历,从1-i的元素之内随机选择一个元素,然后用这个元素与最后一个交换
 * 交换完成后遍历位置前移,上一个位置元素不再处理,然后从1——i-1元素之中随机选择一个元素,与i-1交换
 * 直到最后一个元素,这样得倒的结果就是公平且随机
 */