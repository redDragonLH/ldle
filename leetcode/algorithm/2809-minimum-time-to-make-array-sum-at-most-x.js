/**
 * 2809. 使数组和小于等于 x 的最少时间
 * 
 * 给你两个长度相等下标从 0 开始的整数数组 nums1 和 nums2 。每一秒，对于所有下标 0 <= i < nums1.length ，nums1[i] 的值都增加 nums2[i] 。操作 完成后 ，你可以进行如下操作：
 *  * 选择任一满足 0 <= i < nums1.length 的下标 i ，并使 nums1[i] = 0 。
 *  * 同时给你一个整数 x 。
 * 
 * 请你返回使 nums1 中所有元素之和 小于等于 x 所需要的 最少 时间，如果无法实现，那么返回 -1 。
 */

/**
 * 看起来可以模拟,但是找不到最少时间
 * 所有元素之和,小于等于x?模拟?挑最大的?
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function(nums1, nums2, x) {
    let len = nums1.length
    while (len--) {
        for (let i = 0; i < nums1.length; i++) {
            nums1[i]+=nums2[i]
        }
        let max = Math.max(...nums1)
        let index = nums1.findIndex((v,u)=>v===max)
        nums1[index]=0
        let count = nums1.reduce((p,c)=>p+c,0)
        if(count<=x) return nums1.length-len
    }
    return -1
};
/**
 * 失败,估计得动态规划什么吧
 */