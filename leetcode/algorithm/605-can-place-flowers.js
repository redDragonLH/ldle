/**
 * 605. 种花问题
 * 
 * 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 
 * 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），
 * 和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.forEach((e,i)=> {
        if(!e && n){
            if(!flowerbed[i-1] && !flowerbed[i+1]) {
                flowerbed[i]=1;
                n--
            }
        } 
    })
    return !n;
};

/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了75.03%的用户
 * 内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了67.14%的用户
 */

var canPlaceFlowers = function(flowerbed, n) {
    const len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        if(!flowerbed[i] && n){
            if(!flowerbed[i-1] && !flowerbed[i+1]) {
                flowerbed[i]=1;
                n--;i++
            }
        } 
        
    }
    return !n;
};
/**
 * 竟然还更慢，理论上跳过了n个没必要判断的位置
 * 
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了42.53%的用户
 * 内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了79.45%的用户
 */