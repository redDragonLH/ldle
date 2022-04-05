/**
 * 762. 二进制表示中质数个计算置位
 * 
 * 给你两个整数 left 和 right ，在闭区间 [left, right] 范围内，统计并返回 计算置位位数为质数 的整数个数。
 * 
 * 计算置位位数 就是二进制表示中 1 的个数。
 * 
 * 例如， 21 的二进制表示 10101 有 3 个计算置位。
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
    let ans = 0;
    for (let x = left; x <= right; ++x) {
        if (isPrime(bitCount(x))) {
            ++ans;
        }
    }
    return ans;
};

const isPrime = (x) => {
    if (x < 2) {
        return false;
    }
    for (let i = 2; i * i <= x; ++i) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

const bitCount = (x) => {
    return x.toString(2).split('0').join('').length;
}