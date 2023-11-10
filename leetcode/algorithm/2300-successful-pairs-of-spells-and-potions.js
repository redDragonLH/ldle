/**
 * 2300. 咒语和药水的成功对数
 *
 * 给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，其中 spells[i] 表示第 i 个咒语的能量强度，potions[j] 表示第 j 瓶药水的能量强度。
 * 同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，那么它们视为一对 成功 的组合。
 * 请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。
 */

/**
 * 双重循环肯定是超时了
 * 
 * spells 顺序不能动,但是potions 顺序应该是可以动的
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    let result = new Array(spells.length).fill(0)
    potions.sort((a,b)=>a-b)
    console.log(potions)
    for (let i = 0; i < spells.length; i++) {
        // 二分逻辑怎么写
        // 找到居中元素,然后判断乘数结果与success比较,小于则往右挪,大于则往左挪
        // 怎么判断结束?左右元素与当前元素结果不负,
        // 注意边界条件
        let left = 0;
        let right = potions.length
        let mid = parseInt(potions/2)
        while(true){
            if(potions[mid]*2 < success){

            }else {
                
            }
        }

    }
};
