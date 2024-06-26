/**
 * 2007. 从双倍数组中还原原数组
 *
 * 一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。
 * 给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。
 */

/**
 * 注意两个0情况
 * 
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  let len = changed.length;
  if (len % 2) return [];
  // 可以先排序,然后判断是否存在对应数字
  // 出现混合情况,无法使用二分法处理
  changed.sort((a, b) => a - b);
  let set = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    if (!set[i]) {
      let index = changed.indexOf(changed[i] * 2, i + 1);
      if (index > -1) {
        set[i] = 1;
        set[index] = 2;
      }
    }
  }
  let result = [];
  for (let i = 0; i < len; i++) {
    if (set[i] === 1) {
      result.push(changed[i]);
    }
  }
  if (result.length === len / 2) return result;
  return [];
};
/**
 * 失败,indexof 能处理相邻数字,不能处理不相邻数字
 * [1,2,3,2,4,6,2,4,6,4,8,12]
 */

/**
 * 对原数据进行破坏性处理
 * 
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
    let len = changed.length;
    if (len % 2) return [];
    // 可以先排序,然后判断是否存在对应数字
    // 出现混合情况,无法使用二分法处理
    // changed.sort((a, b) => a - b);
    let set = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
      if (!set[i] && changed[i]>-1) {
        let index = changed.indexOf(changed[i] * 2);
        if (index > -1 && index !== i) {
          set[i] = 1;
          set[index] = 2;
          changed[index] = -1;
        }
      }
    }
    let result = [];
    for (let i = 0; i < len; i++) {
      if (set[i] === 1) {
        result.push(changed[i]);
      }
    }
    if (result.length === len / 2) return result;
    return [];
  };
  /**
   * 没想到超时了~~
   * 特例处理也有问题
   */

  /**
   * 官方题解
   * @param {*} changed 
   * @returns 
   */
  var findOriginalArray = function(changed) {
    changed.sort((a, b) => a - b);
    const count = {};
    // mapping 化
    for (const num of changed) {
        // 计数
        count[num] = (count[num] || 0) + 1;
    }
    const res = [];
    for (const a of changed) {
        //这个数计算完成了
        if (count[a] === 0) {
            continue;
        }
        // 如果还有就继续处理
        count[a]--;
        // 没有成对的就直接返回,以示失败
        if (!count[a * 2]) {
            return [];
        }
        count[a * 2]--;
        res.push(a);
    }
    return res;
};
/**
 * array 转 Map 总是利器
 */