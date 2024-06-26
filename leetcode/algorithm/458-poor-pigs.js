/**
 * 458. 可怜的小猪
 *
 * 有 buckets 桶液体，其中 正好 有一桶含有毒药，其余装的都是水。它们从外观看起来都一样。为了弄清楚哪只水桶含有毒药，你可以喂一些猪喝，通过观察猪是否会死进行判断。不幸的是，你只有 minutesToTest 分钟时间来确定哪桶液体是有毒的。
 *
 * 喂猪的规则如下：
 *  * 选择若干活猪进行喂养
 *  * 可以允许小猪同时饮用任意数量的桶中的水，并且该过程不需要时间。
 *  * 小猪喝完水后，必须有 minutesToDie 分钟的冷却时间。在这段时间里，你只能观察，而不允许继续喂猪。
 *  * 过了 minutesToDie 分钟后，所有喝到毒药的猪都会死去，其他所有猪都会活下来。
 *  * 重复这一过程，直到时间用完。
 *  * 给你桶的数目 buckets ，minutesToDie 和 minutesToTest ，返回在规定时间内判断哪个桶有毒所需的 最小 猪数。
 */

/**
 * 官方题解: 动态规划
 * 
 * 思路:
 *  根据题意,最大的测试轮数 iterations = minutesToTest/minutesToDie,
 * 也就是:在buckets 桶液体中有一桶有毒,至少需要多少只小猪才能在 iterations 轮测试中确定有毒的是哪一桶
 * 
 *  可以从另一角度考虑:用 f(i,j)表示i只小猪测试j轮最多可以在多少桶液体中确定有毒的是哪一桶.在确定最大测试轮数味 iterations 的情况下,
 * 需要计算使得 f(i,iterations) >= buckets 成立的最小的i
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {

};
