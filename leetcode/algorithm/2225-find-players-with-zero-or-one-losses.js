/**
 * 2225. 找出输掉零场或一场比赛的玩家
 * 
 * 给你一个整数数组 matches 其中 matches[i] = [winneri, loseri] 表示在一场比赛中 winneri 击败了 loseri 。
 * 返回一个长度为 2 的列表 answer ：
 *  * answer[0] 是所有 没有 输掉任何比赛的玩家列表。
 *  * answer[1] 是所有恰好输掉 一场 比赛的玩家列表。
 * 
 * 两个列表中的值都应该按 递增 顺序返回。
 * 
 * 注意：
 *  * 只考虑那些参与 至少一场 比赛的玩家。
 *  * 生成的测试用例保证 不存在 两场比赛结果 相同 。
 */

/**
 * 根据注意,必须是参加比赛的玩家,不过话说必须要参加才能赢或输吧
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = new Set();
    let losers = new Set();
    
    for (let match of matches) {
        let [winner, loser] = match;
        winners.add(winner);
        losers.add(loser);
    }
    
    let noLossPlayers = [];
    let oneLossPlayers = [];
    
    for (let player of [...winners,...losers]) {
        if (!losers.has(player) && !noLossPlayers.includes(player)) {
            noLossPlayers.push(player);
        } else if (matches.filter(match => match[1] === player).length === 1 && !oneLossPlayers.includes(player)) {
            oneLossPlayers.push(player);
        }
    }
    
    return [noLossPlayers.sort((a, b) => a - b), oneLossPlayers.sort((a, b) => a - b)];
};
/**
 * 超时
 *   
 * */