/**
 * 2806. 取整购买后的账户余额
 *
 * 一开始，你的银行账户里有 100 块钱。
 * 给你一个整数purchaseAmount ，它表示你在一次购买中愿意支出的金额。
 * 在一个商店里，你进行一次购买，实际支出的金额会向 最近 的 10 的 倍数 取整。换句话说，你实际会支付一个 非负 金额 roundedAmount ，满足 roundedAmount 是 10 的倍数且 abs(roundedAmount - purchaseAmount) 的值 最小 。
 * 如果存在多于一个最接近的 10 的倍数，较大的倍数 是你的实际支出金额。
 * 请你返回一个整数，表示你在愿意支出金额为 purchaseAmount 块钱的前提下，购买之后剩下的余额。
 * 注意： 0 也是 10 的倍数。
 */
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  let balance = 100;
  purchaseAmount = Math.round(purchaseAmount / 10) * 10;

  return balance - purchaseAmount;
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了 40.74%的用户
 * 内存消耗：49.11 MB, 在所有 JavaScript 提交中击败了 22.22%的用户
 */