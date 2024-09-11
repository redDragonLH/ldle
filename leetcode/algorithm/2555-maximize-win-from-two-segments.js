/**
 * 2555. 两个线段获得的最多奖品
 *
 * 在 X轴 上有一些奖品。给你一个整数数组 prizePositions ，它按照 非递减 顺序排列，其中 prizePositions[i] 是第 i 件奖品的位置。数轴上一个位置可能会有多件奖品。再给你一个整数 k 。
 * 你可以选择两个端点为整数的线段。每个线段的长度都必须是 k 。你可以获得位置在任一线段上的所有奖品（包括线段的两个端点）。注意，两个线段可能会有相交。
 *  * 比方说 k = 2 ，你可以选择线段 [1, 3] 和 [2, 4] ，你可以获得满足 1 <= prizePositions[i] <= 3 或者 2 <= prizePositions[i] <= 4 的所有奖品 i 。
 * 请你返回在选择两个最优线段的前提下，可以获得的 最多 奖品数目。
 */

/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function(prizePositions, k) {
    const n = prizePositions.length;
    const dp = new Array(n + 1).fill(0);
    let ans = 0;

    for (let left = 0, right = 0; right < n; right++) {
        while (prizePositions[right] - prizePositions[left] > k) {
            left++;
        }
        ans = Math.max(ans, right - left + 1 + dp[left]);
        dp[right + 1] = Math.max(dp[right], right - left + 1);
    }

    return ans;
};