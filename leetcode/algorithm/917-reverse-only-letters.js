/**
 * 917. 仅仅反转字母
 * 
 * 给你一个字符串 s ，根据下述规则反转字符串：
 *  * 所有非英文字母保留在原有位置。
 *  * 所有英文字母（小写或大写）位置反转。
 * 
 * 返回反转后的 s 。
 */
/**
 * 双指针
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let sArr = s.split('');
    let len = sArr.length;
    let start = 0, end = s.length - 1;
    while (start < end) {
        for (; start < len; start++) {
            if (isAlphabet(sArr[start])) {
                break
            }
        }
        for (; end > -1; end--) {
            if (isAlphabet(sArr[end])) {
                break
            }
        }
        if (start > end) break
        switchAlphabet(sArr, start, end)
        start++;
        end--;
    }
    return sArr.join('');
};
const isAlphabet = (alphabet) => {
    let code = alphabet.charCodeAt()
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) return true;
    else return false;
}
const switchAlphabet = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}