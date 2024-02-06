/**
 * LCP 30. 魔塔游戏
 *
 * 小扣当前位于魔塔游戏第一层，共有 N 个房间，编号为 0 ~ N-1。每个房间的补血道具/怪物对于血量影响记于数组 nums，其中正数表示道具补血数值，即血量增加对应数值；负数表示怪物造成伤害值，即血量减少对应数值；0 表示房间对血量无影响。
 *
 * 小扣初始血量为 1，且无上限。假定小扣原计划按房间编号升序访问所有房间补血/打怪，为保证血量始终为正值，小扣需对房间访问顺序进行调整，每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾。请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回 -1。
 */

/**
 * 最好是遍历啦,如果+上当前的为正就处理这个元素.如果为负就放到最后,判断一次遍历是否变动了数据,如果没变动说名无法完成游戏
 * @param {number[]} nums
 * @return {number}
 */
var magicTower = function (nums) {
  let len = nums.length;
  let currScore = 1;
  let result = 0;
  while (nums.length) {
    let initLen = nums.length;
    let currLen = initLen;
    if (!initLen) return result;
    while (currLen--) {
      let item = nums.shift();
      if (currScore + item > 0) {
        currScore += item;
      } else {
        nums.push(item);
        result++;
      }
      if (currLen < 1) break;
    }
    console.log(initLen, currLen);
    if (initLen - 1 === currLen) {
      return -1;
    }
  }
  return result;
};
/**
 * 思路应该没问题,但是写的有问题
 */