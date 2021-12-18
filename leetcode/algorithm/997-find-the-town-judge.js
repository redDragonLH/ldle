/**
 * 997. 找到小镇的法官
 * 
 * 在一个小镇里，按从 1 到 n 为 n 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官。
 * 
 * 如果小镇的法官真的存在，那么：
 *  * 小镇的法官不相信任何人。
 *  * 每个人（除了小镇法官外）都信任小镇的法官。
 *  * 只有一个人同时满足条件 1 和条件 2 。
 * 
 * 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示编号为 a 的人信任编号为 b 的人。
 * 如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的编号。否则，返回 -1。
 */

/**
 * 由题意可知这个人被信任的数量是 n-1,他信任的数量是0,
 * 
 * 那么可以用一个二维数组来表示，数组的索引表示这个人，内部的第一个位置表示他信任的人数量（有一个应该就可以跳过这个人），第二
 * 个位置表示信任他的人的数量，等于n-1
 * 
 * 注：
 * 但是小心 trust里面有重复数据
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let trustConnection = new Array(n)
    for (let i = 1; i <= n; i++) {
        trustConnection[i] = [0, 0];
    }

    let trustLen = trust.length;
    for (let i = 0; i < trustLen; i++) {
        // 统计两个人的关系，所以分为两步
        trustConnection[trust[i][0]][0]++;
        trustConnection[trust[i][1]][1]++;
    }
    const notJudge = n - 1
    for (let i = 1; i <= n; i++) {
        if (trustConnection[i][0] === 0 && trustConnection[i][1] === notJudge) return i;

    }
    return -1;
};
/**
 * 还好没有重复数据，如果有重复数据还得保存具体的信任人
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了98.34%的用户
 * 内存消耗：45.5 MB, 在所有 JavaScript 提交中击败了54.64%的用户
 */

/**
 * 官方考察的是图
 * 
 */