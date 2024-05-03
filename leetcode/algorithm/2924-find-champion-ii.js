/**
 * 2924. 找到冠军 II
 * 
 * 一场比赛中共有 n 支队伍，按从 0 到  n - 1 编号。每支队伍也是 有向无环图（DAG） 上的一个节点。
 * 给你一个整数 n 和一个下标从 0 开始、长度为 m 的二维整数数组 edges 表示这个有向无环图，其中 edges[i] = [ui, vi] 表示图中存在一条从 ui 队到 vi 队的有向边。
 * 从 a 队到 b 队的有向边意味着 a 队比 b 队 强 ，也就是 b 队比 a 队 弱 。
 * 在这场比赛中，如果不存在某支强于 a 队的队伍，则认为 a 队将会是 冠军 。
 * 如果这场比赛存在 唯一 一个冠军，则返回将会成为冠军的队伍。否则，返回 -1 。
 * 注意
 *  * 环 是形如 a1, a2, ..., an, an+1 的一个序列，且满足：节点 a1 与节点 an+1 是同一个节点；节点 a1, a2, ..., an 互不相同；对于范围 [1, n] 中的每个 i ，均存在一条从节点 ai 到节点 ai+1 的有向边。
 *  * 有向无环图 是不存在任何环的有向图。
 */
/**
 * 当冠军那就只能有一个，必须比其他所有队都强
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {

    // 遍历所有边，但是把肯定不是冠军的元素存储，跳过遍历
    let weakTeam = new Array(n).fill(0);
    let weakTeamCount = 0
    for (const edge of edges) {
        // 这种情况把弱队都提出来了，但是如果强队有多个怎么办
        if(!weakTeam[edge[1]]){
            weakTeam[edge[1]]=1
            weakTeamCount++
        }
    }
    // console.log(weakTeamCount,weakTeam)
    if(weakTeamCount < n-1)return-1
    return weakTeam.indexOf(0)
};

/**
 * 果然是冠军队，一局都不能输，不比都不行
 * 
 * 优化： set 结构完全没有任何意义，去掉
 * 执行用时：98 ms, 在所有 JavaScript 提交中击败了 76.92 %的用户
 * 内存消耗：57.15 MB, 在所有 JavaScript 提交中击败了46.15%的用户
 */