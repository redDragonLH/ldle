/**
 * 268. 丢失的数字
 * 
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 */
/**
 * 基础想法就是使用给出的隐含数据 数组元素的数量来进行判断，对当前数据进行相加，然后用0-length的下标相加的数量减掉，剩余的就是丢失的数字
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let result = 0
    nums.forEach((e, i) => {
        // 如果把+=与-=调换位置就可以不用abs（），但是调换位置之后效率减小很多
        result += e;
        result -= (i + 1);
    })
    return Math.abs(result)
};
/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了95.00%的用户
 * 内存消耗：40.4 MB, 在所有 JavaScript 提交中击败了27.85%的用户
 */

/**
 * 因为有隐含的元素数量这一数据，所以也可以使用异或元素与i,剩余的就是缺失的元素
 * 
 * 异或：二进制位置相同的数据为false/0,不同的数据为true/1
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let len = nums.length;
    let result = 0;
    for (let i = 0; i <= len; i++) {
        result ^= i;
        result ^= (nums[i] || 0);

    }
    return result;
};
/**
 * 虽然使用的原理非常基础与深奥，但是效率并不是很高
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了66.62%的用户
 * 内存消耗：40.1 MB, 在所有 JavaScript 提交中击败了70.15%的用户
 */