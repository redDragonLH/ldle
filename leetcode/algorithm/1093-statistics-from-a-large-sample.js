/**
 * 1093. 大样本统计
 *
 * 我们对 0 到 255 之间的整数进行采样，并将结果存储在数组 count 中：count[k] 就是整数 k 在样本中出现的次数。
 * 计算以下统计数据:
 *  * minimum ：样本中的最小元素。
 *  * maximum ：样品中的最大元素。
 *  * mean ：样本的平均值，计算为所有元素的总和除以元素总数。
 *  * median ：
 *  *  * 如果样本的元素个数是奇数，那么一旦样本排序后，中位数 median 就是中间的元素。
 *  *  * 如果样本中有偶数个元素，那么中位数median 就是样本排序后中间两个元素的平均值。
 *  * mode ：样本中出现次数最多的数字。保众数是 唯一 的。
 *
 * 以浮点数数组的形式返回样本的统计信息 [minimum, maximum, mean, median, mode] 。与真实答案误差在 10-5 内的答案都可以通过。
 */
/**
 * 简单题吧~~
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  let result = new Array(5).fill(0.0);
  result[0] = getMinimum[count];
  result[1] = getMaximum[count];
  result[2] = getMean[count];
  return result;
};
const getMinimum = (count) => {
  for (let i = 0; i < 255; i++) {
    if (count[i] > 0) return i;
  }
  return 0;
};
const getMaximum = (count) => {
  for (let i = 254; i > -1; i--) {
    if (count[i] > 0) return i;
  }
  return 0;
};

const getMean = (count) => {
  let sumNum = 0;
  let sample = 0;
  for (let i = 0; i < 255; i++) {
    if (count[i] > 0) {
      sample += count[i];
      sumNum += count[i] * i;
    }
  }
  return sumNum / sample;
};

const getMedian = (count) => {};
const getMode = (count) => {};

/**
 * 官方题解
 */
var sampleStats = function (count) {
  let n = count.length;
  let total = count.reduce((acc, cur) => acc + cur, 0);
  let mean = 0.0;
  let median = 0.0;
  let min_num = 256;
  let max_num = 0;
  let mode = 0;

  let left = parseInt((total + 1) / 2);
  let right = parseInt((total + 2) / 2);
  let cnt = 0;
  let maxfreq = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += count[i] * i;
    if (count[i] > maxfreq) {
      maxfreq = count[i];
      mode = i;
    }
    if (count[i] > 0) {
      if (min_num == 256) {
        min_num = i;
      }
      max_num = i;
    }
    if (cnt < right && cnt + count[i] >= right) {
      median += i;
    }
    if (cnt < left && cnt + count[i] >= left) {
      median += i;
    }
    cnt += count[i];
  }
  mean = sum / total;
  median = median / 2.0;
  return [min_num, max_num, mean, median, mode];
};
