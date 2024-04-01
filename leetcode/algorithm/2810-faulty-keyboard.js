/**
 * 2810. 故障键盘
 *
 * 你的笔记本键盘存在故障，每当你在上面输入字符 'i' 时，它会反转你所写的字符串。而输入其他字符则可以正常工作。
 * 给你一个下标从 0 开始的字符串 s ，请你用故障键盘依次输入每个字符。
 * 返回最终笔记本屏幕上输出的字符串。
 */

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let index = s.indexOf('i',0)
    let len = s.length
    while(index>-1){
        let subString = s.substring(0,index)
        s= subString.split("").reverse().join("")+s.substring(index+1,len)
        len--
        index = s.indexOf('i',index)
    }
    return s
};
/**
 * 执行用时：115 ms, 在所有 JavaScript 提交中击败了25.81%的用户
 * 内存消耗：57.72 MB, 在所有 JavaScript 提交中击败了6.45%的用户
 */