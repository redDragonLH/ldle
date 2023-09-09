/**
 * 210. 课程表 II
 * 
 * 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
 * 
 * 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
 * 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。
 */
var findOrder = function(numCourses, prerequisites) {
    let result = []

    if(!prerequisites.length){
        for (let i = 0; i < numCourses; i++) {
            result.push(i)
        }
        return result
    }
    let map = new Map();

    for (let i = 0; i < numCourses; i++) {
        map.set(i,[])
    }
      for (const pre of prerequisites) {
        if(map.has(pre[0])){
          map.set(pre[0],[...map.get(pre[0]),pre[1]])
        }

      }
      while(map.size){
        let zero=-1;
        // 找到入度为零的元素
        for (const [key,value] of map) {
            if(!value.length){
              zero = key;
              map.delete(key)
              break
          }
        }
        if(zero === -1) return []
        result.push(zero)
        // 删除所有字段数组里面的入度为零的元素
        for (const [key,value] of map) {
            let index = value.indexOf(zero)
            if(index>-1){
              value.splice(index, 1)
              map.set(key,value)
            }
        }
      }
      return result;
  };

  /**
 * 执行用时：144 ms, 在所有 JavaScript 提交中击败了10.19%的用户
 * 内存消耗：49.18 MB, 在所有 JavaScript 提交中击败了5.09%的用户
 */