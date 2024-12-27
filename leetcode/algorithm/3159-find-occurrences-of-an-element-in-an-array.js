/**
 * 3159. 查询数组中元素的出现位置
 * 
 * 给你一个整数数组 nums ，一个整数数组 queries 和一个整数 x 。
 * 对于每个查询 queries[i] ，你需要找到 nums 中第 queries[i] 个 x 的位置，并返回它的下标。如果数组中 x 的出现次数少于 queries[i] ，该查询的答案为 -1 。
 * 请你返回一个整数数组 answer ，包含所有查询的答案。
 */
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    let res = []
    for(let i=0;i<queries.length;i++){
        let count = 0
        for(let j=0;j<nums.length;j++){
            if(nums[j] === x){
                count++
            }
            if(count === queries[i]){
                res.push(j)
                break
            }
        }
        if(count < queries[i]){
            res.push(-1)
        }
    }
    return res
};