/**
 * 553. 最优除法
 * 给定一组正整数，相邻的整数之间将会进行浮点除法操作。例如， [2,3,4] -> 2 / 3 / 4 。
 * 
 * 但是，你可以在任意位置添加任意数目的括号，来改变算数的优先级。你需要找出怎么添加括号，才能得到最大的结果，并且返回相应的字符串格式的表达式。你的表达式不应该含有冗余的括号。
 */
/**
 * x / (y / z) = x * z /y
 * @param {number[]} nums
 * @return {string}
 */
 var optimalDivision = function (nums) {
    let len = nums.length
    if(len ===1) return nums[0].toString();
    if(len ===2 )return nums.join('/')
    let result = []
    for (let i = 0; i < len; i++) {
        result.push(nums[i],'/')
        if(i===0){
            result.push('(')
        }
    }
    result.pop()
    result.push(')')
    return result.join('')
};