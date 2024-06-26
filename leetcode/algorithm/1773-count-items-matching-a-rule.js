/**
 * 1773. 统计匹配检索规则的物品数量
 *
 * 给你一个数组 items ，其中 items[i] = [typei, colori, namei] ，描述第 i 件物品的类型、颜色以及名称。
 *
 * 另给你一条由两个字符串 ruleKey 和 ruleValue 表示的检索规则。
 *
 * 如果第 i 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：
 *  * ruleKey == "type" 且 ruleValue == typei 。
 *  * ruleKey == "color" 且 ruleValue == colori 。
 *  * ruleKey == "name" 且 ruleValue == namei 。
 *
 * 统计并返回 匹配检索规则的物品数量 。
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let keyMapping = {
    type: 0,
    color: 1,
    name: 2,
  };
  let index = keyMapping[ruleKey];
  let retult = 0;
  items.forEach((e) => {
    if (e[index] === ruleValue) retult++;
  });
  return retult;
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了79.12%的用户
 * 内存消耗：44.7 MB, 在所有 JavaScript 提交中击败了75.82%的用户
 */