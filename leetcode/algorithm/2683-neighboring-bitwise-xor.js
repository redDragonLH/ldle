/**
 * 2683. 相邻值的按位异或
 *
 * 下标从 0 开始、长度为 n 的数组 derived 是由同样长度为 n 的原始 二进制数组 original 通过计算相邻值的 按位异或（⊕）派生而来。
 * 特别地，对于范围 [0, n - 1] 内的每个下标 i ：
 *  * 如果 i = n - 1 ，那么 derived[i] = original[i] ⊕ original[0]
 *  * 否则 derived[i] = original[i] ⊕ original[i + 1]
 * 给你一个数组 derived ，请判断是否存在一个能够派生得到 derived 的 有效原始二进制数组 original 。
 * 如果存在满足要求的原始二进制数组，返回 true ；否则，返回 false 。
 *  * 二进制数组是仅由 0 和 1 组成的数组。
 */
/**
 * @param {number[]} derived
 * @return {boolean}
 */
/**
 * 判断是否存在一个有效的原始二进制数组 original，使得 derived 是 original 相邻元素异或得到的数组
 * 
 * 由于 derived[i] = original[i] ^ original[(i+1)%n]，对所有 derived[i] 异或起来，相当于 original[0] ^ original[1] ^ ... ^ original[n-1] ^ original[0] ^ original[1] ^ ... ^ original[n-1]，每个 original 出现两次，结果为 0
 * 所以 derived 所有元素异或结果为 0 时，一定存在原始数组 original
 */
var doesValidArrayExist = function (derived) {
    // reduce 累加所有 derived 元素的异或值，判断是否为 0
    return derived.reduce((xor, x) => xor ^ x, 0) === 0;
};
/**
 * 执行用时：15 ms, 在所有 JavaScript 提交中击败了42.86%的用户
 * 内存消耗：69.50 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */
