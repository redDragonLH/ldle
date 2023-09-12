/**
 * 1462. 课程表 IV
 *
 * 你总共需要上 numCourses 门课，课程编号依次为 0 到 numCourses-1 。你会得到一个数组 prerequisite ，其中 prerequisites[i] = [ai, bi] 表示如果你想选 bi 课程，你 必须 先选 ai 课程。
 *
 * 有的课会有直接的先修课程，比如如果想上课程 1 ，你必须先上课程 0 ，那么会以 [0,1] 数对的形式给出先修课程数对。
 * 先决条件也可以是 间接 的。如果课程 a 是课程 b 的先决条件，课程 b 是课程 c 的先决条件，那么课程 a 就是课程 c 的先决条件。
 *
 * 你也得到一个数组 queries ，其中 queries[j] = [uj, vj]。对于第 j 个查询，您应该回答课程 uj 是否是课程 vj 的先决条件。
 *
 * 返回一个布尔数组 answer ，其中 answer[j] 是第 j 个查询的答案。
 */
/**
 * 得有一个图或者链表类似的数据结构，实在不行弄个map吧
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  let map = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }

  for (const item of prerequisites) {
    map.set(item[1], [...map.get(item[1]), item[0]]);
  }
  let result = [];
  outer_block: for (const item of queries) {
    let prerep = [...map.get(item[1])];

    while (prerep.length) {
      let len = prerep.length;
      for (let i = 0; i < len; i++) {
        let element = prerep.shift();

        if (element === item[0]) {
          result.push(true);
          continue outer_block;
        } else {
          prerep.push(...map.get(element));
        }
      }
    }
    result.push(false);
  }
  return result;
};
/**
 * 超时
 */

/**
 * 官方题解 广度优先搜索+拓扑排序
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    let g = new Array(numCourses).fill(0).map(() => new Array());
    let indgree = new Array(numCourses).fill(0); 
    let isPre = new Array(numCourses).fill(0).map(() => new Array(numCourses).fill(false));
    for (let p of prerequisites) {
        ++indgree[p[1]];
        g[p[0]].push(p[1]);
    }
    let q = [];
    for (let i = 0; i < numCourses; ++i) {
        if (indgree[i] == 0) {
            q.push(i);
        }
    }

    while (q.length) {
        let cur = q.shift();
        for (let ne of g[cur]) {
            isPre[cur][ne] = true;
            for (let i = 0; i < numCourses; ++i) {
                isPre[i][ne] = isPre[i][ne] || isPre[i][cur];
            }
            --indgree[ne];
            if (indgree[ne] == 0) {
                q.push(ne);
            }
        }
    }
    res = [];
    for (let query of queries) {
        res.push(isPre[query[0]][query[1]]);
    }
    return res;
};