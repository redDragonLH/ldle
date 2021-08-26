/**
 * 881. 救生艇
 *
 * 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。
 *
 * 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。
 *
 * 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。
 */

/**
 * 估计得确保每次承载的两人重量尽量靠近limit
 *
 * 只处理了两个元素,没有处理单个元素的情况
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let result = 0;
  let len = people.length;

  let count = 0;
  // 循环过的元素不会超过总数
  while (count < len) {
    let temp = [null, null];
    let left = 0,
      right = len - 1;
    // 双指针,获取
    while (left < right) {
      //已处理过,跳过
      if (people[left] == null) {
        left++;
        continue;
      }
      if (people[right] == null) {
        right--;
        continue;
      }
      // 超过肯定不行
      if (people[left] + people[right] > limit) {
        right--;
        // 小于limit的话就增加左指针并判断是不是更靠近limit
      } else if (people[left] + people[right] <= limit) {
        if (temp[0] === null) {
          temp = [left, right];
          left++;
          continue;
        }
        if (people[temp[0]] + people[temp[1]] < people[left] + people[right]) {
          temp = [left, right];
        }
        left++;
      }
    }
    // 收尾
    people[temp[0]] = people[temp[1]] = null;
    if (temp[0] === temp[1]) count += 1;
    else count += 2;

    result++;
  }
  return result;
};
/**
 * 超时了,估计是已经处理过的元素不应该再循环到
 */

/**
 * 官方题解:贪心
 * 
 *  * 若他不能与体重最重的人同乘一艘船，那么体重最重的人无法与任何人同乘一艘船，此时应单独分配一艘船给体重最重的人。从 people 中去掉体重最重的人后，我们缩小了问题的规模，变成求解剩余 n-1n−1 个人所需的最小船数，将其加一即为原问题的答案。
 *  * 若他能与体重最重的人同乘一艘船，那么他能与其余任何人同乘一艘船，为了尽可能地利用船的承载重量，选择与体重最重的人同乘一艘船是最优的。从 people 中去掉体重最轻和体重最重的人后，我们缩小了问题的规模，变成求解剩余 n-2n−2 个人所需的最小船数，将其加一即为原问题的答案。
 */
 var numRescueBoats = function(people, limit) {
    let ans = 0;
    people.sort((a, b) => a - b);
    let light = 0, heavy = people.length - 1;
    while (light <= heavy) {
        if (people[light] + people[heavy] <= limit) {
            ++light;
        }
        --heavy;
        ++ans;
    }
    return ans;
};