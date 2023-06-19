/**
 * 1262. 可被三整除的最大和
 *
 * 给你一个整数数组 nums，请你找出并返回能被三整除的元素最大和。s
 */

/**
 *
 * 把数组中的数分成三部分 a,b,c，它们分别包含所有被 3 除余 0,1,2 的数
 *
 * 这个思路精巧,然后得0的全拿,得1,2的按对拿最大的
 * 三个1内的和3个2内的也可以组成吧?
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  const v = [[], [], []];
  for (const num of nums) {
    v[num % 3].push(num);
  }
  // 排序,这样就能按顺序拿最大的
  v[1].sort((a, b) => b - a);
  v[2].sort((a, b) => b - a);

  let ans = 0;
  const lb = v[1].length;
  const lc = v[2].length;
  // 为什么定位到减二位置
  for (let cntb = lb - 2; cntb <= lb; ++cntb) {
    // 这数还可能太小
    if (cntb >= 0) {
        // 为啥都是减二
      for (let cntc = lc - 2; cntc <= lc; ++cntc) {
        if (cntc >= 0 && (cntb - cntc) % 3 === 0) {
            // 这种逻辑只能进入一次吧
          ans = Math.max(ans, getSum(v[1], 0, cntb) + getSum(v[2], 0, cntc));
        }
      }
    }
  }
  return ans + getSum(v[0], 0, v[0].length);
};

const getSum = (list, start, end) => {
  let sum = 0;
  for (let i = start; i < end; ++i) {
    sum += list[i];
  }
  return sum;
};
