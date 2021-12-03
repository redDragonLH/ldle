/**
 * 1005. K 次取反后最大化的数组和
 *
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
 *  * 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
 *
 * 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
 *
 * 以这种方式修改数组后，返回数组 可能的最大和 。
 */

/**
 * 感觉像是找寻最小值
 *
 * 这种分支太多了,非常容易陷进分支陷阱,一直加特殊处理分支
 *
 * 超时~
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let index = 0;
  while (k) {
    if (nums[index] < 0) {
      nums[index] = -nums[index];
      index++;
      k--;
    } else if (nums[index] >= 0 && !(k % 2)) {
      return nums.reduce((p, c) => p + c, 0);
    } else if (nums[index] >= 0 && k % 2) {
      // 到这个阶段的时候由于必须要翻转一个,那么就得找到最小的数据,而由于前边得到元素已经翻转
      // 所以当前数据表示为图形是一个两侧高中间低的低谷,而最小值就是当前的元素和前一个已翻转元素的最小的一个
      if (index === 0 || nums[index - 1] > nums[index]) {
        nums[index] = -nums[index];
      } else {
        nums[index - 1] = -nums[index - 1];
      }
      return nums.reduce((p, c) => p + c, 0);
    }
  }

  return nums.reduce((p, c) => p + c, 0); //补全逻辑
};

/**
 * 因为可以重复选择下标,那么其实就只有两种状态,选择1,2,而奇数k必定有个选择取反1次,取反两次等于没取反,
 * 那就看看有多少小于0的数,能支持一次取反,如果剩下的k是偶数则不必再处理,是奇数的话就得找到最小的数取反,
 *
 * 小顶堆~
 */

/**
 * 官方题解
 */
 var largestSumAfterKNegations = function(nums, k) {
    const freq = new Map();
    // 转为map数据
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    // 获取当前的总和吗?
    let ans = _.sum(nums);
    // 暂时只处理负数
    for (let i = -100; i < 0; ++i) {
        if (freq.has(i)) {
            const ops = Math.min(k, freq.get(i));
            ans += (-i) * ops * 2;
            freq.set(i, freq.get(i) - ops);
            freq.set(-i, (freq.get(-i) || 0) + ops);
            k -= ops;
            if (k === 0) {
                break;
            }
        }
    }
    // 然后就是检查k是奇数的情况
    if (k > 0 && k % 2 === 1 && !freq.has(0)) {
        for (let i = 1; i <= 100; ++i) {
            if (freq.has(i)) {
                ans -= i * 2;
                break;
            }
        }
    }
    return ans;
};
/**
 * 优化点:
 *  1. 循环要比我的少,只有100个,
 *  2. 减少了排序
 */