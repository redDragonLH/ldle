/**
 * 838. 推多米诺
 *
 * n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。
 *
 * 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。
 *
 * 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。
 *
 * 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。
 *
 * 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：
 *  * dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
 *  * dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
 *  * dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
 *
 * 返回表示最终状态的字符串。
 */
/**
 * 时间点是个很重要的数据,如果不考虑倒时的时间就没有办法判断一个处于RL两牌之间的牌往那边倒(R....L);
 * 如果是 R.L 这种情况中间的牌仍旧不倒
 * 注意点:
 *  1. 如果两个相邻牌,左边向右倒,右边向左倒,这两个并不会彼此影响
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let len = dominoes.length;
  let times = new Array(len).fill(-1);
  let dominoesArr = dominoes.split("");
  // 初始化数据,开始同时倒的点置为0
  for (let i = 0; i < len; i++) {
    if (dominoesArr[i] !== ".") times[i] = 0;
  }
  for (let i = 0; i < len; i++) {
    // 因为会在计算过程中动态改变元素,所以要判断只有原始数据才进行处理
    // 也是一个优化点
    if (times[i] == 0 && dominoesArr[i] === "R") {
      traverse2Right(dominoesArr, i, len, times);
    } else if (times[i] == 0 && dominoesArr[i] === "L") {
      traverse2Left(dominoesArr, i, 0, times);
    }
  }
  return dominoesArr.join("");
};
/**
 * 向右倒计算简单,因为遇到L就肯定要停下,而且不会像L一样要往回溯
 *
 * 右倾计算出来的结果并不是最终结果,可能会被左倾逻辑修改
 * @param {*} arr
 * @param {*} start
 * @param {*} end
 * @param {*} times
 */
const traverse2Right = (arr, start, end, times) => {
  let direction = "R";
  for (let i = start + 1; i < end; i++) {
    // 向右遍历的过程中遇到未倒的点就置为向右倒状态,并且把对应元素时间+1
    // 其实times[i] > times[i - 1]这个判断理论上也是多余的,因为不需要考虑这么多
    if (times[i] === -1 || times[i] > times[i - 1]) {
      arr[i] = direction;
      times[i] = times[i - 1] + 1;
      // else 不需要考虑其他任何条件,,只要不是-1 直接跳出循环
      // if (arr[i] === direction || arr[i] !== direction)
    } else {
      break;
    }
  }
};
/**
 * 由于向左倒会涉及到回溯检查时间的情况,逻辑较复杂
 *
 * 理论上先处理左倾,然后在右倾过程中处理回溯也可以实现,但是不符合大多数人的直觉
 * @param {*} arr
 * @param {*} start
 * @param {*} end
 * @param {*} times
 */
const traverse2Left = (arr, start, end, times) => {
  let direction = "L";
  // 往回遍历数组
  for (let i = start - 1; i >= end; i--) {
    // 遇到初始节点直接跳出,因为这个点肯定是最先动的,只会影响其他牌,不会被其他牌影响
    if (times[i] === 0) break;
    // 当当前时间点比前一个时间点晚的时候,说明这个点已经在处理中右倾过了,但是由于左倾点时间比右倾早,所以需要重新设置方向,以保证结果正确
    if (times[i] === -1 || times[i] > times[i + 1]) {
      arr[i] = direction;
      times[i] = times[i + 1] + 1;
      // 应该和 times[i]===0 重复了
    } else if (arr[i] === direction) {
      break;
    }
    // 如果这两个位置的时间相等说明同时相对倾斜,而因为受力,不会被对面改变,保持不变
    // 同时因为时间点一样,更左边的元素也不会被当前左倾序列改变,直接跳出
    if (times[i] === times[i - 1]) {
      // arr[i] = '.';
      break;
    }
    // 如果当前元素比左侧元素大,并且左侧元素是右倾的,说明这个元素的左边的右倾序列和右边的左倾序列同时到这个点,因为受力平衡,此点保持直立不变
    if (times[i] > times[i - 1] && arr[i - 1] === "R") {
      arr[i] = ".";
      break;
    }
  }
};

/**
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了86.36%的用户
 * 内存消耗：52.8 MB, 在所有 JavaScript 提交中击败了72.73%的用户
 */
