/**
 * 969. 煎饼排序
 * 
 * 给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。
 * 
 * 一次煎饼翻转的执行过程如下：
 *  * 选择一个整数 k ，1 <= k <= arr.length
 *  * 反转子数组 arr[0...k-1]（下标从 0 开始）
 * 
 * 例如，arr = [3,2,1,4] ，选择 k = 3 进行一次煎饼翻转，反转子数组 [3,2,1] ，得到 arr = [1,2,3,4] 。
 * 
 * 以数组形式返回能使 arr 有序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * arr.length 范围内的有效答案都将被判断为正确。
 */
/**
 * 煎饼排序：煎饼排序是数量问题的口语术语，当刮刀可以插入堆叠中的任何点并用于翻转其上方的所有薄饼时，按照尺寸的顺序对无序堆叠的薄煎饼进行分类。 煎饼数是给定数量的煎饼所需的最小翻转数。
 * 
 * 思路:从大到小找到位置不对的数据，把这个数据翻转到第一个位置，然后找到这个元素应该待的位置，从第一个位置到这个位置进行翻转，这样一个元素就归位了，从大到小步进的处理每个元素
 *  
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    let len = arr.length;
    let result = [];
    for (let i = len; i > 0; i--) {
        let currPos = arr.indexOf(i)
        if (currPos === i + 1) continue
        else {

            if (currPos !== 0) {
                reverse(arr, currPos)
                result.push(currPos + 1)
            }
            reverse(arr, i - 1)
            i - 1 > 0 && result.push(i)
        }
    }
    return result
};
const reverse = (arr, index) => {
    let end = index;
    let len = index / 2
    for (let i = 0; i < len; i++) {
        let temp = arr[i];
        arr[i] = arr[end];
        arr[end--] = temp;
    }
}
/**
 * 去掉console.log后用时陡降
 * 执行用时：48 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：41.6 MB, 在所有 JavaScript 提交中击败了22.62%的用户
 */