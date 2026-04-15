/**
 * 2515. 到目标字符串的最短距离
 *
 * 给你一个下标从 0 开始的 环形 字符串数组 words 和一个字符串 target 。环形数组 意味着数组首尾相连。
 *  * 形式上， words[i] 的下一个元素是 words[(i + 1) % n] ，而 words[i] 的前一个元素是 words[(i - 1 + n) % n] ，其中 n 是 words 的长度。
 * 从 startIndex 开始，你一次可以用 1 步移动到下一个或者前一个单词。
 * 返回到达目标字符串 target 所需的最短距离。如果 words 中不存在字符串 target ，返回 -1 。
 */

/**
 * 有重复数据,那就必须从startIndex开始遍历,找到最近的target
 * 1. 如果startIndex就是target,直接返回0
 * 2. 如果words中没有target,直接返回-1
 * 3. 否则,找到target的index,计算左边和右边的距离,返回较小的那个
 * 
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function (words, target, startIndex) {
    if(words[startIndex] === target) return 0;
    if(!words.includes(target)) return -1;
    let n = words.length;
    let left = startIndex, right = startIndex;
    while (true) {
        left = (left - 1 + n) % n;
        right = (right + 1) % n;
        if (words[left] === target) break;
        if (words[right] === target) break;
    }
    return Math.min((startIndex - left + n) % n, (right - startIndex + n) % n);
};
/**
 * 执行用时 :0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :58.68 MB, 在所有 JavaScript 提交中击败了60.00%的用户
 */