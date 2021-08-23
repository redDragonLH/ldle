/**
 * 789. 逃脱阻碍者
 * 
 * 你在进行一个简化版的吃豆人游戏。你从 [0, 0] 点开始出发，你的目的地是 target = [xtarget, ytarget] 。
 * 地图上有一些阻碍者，以数组 ghosts 给出，第 i 个阻碍者从 ghosts[i] = [xi, yi] 出发。所有输入均为 整数坐标 。
 * 
 * 每一回合，你和阻碍者们可以同时向东，西，南，北四个方向移动，每次可以移动到距离原位置 1 个单位 的新位置。
 * 当然，也可以选择 不动 。所有动作 同时 发生。
 * 
 * 如果你可以在任何阻碍者抓住你 之前 到达目的地（阻碍者可以采取任意行动方式），则被视为逃脱成功。
 * 如果你和阻碍者同时到达了一个位置（包括目的地）都不算是逃脱成功。
 * 
 * 只有在你有可能成功逃脱时，输出 true ；否则，输出 false 。
 */

/**
 * 把拦截/抓捕 转化为谁先到终点的问题，因为阻碍者先到终点的话逃脱者就不能和阻碍者同时在一个点内
 * 
 * 那有一种方法就是计算双方的 曼哈顿距离：
 * 
 * 两点在南北方向上的距离加上在东西方向上的距离，即d(i,j)=|xi-xj|+|yi-yj|。 对于一个具有正南正北、正东正西方向规则布局的城镇街道，
 * 从一点到达另一点的距离正是在南北方向上旅行的距离加上在东西方向上旅行的距离
 * 
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
    const source = [0, 0];
    const distance = manhattanDistance(source, target);
    for (const ghost of ghosts) {
        const ghostDistance = manhattanDistance(ghost, target);
        if (ghostDistance <= distance) {
            return false;
        }
    }
    return true;
}

const manhattanDistance = (point1, point2) => {
    return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}