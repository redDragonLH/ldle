/**
 * 3607. 电网维护
 * 
 * 给你一个整数 c，表示 c 个电站，每个电站有一个唯一标识符 id，从 1 到 c 编号。
 * 这些电站通过 n 条 双向 电缆互相连接，表示为一个二维数组 connections，其中每个元素 connections[i] = [ui, vi] 表示电站 ui 和电站 vi 之间的连接。直接或间接连接的电站组成了一个 电网 。
 * 最初，所有 电站均处于在线（正常运行）状态。
 * 另给你一个二维数组 queries，其中每个查询属于以下 两种类型之一 ：
 *  * [1, x]：请求对电站 x 进行维护检查。如果电站 x 在线，则它自行解决检查。如果电站 x 已离线，则检查由与 x 同一 电网 中 编号最小 的在线电站解决。如果该电网中 不存在 任何 在线 电站，则返回 -1。
 *  * [2, x]：电站 x 离线（即变为非运行状态）。
 * 返回一个整数数组，表示按照查询中出现的顺序，所有类型为 [1, x] 的查询结果。
 * 注意：电网的结构是固定的；离线（非运行）的节点仍然属于其所在的电网，且离线操作不会改变电网的连接性。
 */

/**
 * 并查集处理电网关系
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
var processQueries = function(c, connections, queries) {
    // 并查集
    const parent = Array(c + 1).fill(0).map((_, i) => i);
    const find = x => parent[x] === x ? x : parent[x] = find(parent[x]);
    const union = (x, y) => parent[find(x)] = find(y);

    // 建立电网关系
    for (const [u, v] of connections) {
        union(u, v);
    }

    // 每个电网的成员
    const gridMembers = {};
    for (let i = 1; i <= c; ++i) {
        const root = find(i);
        if (!gridMembers[root]) gridMembers[root] = [];
        gridMembers[root].push(i);
    }

    // 在线状态
    const online = Array(c + 1).fill(true);

    const res = [];
    for (const [type, x] of queries) {
        if (type === 2) {
            online[x] = false;
        } else if (type === 1) {
            if (online[x]) {
                res.push(x);
            } else {
                const root = find(x);
                let minOnline = -1;
                for (const node of gridMembers[root]) {
                    if (online[node]) {
                        minOnline = node;
                        break;
                    }
                }
                res.push(minOnline);
            }
        }
    }
    return res;
};