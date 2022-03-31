/**
 * 728. 自除数
 *
 * 自除数 是指可以被它包含的每一位数整除的数。
 *  * 例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 *
 * 自除数 不允许包含 0 。
 *
 * 给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  // 遍历
  const ans = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      ans.push(i);
    }
  }
  return ans;
};

const isSelfDividing = (num) => {
  let temp = num;
  // 一个数一个数除
  while (temp > 0) {
    const digit = temp % 10;
    if (digit === 0 || num % digit !== 0) {
      return false;
    }
    temp = Math.floor(temp / 10);
  }
  return true;
};
