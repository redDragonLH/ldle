/**
 * 1044. 最长重复子串
 *
 * 给你一个字符串 s ，考虑其所有 重复子串 ：即，s 的连续子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。
 *
 * 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。
 * 
 * 注意: 子串之间可能出现重叠部分 ,就比较二
 */

/**
 * 第三方题解: 哈希+二分
 * 我就看看二分怎么分~~~
 * 
 * 思路: 
 *  以「最大长度」为分割点的数轴具有「二段性」
 *      * 小于等于最大长度方案均存在(考虑在最大长度方案上做删减)
 *      * 大于最大长度的方案不存在
 *  
 *  二分范围为[0,n],关键在于如何 check 函数,即实现「检查某个长度len作为最大长度,是否存在合法方案」
 * 
 *  对于常规做法而言,可枚举每个位置作为起点,得到长度为len的子串,同时使用Set 结构记录已被处理过的子串有哪些,当容器中出现过当前子串,说明存在合法方案
 * 
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function (s) {};

/**
 * 题解:后缀数组
 *  后缀数组有基于基数排序的倍增实现,
 * 
 * 后缀数组包含几个核心数组:
 *  * sa数组: 字典序排名为i的后缀是第几个
 *  * rk 数组:第 i 个后缀的排名是多少?( rk 与 sa 满足 sa[rk[i]]=rk[sa[i]]=i)
 *  * height 数组“存储 sa[i]与 sa[i-1]的LCP (最长公共前缀)为何值
 */