/**
 * 1053. 交换一次的先前排列
 *
 * 给你一个正整数数组 arr（可能存在重复的元素），请你返回可在 一次交换（交换两数字 arr[i] 和 arr[j] 的位置）后得到的、按字典序排列小于 arr 的最大排列。
 *
 * 如果无法这么操作，就请返回原数组。
 */

/**
 * 把数组看成一个数字,换的位数越小越好
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
    // 但是这逻辑不能保证最小,因为位最小才行
    // 第2,3位交换肯定比 第1,4位交换的结果小,
    // 双轮询没有达到这个效果

    // 可以加缓存
    let len = arr.length
    let jIndex = 0;
    let iIndex = 0;
    for (let i = len-1; i >= 0; i--) {
        for (let j = i-1; j >=0; j--) {
            if(arr[j]>arr[i]){
                if(jIndex<j){
                    jIndex = j;
                    iIndex = i
                }
            }
        }
    }
    if(iIndex !== 0&& jIndex!==0){
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr
};
/**
 * 解决不了逻辑边界问题
 */