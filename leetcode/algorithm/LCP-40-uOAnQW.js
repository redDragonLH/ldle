/**
 * LCP 40. 心算挑战
 *
 * 「力扣挑战赛」心算项目的挑战比赛中，要求选手从 N 张卡牌中选出 cnt 张卡牌，若这 cnt 张卡牌数字总和为偶数，
 * 则选手成绩「有效」且得分为 cnt 张卡牌数字总和。 给定数组 cards 和 cnt，其中 cards[i] 表示第 i 张卡牌上的数字。
 * 请帮参赛选手计算最大的有效得分。若不存在获取有效得分的卡牌方案，则返回 0。
 */
/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
  cards.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < cards.length; i++) {
    if (i < cnt) {
      sum += cards[i];
    }
  }
  if(sum % 2 === 0) {
    return sum;
  }
  sum-=cards[cnt-1];
  for (let i = cnt; i < cards.length; i++) {
    sum += cards[i];
    if (sum % 2 === 0) {
      return sum;
    } else {
      sum -= cards[i];
    }
  }
  return 0;
};
/**
 * 失败,未考虑第二和第三大的数相加为偶数并且比第一和后的元素相加要大的情况
 */
