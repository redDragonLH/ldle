/**
 * 1222. 可以攻击国王的皇后
 * 
 * 在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。
 * 
 * 给定一个由整数坐标组成的数组 queens ，表示黑皇后的位置；以及一对坐标 king ，表示白国王的位置，返回所有可以攻击国王的皇后的坐标(任意顺序)。
 */

/**
 * 也就是查看八个方向有没有皇后，有就直接返回
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    queen_pos = new Set();
    for (const queen of queens) {
        let x = queen[0], y = queen[1];
        // 这个8 是什么意思，是担心x+y的值会重复么，并且棋盘为8*8
        // 所以加盐使之每个点的数据都是独一无二的？
        // 乘之后的数据实际变成了一个八进位数据，只要y不超过八，那么这个点的数字就是独一无二的
        queen_pos.add(x * 8 + y);
    }

    const ans = [];
    // 模拟从中心往八方散布，但是顺序是从一边往远处遍历，一边完了再换一边
    // 意思就是深度优先，而不是广度优先
    for (let dx = -1; dx <= 1; ++dx) {
        for (let dy = -1; dy <= 1; ++dy) {
            if (dx == 0 && dy == 0) {
                continue;
            }
            let kx = king[0] + dx, ky = king[1] + dy;
            // 深度优先遍历
            // 有数据后直接返回，因为后边就算有也被遮挡
            while (kx >= 0 && kx < 8 && ky >= 0 && ky < 8) {
                let pos = kx * 8 + ky;
                if (queen_pos.has(pos)) {
                    ans.push([kx, ky]);
                    break;
                }
                kx += dx;
                ky += dy;
            }
        }
    }
    return ans;
};