/**
 * 599. 两个列表的最小索引总和
 * 
 * 假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 * 
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let result = [];
    let map = new Map();
    let minIndex = Number.MAX_SAFE_INTEGER
    list1.forEach((e, i) => {
        map.set(e, i);

    })
    list2.forEach((e, i) => {
        if (map.has(e)) {
            if (map.get(e) + i < minIndex) {
                result = [e]
                minIndex = map.get(e) + i
            } else if (map.get(e) + i === minIndex) {
                result.push(e)
            }
        }
    })
    return result
};
/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了96.62%的用户
 * 内存消耗：47.3 MB, 在所有 JavaScript 提交中击败了42.20%的用户
 */