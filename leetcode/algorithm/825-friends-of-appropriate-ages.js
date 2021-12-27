/**
 * 825. 适龄的朋友
 *
 * 在社交媒体网站上有 n 个用户。给你一个整数数组 ages ，其中 ages[i] 是第 i 个用户的年龄。
 *
 * 如果下述任意一个条件为真，那么用户 x 将不会向用户 y（x != y）发送好友请求：
 *  * age[y] <= 0.5 * age[x] + 7
 *  * age[y] > age[x]
 *  * age[y] > 100 && age[x] < 100
 *
 * 否则，x 将会向 y 发送一条好友请求。
 *
 * 注意，如果 x 向 y 发送一条好友请求，y 不必也向 x 发送一条好友请求。另外，用户不会向自己发送好友请求。
 *
 * 返回在该社交媒体网站上产生的好友请求总数。
 */

/**
 * 他要对所有人进行check,除了自己,这循环量得多大~~
 *
 * 超时
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  let result = 0;
  let len = ages.length;
  // n^2的时间复杂度,怎样减少复杂度,用map结构么
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (!(ages[j] <= 0.5 * ages[i] + 7 || ages[j] > ages[i])) {
        result++;
      }
      if (!(ages[i] <= 0.5 * ages[j] + 7 || ages[i] > ages[j])) {
        result++;
      }
    }
  }
  return result;
};

/**
 * 排序加双指针
 *
 * 此题三个条件综合后得出的是一个区间,用双指针或者滑动窗口去包含这个区间,而这个区间的数量就是需要加好友的数量(减掉自己)
 * 
 * 缺乏向右查找的方案,或者说,元素值一样的话应该是right-left * 2 才行吧
 */
var numFriendRequests = function (ages) {
  let result = 0;
  let len = ages.length;
  ages = ages.sort((a, b) => a - b);
  // 依据条件可知,每个元素的范围是(0.5 * ages[x] + 7,x],并且依据推算,x < 15的时候是没有朋友的,那么
  // 初始条件就是right = ages[x] === 15,left = ages[y]=== 0.5 * ages[x] + 7
  let right = ages.findIndex((e) => e >= 15);
  if (right === -1) return result;
  let left = ages.findIndex((e) => e > parseInt(0.5 * ages[right]) + 7);
  // 那结束条件是什么,x === length 么,right就是x吧
  console.log(left, right, ages[left]);
  //   right>left && (result += right - left - 1);
  while (right < len) {
    right >= left && (result += right - left);

    right++;
    while (ages[left] < parseInt(0.5 * ages[right]) + 7) left++;
  }
  return result;
};
