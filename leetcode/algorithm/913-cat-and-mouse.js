/**
 * 913. 猫和老鼠
 *
 * 两位玩家分别扮演猫和老鼠，在一张 无向 图上进行游戏，两人轮流行动。
 *
 * 图的形式是：graph[a] 是一个列表，由满足 ab 是图中的一条边的所有节点 b 组成。
 *
 * 老鼠从节点 1 开始，第一个出发；猫从节点 2 开始，第二个出发。在节点 0 处有一个洞。
 *
 * 在每个玩家的行动中，他们 必须 沿着图中与所在当前位置连通的一条边移动。例如，如果老鼠在节点 1 ，那么它必须移动到 graph[1] 中的任一节点。
 *
 * 此外，猫无法移动到洞中（节点 0）。
 *
 * 然后，游戏在出现以下三种情形之一时结束：
 *  * 如果猫和老鼠出现在同一个节点，猫获胜。
 *  * 如果老鼠到达洞中，老鼠获胜。
 *  * 如果某一位置重复出现（即，玩家的位置和移动顺序都与上一次行动相同），游戏平局。
 *
 * 给你一张图 graph ，并假设两位玩家都都以最佳状态参与游戏：
 *  * 如果老鼠获胜，则返回 1；
 *  * 如果猫获胜，则返回 2；
 *  * 如果平局，则返回 0 。
 */

/**
 * 好像用动态规划好一点,失败
 * 
 * 深度优先,但是得处理下环和重复的问题,广度优先是个比较好的选择吧
 * 从 0 开始遍历,找到到1的最短路径,
 * 然后从猫的2开始查找每个节点是否猫比老鼠距离短,这个耗时就有点长吧~~~
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function (graph) {};

/**
 * 广度优先搜索路径,这样会造成路径数量爆炸吧,剪枝有点不靠谱
 * @param {*} node 
 */
const breadthSearch = (node) => {
  let nodes = [node[0]];
  let road = [];
  while (true) {
    let len = nodes.length;
    while (len) {

    }
  }
};

/**
 * 官方题解思路: 动态规划
 * 相关理论为博弈论的必胜,必败,必和三个概念
 * 
 * 最优策略:
 *  * 争取将必胜状态留给自己,将必败状态留给对方
 *  * 在自己无法到达必胜状态的情况下,争取将必和状态留给自己
 * 
 * 动态规划就是把当前步的所有结果都计算出来放在表里(前一步的结果也参与计算)
 * 
 * 题解:
 *  使用三维数组 dp 表示状态,dp[mouse][cat][turns] 表示从老鼠位于节点 mouse、猫位于节点cat、游戏已经进行了 turns 轮的状态开始
 * 
 *  由于游戏的初始状态为老鼠位于节点1,猫位于节点2,因此 dp[1][2][0]为从初始状态开始的游戏结果
 * 
 *  胜利状态
 *      * mouse = 0 :老鼠跑了
 *      * cat = mouse : 猫抓到老鼠
 *      * turns >= 2n : 每个节点都走了至少两次的情况下还没有到0,说明到不了了
 * 
 *  动态规划的转移状态需要考虑当前玩家所有可能的移动,选择最优策略的移动(问题就是咋算最优)
 * 
 *  对每个可能到达的节点都要进行计算
 * 
 */