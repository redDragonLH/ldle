/**
 * 2085. 统计出现过一次的公共字符串
 *
 * 给你两个字符串数组 words1 和 words2 ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。
 */

/**
 * mapping
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let mapping = {}
    let len1 = words1.length
    for (let i = 0; i < len1; i++) {
        if(mapping[words1[i]]){
            mapping[words1[i]][0]+=1
        }else {
            mapping[words1[i]]= [1,0]

        }
    }
    let len2 = words2.length
    for (let i = 0; i < len2; i++) {
        if(mapping[words2[i]]){
            mapping[words2[i]][1]+=1
        }
    }
                console.log(mapping)

    let result = 0
    for (const key in mapping) {
        if (Object.hasOwnProperty.call(mapping, key)) {
            if(mapping[key][0]===1 && mapping[key][0] === mapping[key][1]){
                result++
            }
            
        }
    }
    return result
};
/**
 * 执行用时：120 ms, 在所有 JavaScript 提交中击败了15.79%的用户
 * 内存消耗：57.61 MB, 在所有 JavaScript 提交中击败了5.26%的用户
 */
