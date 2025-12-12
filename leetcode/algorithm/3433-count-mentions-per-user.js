/**
 * 3433. 统计用户被提及情况
 * 
 * 给你一个整数 numberOfUsers 表示用户总数，另有一个大小为 n x 3 的数组 events 。

 * 每个 events[i] 都属于下述两种类型之一：

 *  1 消息事件（Message Event）：["MESSAGE", "timestampi", "mentions_stringi"]
 *  *  * 事件表示在 timestampi 时，一组用户被消息提及。
 *  *  * mentions_stringi 字符串包含下述标识符之一：
 *  *  *  * id<number>：其中 <number> 是一个区间 [0,numberOfUsers - 1] 内的整数。可以用单个空格分隔 多个 id ，并且 id 可能重复。此外，这种形式可以提及离线用户。
 *  *  *  * ALL：提及 所有 用户。
 *  *  *  * HERE：提及所有 在线 用户。
 * 
 *  2 离线事件（Offline Event）：["OFFLINE", "timestampi", "idi"]
 *  *  * 事件表示用户 idi 在 timestampi 时变为离线状态 60 个单位时间。用户会在 timestampi + 60 时自动再次上线。
 * 返回数组 mentions ，其中 mentions[i] 表示  id 为  i 的用户在所有 MESSAGE 事件中被提及的次数。
 * 最初所有用户都处于在线状态，并且如果某个用户离线或者重新上线，其对应的状态变更将会在所有相同时间发生的消息事件之前进行处理和同步。
 * 注意 在单条消息中，同一个用户可能会被提及多次。每次提及都需要被 分别 统计。
 */
/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
  // 先按时间排序，若时间相同，OFFLINE事件优先于MESSAGE事件
  events.sort((a, b) => {
    const timeA = parseInt(a[1]);
    const timeB = parseInt(b[1]);
    if (timeA !== timeB) {
      return timeA - timeB;
    }
    // MESSAGE事件排在OFFLINE事件后面
    return (b[0] === "MESSAGE" ? 0 : 1) - (a[0] === "MESSAGE" ? 0 : 1);
  });

  // 统计每个用户被提及的次数
  const count = new Array(numberOfUsers).fill(0);
  // 记录每个用户下次上线的时间（0表示在线）
  const nextOnlineTime = new Array(numberOfUsers).fill(0);

  for (const event of events) {
    const curTime = parseInt(event[1]);
    const type = event[0];

    if (type === "MESSAGE") {
      const target = event[2];
      if (target === "ALL") {
        // ALL：所有用户都被提及
        for (let i = 0; i < numberOfUsers; i++) {
          count[i]++;
        }
      } else if (target === "HERE") {
        // HERE：所有当前在线用户被提及
        for (let i = 0; i < numberOfUsers; i++) {
          if (nextOnlineTime[i] <= curTime) {
            count[i]++;
          }
        }
      } else {
        // id<number>：按空格分割，可能有重复
        const users = target.split(" ");
        for (const user of users) {
          const idx = parseInt(user.substring(2));
          count[idx]++;
        }
      }
    } else {
      // OFFLINE事件，用户curTime+60后自动上线
      const idx = parseInt(event[2]);
      nextOnlineTime[idx] = curTime + 60;
    }
  }

  return count;
};
/**
 * 执行用时 :16 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :64.92 MB, 在所有 JavaScript 提交中击败了83.33%的用户
 */