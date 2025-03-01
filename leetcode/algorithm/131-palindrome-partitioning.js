/**
 * 131. 分割回文串
 * 
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const path = [];
    backTrack(s, 0, path, res);
    return res;
};
var backTrack = (s, start, path, res) => {
    if (start === s.length) {
        res.push([...path]);
        return;
    }
    for (let i = start; i < s.length; i++) {
        if (isPalindrome(s, start, i)) {
            path.push(s.substring(start, i + 1));
            backTrack(s, i + 1, path, res);
            path.pop();
        }
    }
}
var isPalindrome = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}