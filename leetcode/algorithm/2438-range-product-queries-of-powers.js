/**
 * 2438. 二的幂数组中查询范围内的乘积
 *
 * 给你一个正整数 n ，你需要找到一个下标从 0 开始的数组 powers ，它包含 最少 数目的 2 的幂，且它们的和为 n 。powers 数组是 非递减 顺序的。根据前面描述，构造 powers 数组的方法是唯一的。
 * 同时给你一个下标从 0 开始的二维整数数组 queries ，其中 queries[i] = [lefti, righti] ，其中 queries[i] 表示请你求出满足 lefti <= j <= righti 的所有 powers[j] 的乘积。
 * 请你返回一个数组 answers ，长度与 queries 的长度相同，其中 answers[i]是第 i 个查询的答案。由于查询的结果可能非常大，请你将每个 answers[i] 都对 109 + 7 取余 。
 */
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
    const MOD = 10 ** 9 + 7;

    // 计算 powers 数组
    let powers = [];
    for (let i = 0; n > 0; i++) {
        //  & 运算符在两个操作数对应的二进位都为 1 时，该位的结果值才为 1
        // 数字的二进制位最后一位是1 的话，说明它是奇数
        if (n & 1) {
            // 如果 n 的二进制位为 1，则将 2 的 i 次幂添加到 powers 数组
            powers.push(BigInt(2 ** i));
        }
        // 右移操作符将 n 的二进制位向右移动一位，相当于除以 2
        // 例如，n = 13 (二进制为 1101)，右移后变为 6 (二进制为 110)，再右移一次变为 3 (二进制为 11)
        // 这样可以逐步处理 n 的每一位，直到 n 变为 0
        // 这一步是为了提取 n 的二进制表示中的每一位
        n >>= 1;
    }

    // 计算每个查询的乘积
    // 暴力法：对于每个查询，计算对应范围内的乘积
    let results = [];
    for (let [left, right] of queries) {
        let product = BigInt(1);
        for (let i = left; i <= right; i++) {
            product = (product * powers[i]) % BigInt(MOD);
        }
        results.push(Number(product));
    }

    return results;
};  
/**
 * 执行用时 : 111 ms, 在所有 JavaScript 提交中击败了7.14%的用户
 * 内存消耗 : 87.54 MB, 在所有 JavaScript 提交中击败了82.46%的用户
 */