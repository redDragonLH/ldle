/**
 * 744. 寻找比目标字母大的最小字母
 * 
 * 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。
 * 
 * 在比较时，字母是依序循环出现的。举个例子：
 * 
 * 如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'
 */

var nextGreatestLetter = function (letters, target) {
    const length = letters.length;
    let nextGreater = letters[0];
    for (let i = 0; i < length; i++) {
        if (letters[i] > target) {
            nextGreater = letters[i];
            break;
        }
    }
    return nextGreater;
};