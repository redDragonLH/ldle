/**
 * 1716. 计算力扣银行的钱
 * Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱。
 * 
 * 最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。
 * 
 * 给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    // 整周
    let flag = parseInt(n / 7);
    // 基础钱数，第一周的
    let basis = 28;
    // 正常的数据（每周一没加一的）
    let result = basis * flag;
    // 零碎日子
    let day = n % 7;

    // 阶乘
    for (let i = 0; i < flag; i++) {
        result += 7 * i;

    }
    // 整周之外的零碎日子
    while (day--) {
        result += day + flag + 1;
    }
    return result;
};
/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了73.75%的用户
 * 内存消耗：38 MB, 在所有 JavaScript 提交中击败了31.25%的用户
 */