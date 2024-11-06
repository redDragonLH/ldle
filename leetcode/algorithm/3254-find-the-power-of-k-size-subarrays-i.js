/**
 * 3254. 长度为 K 的子数组的能量值 I
 * 
 * 给你一个长度为 n 的整数数组 nums 和一个正整数 k 。

 * 一个数组的 能量值 定义为：

 *  * 如果 所有 元素都是依次 连续 且 上升 的，那么能量值为 最大 的元素。
 *  * 否则为 -1 。
 * 你需要求出 nums 中所有长度为 k 的 子数组 的能量值。
 * 请你返回一个长度为 n - k + 1 的整数数组 results ，其中 results[i] 是子数组 nums[i..(i + k - 1)] 的能量值。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    const results = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        const subArray = nums.slice(i, i + k);
        const max = Math.max(...subArray);
        if (subArray.every((num, index) => index === 0 || num === subArray[index - 1]+1)) {
            results.push(max);
        } else {
            results.push(-1);
        }
    }
    return results;
};
/**
 * 最笨的方法,截取子数组,判断是否连续递增,如果是则返回最大值,否则返回-1
 * 后缀和应该更好,滑动窗口应该也行
 */