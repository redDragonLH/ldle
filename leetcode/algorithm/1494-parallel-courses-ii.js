/**
 * 1494. 并行课程 II
 *
 * 给你一个整数 n 表示某所大学里课程的数目，编号为 1 到 n ，数组 relations 中， relations[i] = [xi, yi]  表示一个先修课的关系，也就是课程 xi 必须在课程 yi 之前上。同时你还有一个整数 k 。
 *
 * 在一个学期中，你 最多 可以同时上 k 门课，前提是这些课的先修课在之前的学期里已经上过了。
 *
 * 请你返回上完所有课最少需要多少个学期。题目保证一定存在一种上完所有课的方式。
 */

/**
 * 简单来说就是广度优先遍历,找到树状关系图,找到不需要先修课的然后去掉
 * 大概逻辑就是这样,但是细节需要处理尤其是顺序
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function (n, relations, k) {
    let map = new Map();
    let result = 0
    for (const item of relations) {
      map.set(item[1], [...(map.get(item[1]) || []), item[0]]);
      map.set(item[0], [...(map.get(item[0]) || [])]);
    }
    console.log(map)
    while (map.size) {
      let canDelete = k;
      result++
      console.log('result',result)
      for (const item of map.entries()) {
        console.log(item, map.size);
        if (!item[1].length) {
          canDelete--;
          map.delete(item[0]);
          // 删掉所有元素内这个课
          map.forEach((value, key) => {
              console.log(key)
              let index = value.indexOf(item[0])
            if(index)value.splice(index,1)
          });
        }
        if (!canDelete) {
          break;
        }
      }
    }
    return result;
  };