/**
 * 1705. 吃苹果的最大数目
 *
 * 有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。在第 i 天，树上会长出 apples[i] 个苹果，这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，
 * 变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。
 *
 * 你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。
 *
 * 给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。
 */

/**
 * 比较核心的点在于苹果尽可能保存到腐烂时间之前,得有个腐烂时间到期还剩下多少,剩下的有几天,那就是二维表了,不至于这么麻烦吧
 * 
 * 绝了,优先队列,又让老子实现一个优先队列是么~~~
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {

};