/**
 * 507. 完美数
 * 
 * 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。
 * 
 * 给定一个 整数 n， 如果是完美数，返回 true，否则返回 false
 */
/**
 * 因子：一个数可以整除另一个数，不会有余数，那么这个数就是另一个数的因子，基本总是成对出现
 * 
 * 先要得到所有的正因子才行，也不是不可以~~从1除回去呗
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if(num<2)return false;
    let factorSet = new Set();
    factorSet.add(1)
    let mid = num/2
   for (let i = 2; i < mid; i++) {
        if(!(num%i)){
            factorSet.add(i)
            factorSet.add(num/i)
        }
   }
   console.log(factorSet);
   let result = 0;
   for (const item of factorSet.values()) {
    result+=item
   }
   return result===num;
};
/**
 * 执行用时：1140 ms, 在所有 JavaScript 提交中击败了45.25%的用户
 * 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了7.69%的用户
 */