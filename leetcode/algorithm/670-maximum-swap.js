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

/**
 * 官方题解
 * @param {*} num 
 * @returns 
 */
var maximumSwap = function(num) {
    const charArray = [...'' + num];
    const n = charArray.length;
    let maxNum = num;
    // 每次交换两位数,然后与当前最大值比较,
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swap(charArray, i, j);
            maxNum = Math.max(maxNum, parseInt(charArray.join('')));
            swap(charArray, i, j);
        }
    }
    return maxNum;
}

const swap = (charArray, i, j) => {
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
};
