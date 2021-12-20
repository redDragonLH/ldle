/**
 * 475. 供暖器
 *
 * 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
 *
 * 在加热器的加热半径范围内的每个房屋都可以获得供暖。
 *
 * 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。
 *
 * 说明：所有供暖器都遵循你的半径标准，加热的半径也一样。
 */

/**
 * 必须覆盖所有房屋,且所有加热器半径是一样的,那就得找到离当前供暖器最远的,且没有被其他供暖器包含的点
 *
 * 问题也在于判断一个供暖器所存在的最短半径需要配合前后两个供暖器的位置
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    // 要判断三个供暖器的相对位置,且要判断房屋的位置
    // 这个逻辑不太好想
  for (let i = 0; i < heaters; i++) {
  }
};

/**
 * 官方题解 排序+二分
 * 
 */
 var findRadius = function(houses, heaters) {
    let ans = 0;
    heaters.sort((a, b) => a - b);
    for (const house of houses) {
        const i = binarySearch(heaters, house);
        const j = i + 1;
        const leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
        const rightDistance = j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
        const curDistance = Math.min(leftDistance, rightDistance);
        ans = Math.max(ans, curDistance);
    }
    return ans;
};

const binarySearch = (nums, target) => {
    let left = 0, right = nums.length - 1;
    if (nums[left] > target) {
        return -1;
    }
    while (left < right) {
        const mid = Math.floor((right - left + 1) / 2) + left;
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
}