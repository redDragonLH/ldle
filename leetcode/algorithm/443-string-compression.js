/**
 * 443. 压缩字符串
 * 
 * 给你一个字符数组 chars ，请使用下述算法压缩：
 * 
 * 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：
 *  * 如果这一组长度为 1 ，则将字符追加到 s 中。
 *  * 否则，需要向 s 追加字符，后跟这一组的长度。
 * 
 * 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。
 * 
 * 请在 修改完输入数组后 ，返回该数组的新长度。
 * 
 * 你必须设计并实现一个只使用常量额外空间的算法来解决此问题。
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (!chars.length) return 0;
    let arrCount = 1;
    let currCode = chars[0], currCount = 0
    chars.forEach(e => {
        if (currCode !== e) {
            // 总数大于10
            if (currCount >= 10) {
                let residue = []
                console.log(currCode, currCount)
                while (currCount >= 10) {
                    residue.unshift(currCount % 10)
                    currCount = parseInt(currCount / 10)
                }
                residue.unshift(currCount)
                residue.forEach(c => {
                    chars[arrCount++] = "" + c;
                })
                // 小于10
            } else {
                currCount > 1 && (chars[arrCount++] = "" + currCount);

            }
            chars[arrCount++] = e
            currCount = 1;
            currCode = e;
        } else if (currCode === e) {
            currCount++;
        }

    })

    if (currCount >= 10) {
        let residue = []
        while (currCount >= 10) {
            residue.unshift(currCount % 10)
            currCount = parseInt(currCount / 10)
        }
        residue.unshift(currCount)
        residue.forEach(c => {
            chars[arrCount++] = "" + c;
        })
        // 小于10
    } else {
        currCount > 1 && (chars[arrCount++] = "" + currCount);
    }
    return arrCount
};
/**
 * 代码结构还需要精简优化
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了89.77%的用户
 * 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了74.42%的用户
 */
