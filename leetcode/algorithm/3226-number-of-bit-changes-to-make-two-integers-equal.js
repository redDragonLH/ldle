/**
 * 3226. 使两个整数相等的位更改次数
 * 
 * 给你两个正整数 n 和 k。
 * 你可以选择 n 的 二进制表示 中任意一个值为 1 的位，并将其改为 0。
 * 返回使得 n 等于 k 所需要的更改次数。如果无法实现，返回 -1。
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    if ((n & k) == k) {
        return bitCount(n ^ k);
    } else {
        return -1;
    }
};

var bitCount = function(x) {
    x = (x & 0x55555555) + ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x & 0x0F0F0F0F) + ((x >> 4) & 0x0F0F0F0F);
    x = (x & 0x00FF00FF) + ((x >> 8) & 0x00FF00FF);
    x = (x & 0x0000FFFF) + ((x >> 16) & 0x0000FFFF);
    return x;
}