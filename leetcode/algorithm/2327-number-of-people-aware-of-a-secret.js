/**
 * 2327. 知道秘密的人数
 *
 * 在第 1 天，有一个人发现了一个秘密。
 * 给你一个整数 delay ，表示每个人会在发现秘密后的 delay 天之后，每天 给一个新的人 分享 秘密。同时给你一个整数 forget ，表示每个人在发现秘密 forget 天之后会 忘记 这个秘密。一个人 不能 在忘记秘密那一天及之后的日子里分享秘密。
 * 给你一个整数 n ，请你返回在第 n 天结束时，知道秘密的人数。由于答案可能会很大，请你将结果对 109 + 7 取余 后返回。
 */

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1000000007;
  const know = new Deque();
  const share = new Deque();
  know.pushBack({ day: 1, count: 1 });
  let knowCnt = 1,
    shareCnt = 0;

  for (let i = 2; i <= n; i++) {
    if (!know.isEmpty() && know.front().day === i - delay) {
      const first = know.popFront();
      knowCnt = (knowCnt - first.count + MOD) % MOD;
      shareCnt = (shareCnt + first.count) % MOD;
      share.pushBack(first);
    }
    if (!share.isEmpty() && share.front().day === i - forget) {
      const first = share.popFront();
      shareCnt = (shareCnt - first.count + MOD) % MOD;
    }
    if (!share.isEmpty()) {
      knowCnt = (knowCnt + shareCnt) % MOD;
      know.pushBack({ day: i, count: shareCnt });
    }
  }
  return (knowCnt + shareCnt) % MOD;
};
/**
 * 执行用时：11 ms, 在所有 JavaScript 提交中击败了77.78%的用户
 * 内存消耗：57.26 MB, 在所有 JavaScript 提交中击败了11.11%的用户
 */