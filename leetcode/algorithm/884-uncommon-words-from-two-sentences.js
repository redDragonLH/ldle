/**
 * 884. 两句话中的不常见单词
 * 
 * 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。
 * 
 * 如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。
 * 
 * 给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。
 */

/**
 * 失败，两边字符串可能出现一边有两个的情况
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let data = new Set();
    let result = [];
    let invalid = new Set()
    for (const item of s1.split(' ')) {
        if (data.has(item)) {
            invalid.add(item)
            data.delete(item)
        } else {
            data.add(item)
        }
    }
    for (const item of s2.split(' ')) {
        if (!invalid.has(item) && !data.has(item)) result.push(item)
        else data.delete(item)
    }
    result.push(...data.entries)
    return result;
};

/**
 * 由于那边都可能会有重复数据，所以放在一起处理在代码上会简单一点，但是由于会有
 * 出现两次以上的情况，单纯的删掉也有些问题，需要一个变量来保存被删除数据，
 * 如果用Map的话应该就不需要了，多的就放key里
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let strArr = (s1 + ' ' + s2).split(' ')
    let result = new Set();
    let deleteData = new Set();
    for (const item of strArr) {
        if (result.has(item)) {
            result.delete(item)
            deleteData.add(item)
        } else if (!deleteData.has(item)) {
            result.add(item)
        }
    }
    return new Array(...result);
};