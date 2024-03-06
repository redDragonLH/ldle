/**
 * 1976. 到达目的地的方案数
 *
 * 你在一个城市里，城市由 n 个路口组成，路口编号为 0 到 n - 1 ，某些路口之间有 双向 道路。输入保证你可以从任意路口出发到达其他任意路口，且任意两个路口之间最多有一条路。
 * 给你一个整数 n 和二维整数数组 roads ，其中 roads[i] = [ui, vi, timei] 表示在路口 ui 和 vi 之间有一条需要花费 timei 时间才能通过的道路。你想知道花费 最少时间 从路口 0 出发到达路口 n - 1 的方案数。
 * 请返回花费 最少时间 到达目的地的 路径数目 。由于答案可能很大，将结果对 109 + 7 取余 后返回。
 */

/**
 * 官方题解 Dijkstra 算法
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    const mod = 1e9 + 7;
    const e = new Array(n).fill(0).map(() => new Array());
    for (const [x, y, t] of roads) {
        e[x].push([y, t]);
        e[y].push([x, t]);
    }

    const dis = [0].concat(Array(n - 1).fill(Infinity));
    const ways = [1].concat(Array(n - 1).fill(0));
    const q = new MinPriorityQueue();
    q.enqueue([0, 0], 0);
    
    while (!q.isEmpty()) {
        let t = q.front().element[0], u = q.front().element[1];
        q.dequeue();
        // 不往回走
        if (t > dis[u])
            continue;
        for (const [v, w] of e[u]) {
            if (t + w < dis[v]) {
                dis[v] = t + w;
                ways[v] = ways[u];
                q.enqueue([t + w, v], t + w);
            } else if (t + w == dis[v]) {
                ways[v] = (ways[u] + ways[v]) % mod;
            }
        }
    }
    return ways[n - 1];
};