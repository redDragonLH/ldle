/**
 * 846. 一手顺子
 *
 * Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。
 * 给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。
 */

/**
 * 其实可以模拟,但是模拟效率太低
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  let len = hand.length;
  if (len % groupSize) return false;
  hand.sort((a, b) => a - b);
  let pos = 0;
  let prev = hand[0];
  while (len) {
    if (!pos) {
      pos++;
      continue;
    }
    pos = pos % groupSize;
    pos++;
    len--;
  }
};

/**
 * 官方题解: 贪心
 */
var isNStraightHand = function (hand, groupSize) {
  const n = hand.length;
  if (n % groupSize !== 0) {
    return false;
  }
  hand.sort((a, b) => a - b);
  const cnt = new Map();
  for (const x of hand) {
      //相同元素的数量
    cnt.set(x, (cnt.get(x) || 0) + 1);
  }
  for (const x of hand) {
    if (!cnt.has(x)) {
      continue;
    }
    for (let j = 0; j < groupSize; j++) {
      const num = x + j;
      if (!cnt.has(num)) {
        return false;
      }
      cnt.set(num, cnt.get(num) - 1);
      if (cnt.get(num) == 0) {
        cnt.delete(num);
      }
    }
  }
  return true;
};
