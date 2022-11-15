/**
 * 1710. 卡车上的最大单元数
 *
 * 请你将一些箱子装在 一辆卡车 上。给你一个二维数组 boxTypes ，其中 boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi] ：
 *
 *  * numberOfBoxesi 是类型 i 的箱子的数量。
 *  * numberOfUnitsPerBoxi 是类型 i 每个箱子可以装载的单元数量。
 *
 * 整数 truckSize 表示卡车上可以装载 箱子 的 最大数量 。只要箱子数量不超过 truckSize ，你就可以选择任意箱子装到卡车上。
 *
 * 返回卡车可以装载 单元 的 最大 总数。
 */

/**
 * 贪心
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (const boxType of boxTypes) {
        let numberOfBoxes = boxType[0];
        let numberOfUnitsPerBox = boxType[1];
        if (numberOfBoxes < truckSize) {
            res += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            res += truckSize * numberOfUnitsPerBox;
            break;
        }
    }
    return res;
};
