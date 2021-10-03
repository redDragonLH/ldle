/**
 * 1436. 旅行终点站
 * 
 * 给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。
 * 
 * 题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。
 */

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let map = new Map()
    let start = paths[0][0]
    paths.forEach(e => {
        map.set(e[0], e[1])
    })
    while (start) {
        if (map.has(start)) {
            start = map.get(start)
        } else {
            return start
        }
    }
};
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了38.64%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了80.68%的用户
 */