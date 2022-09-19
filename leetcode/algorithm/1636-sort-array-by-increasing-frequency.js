/**
 * 1636. 按照频率将数组升序排序
 *
 * 给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。
 *
 * 请你返回排序后的数组。
 */
/**
 * 直白点,先确定数量,在按照数量排序
 * 还有负数比较恶心
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function (nums) {
    let frequency = new Array(100);
    nums.forEach(e => {
        if (frequency[e]) {
            frequency[e][1]++
        } else {
            frequency[e] = [e, 1];
        }
    })
    frequency.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0]-a[0]
        } else {
            return a[1] - b[1]
        };

    })
    let index = 0
    for (let i = 0; i < frequency.length; i++) {
        let e = frequency[i];
        if (!e) break;
        while (e[1]--) {
            nums[index++] = e[0]
        }

    }
    return nums;
};