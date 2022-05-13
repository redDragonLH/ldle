/**
 * 面试题 01.05. 一次编辑
 * 
 * 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 */

/**
 * 有三种情况,但是都只有一个字符的修改,所以可以遍历两个字符串,查看是否只有一处不同
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */

var oneEditAway = function (first, second) {
    let len = Math.max(first.length, second.length);
    if (len < 2) return true;
    let firstIndex = 0;
    let secondIndex = 0;
    let dislocation = 0;
    for (let i = 0; i < len; i++) {
        if (first[firstIndex] === second[secondIndex]) {
            firstIndex++;
            secondIndex++;
        } else {
            if (dislocation) return false;
            dislocation++;
            // 应该还有更刁钻的测试用例,可能会扰乱两个指针的位置
            if (first[firstIndex + 1] === second[secondIndex]) { firstIndex++; }
            else if (second[secondIndex + 1] === first[firstIndex]) { secondIndex++; }
            else if (second[secondIndex + 1] === first[firstIndex + 1]) {
                firstIndex++;
                secondIndex++;
            }
            len++;
        }
    }
    return true
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了90.03%的用户
 * 内存消耗：42.7 MB, 在所有 JavaScript 提交中击败了93.18%的用户
 */