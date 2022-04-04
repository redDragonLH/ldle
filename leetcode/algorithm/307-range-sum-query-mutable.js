/**
 * 307. 区域和检索 - 数组可修改
 * 
 * 给你一个数组 nums ，请你完成两类查询。
 *  * 其中一类查询要求 更新 数组 nums 下标对应的值
 *  * 另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 ，其中 left <= right
 * 
 * 实现 NumArray 类：
 *  * NumArray(int[] nums) 用整数数组 nums 初始化对象
 *  * void update(int index, int val) 将 nums[index] 的值 更新 为 val
 *  * int sumRange(int left, int right) 返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 （即，nums[left] + nums[left + 1], ..., nums[right]）
**/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    this.numsLen = nums.length;
    this.prefixSum = [];

    this.calPrefixSum(0, this.numsLen - 1);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.nums[index] = val;
    this.calPrefixSum(index, this.numsLen - 1);

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSum[right] - (this.prefixSum[left - 1] || 0)
};
NumArray.prototype.calPrefixSum = function (left, right) {
    for (let i = left; i <= right; i++) {
        this.prefixSum[i] = (this.prefixSum[i - 1] || 0) + this.nums[i]
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */