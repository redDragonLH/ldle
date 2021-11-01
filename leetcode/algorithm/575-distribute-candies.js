/**
 * 575. 分糖果
 * 
 * Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。
 * 
 * 医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。
 * 
 * 给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到糖的最多种类数。
*/
/**
 * 逻辑很简单，种类,然后计算能吃多少
 * 先去重
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let set = new Set(...candyType)
    let eatNum = candyType / 2
    return set.size > eatNum ? eatNum : set.size
};
/**
 *  清晰明了
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了79.11%的用户
 * 内存消耗：50.7 MB, 在所有 JavaScript 提交中击败了68.24%的用户
 */