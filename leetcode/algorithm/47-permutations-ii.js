/**
 * 47. 全排列 II
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);
  const backtrack = (idx, perm) => {
    if (idx === nums.length) {
      ans.push(perm.slice());
      return;
    }
    // 全排列还是得从头算,然后跳过已经处理的
    for (let i = 0; i < nums.length; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      perm.push(nums[i]);
      vis[i] = true;
      backtrack(idx + 1, perm);
      vis[i] = false;
      perm.pop();
    }
  };
  nums.sort((x, y) => x - y);
  backtrack(0, []);
  return ans;
};
console.log(permuteUnique([1, 1, 2]));
