/**
 * 2609. 最长平衡子字符串
 *
 * 给你一个仅由 0 和 1 组成的二进制字符串 s 。
 * 如果子字符串中 所有的 0 都在 1 之前 且其中 0 的数量等于 1 的数量，则认为 s 的这个子字符串是平衡子字符串。请注意，空子字符串也视作平衡子字符串。
 * 返回  s 中最长的平衡子字符串长度。
 * 子字符串是字符串中的一个连续字符序列。
 */

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
    let result = 0
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '0'){
            let zero = i
            while(s[zero] === '0'){
                zero++
            }
            let one = zero
            while(s[one] === '1'){
                one++
            }
            if(one === zero){
                continue;
            }
            one-=zero
            zero -= (i)
            let mix = Math.min(one*2,zero*2)
            result = Math.max(result,mix)
            i+=zero
        }
        
    }
    return result
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了75.86%的用户
 * 内存消耗：43.98 MB, 在所有 JavaScript 提交中击败了27.59%的用户
 */