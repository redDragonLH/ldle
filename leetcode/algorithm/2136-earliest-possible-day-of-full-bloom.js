/**
 * 2136. 全部开花的最早一天
 * 
 * 你有 n 枚花的种子。每枚种子必须先种下，才能开始生长、开花。播种需要时间，种子的生长也是如此。给你两个下标从 0 开始的整数数组 plantTime 和 growTime ，每个数组的长度都是 n ：
 *  * plantTime[i] 是 播种 第 i 枚种子所需的 完整天数 。每天，你只能为播种某一枚种子而劳作。无须 连续几天都在种同一枚种子，但是种子播种必须在你工作的天数达到 plantTime[i] 之后才算完成。
 *  * growTime[i] 是第 i 枚种子完全种下后生长所需的 完整天数 。在它生长的最后一天 之后 ，将会开花并且永远 绽放 。
 * 
 * 从第 0 开始，你可以按 任意 顺序播种种子。
 * 返回所有种子都开花的 最早 一天是第几天。
 */

/**
 * 按照开花整体时间排序,从大到小
 * 种的天数也要单独计算
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    let all = []
    for (let i = 0; i < plantTime.length; i++) {
        all[i]= plantTime[i]+ growTime[i]
    }
    all.sort((a,b)=>b-a)
    let result =0;
    let index = 0;
    for (const item of all) {
        console.log(item,index+item+1,result);
        result = Math.max(index+item+1,result)
        index++ 
    }
    return result
};

/**
 * 第三方题解
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
    let ans = 0, days = 0;
    for (const [p, g] of _.zip(plantTime, growTime).sort((a, b) => b[1] - a[1])) {
        days += p; // 累加播种天数
        ans = Math.max(ans, days + g); // 再加上生长天数，就是这个种子的开花时间
    }
    return ans;
};