/**
 * 2109. 向字符串添加空格
 * 给你一个下标从 0 开始的字符串 s ，以及一个下标从 0 开始的整数数组 spaces 。
 * 数组 spaces 描述原字符串中需要添加空格的下标。每个空格都应该插入到给定索引处的字符值 之前 。
 *  * 例如，s = "EnjoyYourCoffee" 且 spaces = [5, 9] ，那么我们需要在 'Y' 和 'C' 之前添加空格，这两个字符分别位于下标 5 和下标 9 。因此，最终得到 "Enjoy Your Coffee" 。
 * 请你添加空格，并返回修改后的字符串。
 */

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let arr= s.split('');
    spaces.forEach((val,i)=>arr.splice(val+i,0," "))
    return arr.join('')
};
/**
 * 超时
 */

/**
 * 子字符串分割
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let res = [], left = 0
    for (let space of spaces) {
        // 
        res.push(s.substring(left, space))
        left = space
    }
    res.push(s.substring(left))
    return res.join(' ')
};