/**
 * 2391. 收集垃圾的最少总时间
 * 
 * 给你一个下标从 0 开始的字符串数组 garbage ，其中 garbage[i] 表示第 i 个房子的垃圾集合。garbage[i] 只包含字符 'M' ，'P' 和 'G' ，但可能包含多个相同字符，每个字符分别表示一单位的金属、纸和玻璃。垃圾车收拾 一 单位的任何一种垃圾都需要花费 1 分钟。
 * 同时给你一个下标从 0 开始的整数数组 travel ，其中 travel[i] 是垃圾车从房子 i 行驶到房子 i + 1 需要的分钟数。
 * 城市里总共有三辆垃圾车，分别收拾三种垃圾。每辆垃圾车都从房子 0 出发，按顺序 到达每一栋房子。但它们 不是必须 到达所有的房子。
 * 任何时刻只有 一辆 垃圾车处在使用状态。当一辆垃圾车在行驶或者收拾垃圾的时候，另外两辆车 不能 做任何事情。
 * 请你返回收拾完所有垃圾需要花费的 最少 总分钟数。
 */

/**
 * 都是要一分钟,那其实三辆车没差别,就是不能装其他垃圾有点迷惑,但是
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    // 
    const distance = new Map();
    let res = 0, curDis = 0;
    for (let i = 0; i < garbage.length; i++) {
        // 先加上垃圾收集的时间
        res += garbage[i].length;
        if (i > 0) {
            // 这是走了的距离,
            curDis += travel[i - 1];
        }
        // 为每种垃圾更新拾取距离
        for (const c of garbage[i]) {
            // 这种方式把旧的距离清理了,直接就是最远距离
            distance.set(c, curDis);
        }
    }
    for (const [k, v] of distance) {
        res += v;
    }
    return res;
};
