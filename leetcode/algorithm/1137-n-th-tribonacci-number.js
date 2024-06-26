/**
 * 1137. 第 N 个泰波那契数
 * 
 * 泰波那契序列 Tn 定义如下： 
 * 
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 * 
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 */
var tribonacci = function (n) {
    let [a, b, c] = [0, 1, 1];
    for (let i = 0; i < n; i++) {
        let [ta, tb] = [a, b]
        a = b, b = c, c = ta + tb + c
    }
    return a;
};