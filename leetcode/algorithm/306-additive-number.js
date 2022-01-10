/**
 * 306. 累加数
 *
 * 累加数 是一个字符串，组成它的数字可以形成累加序列。
 *
 * 一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
 *
 * 给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。
 *
 * 说明：累加序列里的数 不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。
 */

/**
 * 双指针,每次移动一个指针,当位数超过当前选择的的长度则失败,
 * 第一个数为0则跳过
 *
 * 穷举法要判断的条件太多了
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  if (num.length < 3) return false;
  let firstPos = 0;
  let secondPos = 0;
  let endPos = 2;
  let resultPos = 3;
  // 整个停止条件 循环完成
  while (firstPos < num.length) {
    // 检查当前位置内的数字是否符合条件
    // 不符合的话应该吧rusultPos位置右移,直到 长度比两个加数的最大位数大2,因为两个数相加最多会增加一位,或者resultPos 超出当前字符串最大值
    // 如果resultPos位数超出,则应把endPos 位置右移1,resultPos 置为两个加数的最小位数的位置
    // 然后再次循环
    // 仍然不符合的话把 secondPos 右移1,然后重复上述动作,直到secondPos位置超出num长度
    // 则返回false
    while (secondPos < num.length) {
      let firstItem = parseInt(num.slice(firstPos, secondPos));
      while (endPos < num.length) {
        let secondItem = parseInt(num.slice(secondPos, endPos));
        while (
          resultPos < num.length &&
          firstItem + secondItem !== parseInt(num.slice(endPos, resultPos))
        ) {
          resultPos++;
        }
        // 跳出循环:
        // 此路不通
        if (resultPos === num.length - 1) {
          endPos++;
          resultPos = calculateResultPos(
            resultPos,
            firstPos,
            secondPos,
            endPos
          );
          // 数据符合
        } else {
          // 位数变量置为当前值,继续循环遍历
        }
      }
      if (endPos === num.length - 1) {
        secondPos++;
      } else {
      }
    }
    firstPos = secondPos;
    secondPos = endPos;
    endPos = resultPos;
    resultPos = calculateResultPos(resultPos, firstPos, secondPos, endPos);
  }
};

const calculateResultPos = (resultPos, firstPos, secondPos, endPos) => {
  return (
    resultPos +
    (secondPos - firstPos > endPos - secondPos
      ? secondPos - firstPos
      : endPos - secondPos)
  );
};

/**
 * 官方题解 我还以为有好点的解法
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const n = num.length;
  for (let secondStart = 1; secondStart < n - 1; ++secondStart) {
    if (num[0] === "0" && secondStart !== 1) {
      break;
    }
    for (let secondEnd = secondStart; secondEnd < n - 1; ++secondEnd) {
      if (num[secondStart] === "0" && secondStart !== secondEnd) {
        break;
      }
      if (valid(secondStart, secondEnd, num)) {
        return true;
      }
    }
  }
  return false;
};

const valid = (secondStart, secondEnd, num) => {
  const n = num.length;
  let firstStart = 0,
    firstEnd = secondStart - 1;
  while (secondEnd <= n - 1) {
    const third = stringAdd(num, firstStart, firstEnd, secondStart, secondEnd);
    const thirdStart = secondEnd + 1;
    const thirdEnd = secondEnd + third.length;
    if (thirdEnd >= n || num.slice(thirdStart, thirdEnd + 1) !== third) {
      break;
    }
    if (thirdEnd === n - 1) {
      return true;
    }
    firstStart = secondStart;
    firstEnd = secondEnd;
    secondStart = thirdStart;
    secondEnd = thirdEnd;
  }
  return false;
};

const stringAdd = (s, firstStart, firstEnd, secondStart, secondEnd) => {
  const third = [];
  let carry = 0,
    cur = 0;
  while (firstEnd >= firstStart || secondEnd >= secondStart || carry !== 0) {
    cur = carry;
    if (firstEnd >= firstStart) {
      cur += s[firstEnd].charCodeAt() - "0".charCodeAt();
      --firstEnd;
    }
    if (secondEnd >= secondStart) {
      cur += s[secondEnd].charCodeAt() - "0".charCodeAt();
      --secondEnd;
    }
    carry = Math.floor(cur / 10);
    cur %= 10;
    third.push(String.fromCharCode(cur + "0".charCodeAt()));
  }
  third.reverse();
  return third.join("");
};
