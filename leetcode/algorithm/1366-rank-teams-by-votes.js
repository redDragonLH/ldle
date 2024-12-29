/**
 * 1366. 通过投票对团队排名
 *
 * 现在有一个特殊的排名系统，依据参赛团队在投票人心中的次序进行排名，每个投票者都需要按从高到低的顺序对参与排名的所有团队进行排位。
 * 排名规则如下：
 *  * 参赛团队的排名次序依照其所获「排位第一」的票的多少决定。如果存在多个团队并列的情况，将继续考虑其「排位第二」的票的数量。以此类推，直到不再存在并列的情况。
 *  * 如果在考虑完所有投票情况后仍然出现并列现象，则根据团队字母的字母顺序进行排名。
 * 给你一个字符串数组 votes 代表全体投票者给出的排位情况，请你根据上述排名规则对所有参赛团队进行排名。
 * 请你返回能表示按排名系统 排序后 的所有团队排名的字符串。
 */
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  const n = votes.length;
  const ranking = {};
  // 初始化哈希映射
  for (const vid of votes[0]) {
    ranking[vid] = Array(votes[0].length).fill(0);
  }
  // 遍历统计
  for (const vote of votes) {
    for (let i = 0; i < vote.length; ++i) {
      ranking[vote[i]][i]++;
    }
  }

  // 取出所有的键值对
  const result = Object.entries(ranking);
  // 排序
  result.sort((a, b) => {
    for (let i = 0; i < a[1].length; i++) {
      if (a[1][i] !== b[1][i]) {
        return b[1][i] - a[1][i];
      }
    }
    return a[0].localeCompare(b[0]);
  });
  return result.map(([vid]) => vid).join("");
};
