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
    let invalid =new Set()
    for (const item of s1.split(' ')) {
        if(data.has(item)){
            invalid.add(item)
            data.delete(item)
        }else {
            data.add(item)
        }
    }
    for (const item of s2.split(' ')) {
        if(!invalid.has(item)&&!data.has(item))result.push(item)
        else data.delete(item)
    }
    result.push(...data.entries)
    return result;
};