/**
 * 819. 最常见的单词
 * 
 * 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。
 * 
 * 题目保证至少有一个词不在禁用列表中，而且答案唯一。
 * 
 * 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
 */

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let bannedMap = {};
    banned.forEach(e => {
        bannedMap[e] = true;
    })
    let maxWord = '', max = 0;
    let count = {};
    paragraph.split(' ').forEach(e => {
        let word = e.toLocaleLowerCase()
        console.log(word, count)// 符号还得辨别
        if (!bannedMap[word]) {
            count[word] ? count[word]++ : count[word] = 1;
            if (max < count[word]) {
                max = count[word]
                maxWord = word
            }
        }
    })
    return maxWord;
};