/**
 * 345. 反转字符串中的元音字母
 * 
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 */

/**
 * 双指针方法
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const n = s.length;
    // 转为数组
    const arr = Array.from(s);
    let i = 0, j = n - 1;
    // 两个指针向内前进的停止条件
    while (i < j) {
        // 两个指针分开寻找，省的浪费循环
        while (i < n && !isVowel(arr[i])) {
            ++i;
        }
        while (j > 0 && !isVowel(s[j])) {
            --j;
        }
        if (i < j) {
            swap(arr, i, j);
            ++i;
            --j;
        }
    }
    return arr.join('');
}
// 元音判断
const isVowel = (ch) => {
    return "aeiouAEIOU".indexOf(ch) >= 0;
}
// 引用数组内元素交换
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
