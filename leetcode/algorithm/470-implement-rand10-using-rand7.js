/**
 * 470. 用 Rand7() 实现 Rand10()
 * 
 * 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。
 * 
 * 不要使用系统的 Math.random() 方法。
 */

/**
 * 也就是说得找到一个rand7 实现随机不超过10的数
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    return rand7() + parseInt(rand7()* 0.5)
};

/**
 * 官方题解 拒绝采样
 * 拒绝采样：是用于从分布生成观测值的基本技术。 在一维中对随机变量进程采样，可以对二维笛卡尔图执行巨晕随机采样，
 * 并将样本保持在其密度函数图下的区域中
 */
 var rand10 = function() {
    var row, col, idx;
    do {
        row = rand7();
        col = rand7();
        idx = col + (row - 1) * 7;
    } while (idx > 40);
    return 1 + (idx - 1) % 10;
};

/**
 * 此问题基于：
 *  已知 rand_N() 可以等概率的生成 [1,N]范围的随机数
 *  那么： （rand_X() -1） * Y + rand_Y() ===> 可以等概率的生成 [1,x*Y]范围的随机数，即实现 rand_XY()
 */