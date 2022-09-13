/**
 * 670. 最大交换
 *
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
 */

/**
 * 用动态规划把~~至少得是递归才能吧边界覆盖掉
 * 
 * 未解决非第一位问题
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  // 把最大数调换至最前方.除非数字是降序排列
  // 要注意最前方并不一定是第一位,也可能是后边的
  let numArray = num.toString().split("");
  let maxNumberAndIndex = [0, 0];
  numArray.map((e, i) => {
    if (e.charCodeAt() > maxNumberAndIndex[0].charCodeAt()) {
      maxNumberAndIndex = [e, i];
    }
  });
  if (i === 0) {
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i].charCodeAt() < maxNumberAndIndex[0].charCodeAt()) {
        maxNumberAndIndex = [e, i];
        break;
      }
    }
    for (let i = maxNumberAndIndex[1]; i < numArray.length; i++) {
    
    
    }
  }else {
    let temp =numArray[0]
    numArray[0] = maxNumberAndIndex[0]
    numArray[maxNumberAndIndex[1]]=temp
    return Number(numArray.join(""))
  }

};
