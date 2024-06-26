/**
 * 383. 赎金信
 * 
 * 为了不在赎金信中暴露字迹，从杂志上搜索各个需要的字母，组成单词来表达意思。
 * 
 * 给你一个赎金信 (ransomNote) 字符串和一个杂志(magazine)字符串，判断 ransomNote 能不能由 magazines 里面的字符构成。
 * 
 * 如果可以构成，返回 true ；否则返回 false 。
 * 
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 */
/**
 * 用26位数组保存信的字母数量，然后遍历杂志，如果最后得到的所有字母的数都小于0则通过
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let arr = new Array(26).fill(0);
    let ranLen = ransomNote.length;
    let aCode = 'a'.charCodeAt();
    let magLen = magazine.length;
    for (let i = 0; i < ranLen; i++) {
        arr[ransomNote[i].charCodeAt() - aCode]++;
    }
    for (let i = 0; i < magLen; i++) {
        arr[magazine[i].charCodeAt() - aCode]--;
    }
    for (let i = 0; i < 26; i++) {
        if (arr[i] > 0) return false;

    }
    return true;
};
