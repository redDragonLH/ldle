/**
 * 689. 三个无重叠子数组的最大和
 *
 * 给你一个整数数组 nums 和一个整数 k ，找出三个长度为 k 、互不重叠、且 3 * k 项的和最大的子数组，并返回这三个子数组。
 *
 * 以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 0 开始）。如果有多个结果，返回字典序最小的一个。
 */

/**
 * 
 * 也就是找到乘积最大的连续子数组
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
    
};


/**
 * 题解思路:
 *  先确定一个子数组,再逐步确定第二个与第三个
 * 
 * 获得一个子数组的思路是使用滑动窗口
 * 
 * 滑动窗口: 是数组/字符串问题中常用的抽象概念.窗口通常是指在数组/字符串中由开始和结束索引定义的一系列元素的集合,
 *          即闭区间[i,j].而滑动窗口是指可以将两个边界向某一方向「滑动」的窗口
 *  
 * 滑动窗口获取单个子数组的步骤
 *  1. 创立一个k个窗口的区间,用这个区间包含一个字数组,从0开始,
 *  2. 然后向右一个元素一个元素的「滑动」,
 *  3. 计算这个区间内的乘积,如果比当前保存的最大值大,那就保存最大值与区间,
 *  4. 然后继续滑动
 * 
 * 那这样的话第二个滑动窗口不仅要找出第二大的值,还有规避第一个的区间,第三个要规避前两个的区间
 * 
 * 也可以在一次循环中保存所有滑动窗口的乘积与区间,然后轮询找到最大的且不相交的区间
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSumOfThreeSubarrays = function (nums, k) {
    
};


/**
 * 
 * 前言: 两个无重叠字数组的最大和
 *  使用两个大小微k的滑动窗口.设 sum1 为第一个滑动窗口的元素和,该滑动窗口从[0,k-1]开始;sum2 为第二个滑动窗口的元素和,该滑动窗口从 [k,2k-1]开始
 * 「同时」向右滑动两个窗口,并维护sum1的最大值maxSum1及其对应位置.每次滑动时,计算当前 maxSum1 与sum2之和.统计这一过程中的 maxSum1 + sum2 的最大值(记作 maxSum12) 及其对应位置
 * 
 *  疑问:同时滑动那什么时候单独停下?
 *      两个区间肯定不可能时一直都是挨着的
 * 
 * 官方题解:滑动窗口
 *  使用三个大小为k的滑动窗口.设 sum1为第一个滑动窗口的元素和,该滑动窗口葱[0,k-1]开始;  
 * sum2 为第二个滑动窗口的元素和,该滑动窗口从 [k,2k-1]开始;sum3 为第三个滑动窗口的元素和,该滑动窗口从[2k,3k-1]开始.
 * 
 *  同时向右滑动这三个窗口,维护maxSum12的值及其对应位置.每次滑动时,计算当前maxSum12与sum3之和.统计这一过程中的maxSum12+ sum3的最大值机器对应位置
 */