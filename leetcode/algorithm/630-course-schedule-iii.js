/**
 * 630. 课程表 III
 *
 * 这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，其中 courses[i] = [durationi, lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。
 *
 * 你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。
 *
 * 返回你最多可以修读的课程数目。
 */

/**
 * 看起来逻辑比较直观,直观的逻辑有点过不去,要动态规划么
 * 排序后贪遍历的方案不能完全解决这个问题,排序的方案需要规划
 *
 * 排序后遍历:失败
 * @param {number[][]} courses
 * @return {number}
 */

var scheduleCourse = function (courses) {
  // 按照到期日从小到大排列  如果把时长也包含到排序中用例,过不去,不包含也过不去,这个方案有点问题,但是这也是要解决的问题,如何解决或规避
  let sortCourses = courses.sort((a, b) => a[1] - b[1] && a[0] - b[0]);

  let currentTime = 0;
  let result = 0;
  sortCourses.forEach((e) => {
    //判断当前时间是否超出due day
    if (e[1] >= currentTime + e[0]) {
      currentTime += e[0];
      result++;
    }
  });
  return result;
};

/**
 * 优化排序:失败
 *
 * 问题: [[5, 5], [4, 6], [2, 6]] 类似用例的问题无法解决
 *
 * 必须得判断出怎么样是最多的数量,难道多次循环么
 */
var scheduleCourse = function (courses) {
  // 按照到期日从小到大排列  如果把时长也包含到排序中用例,过不去,不包含也过不去,这个方案有点问题,但是这也是要解决的问题,如何解决或规避
  let sortCourses = courses.sort((a, b) => {
    if (a[1] - b[1] === 0) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let currentTime = 0;
  let result = 0;
  sortCourses.forEach((e) => {
    //判断当前时间是否超出due day
    if (e[1] >= currentTime + e[0]) {
      currentTime += e[0];
      result++;
    }
  });
  return result;
};

/**
 * 优化:二重遍历
 * 二重遍历也有用例通不过,贪心好像解决不了这个问题
 */
var scheduleCourse = function (courses) {
  let sortCourses = courses.sort((a, b) => a[1] - b[1]);
  let result = 0;
  let len = courses.length;
  for (let i = 0; i < len; i++) {
    let currentTime = 0;
    let count = 0;
    for (let j = i; j < len; j++) {
      if (sortCourses[j][1] >= currentTime + sortCourses[j][0]) {
        currentTime += sortCourses[j][0];
        count++;
        result = Math.max(count, result);
      }
    }
  }
  return result;
};


/**
 * 官方题解,: 优先队列+贪心
 * 
 * 喵得,需要优先队列结构
 */