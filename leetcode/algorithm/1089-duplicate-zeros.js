/**
 * 1089. 复写零
 *
 * 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
 *
 * 注意：请不要在超过该数组长度的位置写入元素。
 *
 * 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    const n = arr.length;
    let top = 0;
    let i = -1;// 标识的是理论上处理完成后数组右侧的元素在未处理时的位置
    // 当这里处理完后i指示的元素应该会在处理完后的元素的最后一个位置
    while (top < n) {
        i++;
        if (arr[i] !== 0) {
            top++;
        } else {
            top += 2;
        }
    }
    let j = n - 1;
    // 防止最后一个元素是0，导致跳多了
    if (top === n + 1) {
        arr[j] = 0;
        j--;
        i--;
    }
    // 覆写位置元素
    while (j >= 0) {
        // j是实际的数组位置随着数据处理减小
        arr[j] = arr[i];
        j--;
        // 元素是0就得在赋值一个位置，造成右移的效果
        if (arr[i] === 0) {
            arr[j] = arr[i];
            j--;
        } 
        i--;
    }
};
