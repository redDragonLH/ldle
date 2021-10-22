/**
 * 229. 求众数 II
 *
 * 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 */
/**
 * 思路是先计算每个元素有多少个,然后循环检查是否超出三分之一
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let result = [];
  let len = nums.length;
  let Standard = len / 3;
  nums.forEach((e) => {
    map.set(e, (map.get(e) || 0) + 1);
  });
  console.log(map);
  for (let [key, value] of map) {
    if (value > Standard) {
      result.push(key);
    }
  }
  return result;
};
/**
 * 遍历多次,效率不高
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了22.10%的用户
 * 内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了81.77%的用户
 */

/**
 * 摩尔投票法
 * 
 * 内容: 摩尔投票法的核心思想为对拼消耗
 *  核心思想基于这样的事实逻辑:
 *      *   每次从序列里选择两个不相同的数字删掉(或称为「抵消」),最后剩下一个数字或几个相同的数字,就是出现次数大于总数一半的那个元素,
 */
 var majorityElement = function(nums) {
    let element1 = 0;
    let element2 = 0;
    let vote1 = 0;
    let vote2 = 0;

    for (const num of nums) {
        if (vote1 > 0 && num === element1) { //如果该元素为第一个元素，则计数加1
            vote1++;
        } else if (vote2 > 0 && num === element2) { //如果该元素为第二个元素，则计数加1
            vote2++;
        } else if (vote1 === 0) { // 选择第一个元素
            element1 = num;
            vote1++;
        } else if (vote2 === 0) { // 选择第二个元素
            element2 = num;
            vote2++;
        } else { //如果三个元素均不相同，则相互抵消1次
            vote1--;
            vote2--;
        }
    }

    let cnt1 = 0;
    let cnt2 = 0;
    for (const num of nums) {
        if (vote1 > 0 && num === element1) {
            cnt1++;
        }
        if (vote2 > 0 && num === element2) {
            cnt2++;
        }
    }
    // 检测元素出现的次数是否满足要求
    const ans = [];
    if (vote1 > 0 && cnt1 > Math.floor(nums.length / 3)) {
        ans.push(element1);
    }
    if (vote2 > 0 && cnt2 > Math.floor(nums.length / 3)) {
        ans.push(element2);
    }

    return ans;
};