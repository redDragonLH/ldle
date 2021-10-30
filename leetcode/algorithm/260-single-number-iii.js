/**
 * 260. 只出现一次的数字 III
 * 
 * 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 
 * 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
 */

/**
 * 如果是用Map结构和两次遍历,那这就是个简单题
 * 
 * 但是如果使用异或来做就是困难题，因为不会
 * 不过给了些思路，还是先异或所有数字，然后最后的得到的值就是两个数字的结合体~~
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let xorsum = 0;

    for (const num of nums) {
        xorsum ^= num;
    }
    let type1 = 0, type2 = 0;
    const lsb = xorsum & (-xorsum);
    for (const num of nums) {
        if (num & lsb) {
            type1 ^= num;
        } else {
            type2 ^= num;
        }
    }
    return [type1, type2];
};
