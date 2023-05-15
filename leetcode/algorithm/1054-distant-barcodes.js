/**
 * 1054. 距离相等的条形码
 * 
 * 在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。
 * 
 * 请你重新排列这些条形码，使其中任意两个相邻的条形码不能相等。 你可以返回任何满足该要求的答案，此题保证存在答案。
 */

/**
 * 给的例子都是有序的，我觉得有问题
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    barcodes.sort((a,b)=>a-b);
    let len = barcodes.length;
    if(len <2) return barcodes;
    let arr = new Array();
    let mid = end = Math.ceil(len/2);
    // console.log(mid,len/2);

    for (let i = 0; i < end; i++) {
        arr.push(barcodes[i])
        barcodes[mid] && arr.push(barcodes[mid++])
    }
    if(arr[end] === arr[end-1]){
        let temp = arr[end]
        arr[end] = arr[end+1]
        arr[end+1]= temp
    }
    return arr;
};
/**
 * 解决不了单个元素重复超过一半的问题
 */

/**
 * 理论上可以计数，然后找最多的先插入，但是数据结构就要复杂，
 * 但是肯定得确定最多的元素，要不然位置不够
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    const length = barcodes.length;
    if (length < 2) {
        return barcodes;
    }

    const counts = new Map();
    let maxCount = 0;
    for (const b of barcodes) {
        counts.set(b, (counts.get(b) || 0) + 1);
        maxCount = Math.max(maxCount, counts.get(b));
    }

    let evenIndex = 0;
    let oddIndex = 1;
    let halfLength = Math.floor(length / 2);
    const res = _.fill(Array(length), 0);
    // 核心代码
    for (let [x, count] of counts.entries()) {
        while (count > 0 && count <= halfLength && oddIndex < length) {
            res[oddIndex] = x;
            count--;
            oddIndex += 2;
        }
        while (count > 0) {
            res[evenIndex] = x;
            count--;
            evenIndex += 2;
        }
    }
    return res;
};