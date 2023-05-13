/**
 * 2441. 与对应负数同时存在的最大正整数
 *
 * 给你一个 不包含 任何零的整数数组 nums ，找出自身与对应的负数都在数组中存在的最大正整数 k 。
 *
 * 返回正整数 k ，如果不存在这样的整数，返回 -1 。
 */
/**
 * hash 表就可以了，转正数判相等最简单
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let mapping = new Map();
    let result = -1;
    for (const num of nums) {
        let positiveNum = Math.abs(num);
        if(mapping.has(positiveNum)){
            if(!(mapping.get(positiveNum) + num)){
                result = Math.max(result,positiveNum)
            }
        }else {
            mapping.set(positiveNum,num)
        }
      
    }
    return result
};
/**
 * 如果用Set,有两个一样的负数就完了
 * 
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了84.52%的用户
 * 内存消耗：44.4 MB, 在所有 JavaScript 提交中击败了27.38%的用户
 */