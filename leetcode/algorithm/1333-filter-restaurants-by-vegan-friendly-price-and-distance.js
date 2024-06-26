/**
 * 1333. 餐厅过滤器
 *
 * 给你一个餐馆信息数组 restaurants，其中  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]。你必须使用以下三个过滤器来过滤这些餐馆信息。
 *
 * 其中素食者友好过滤器 veganFriendly 的值可以为 true 或者 false，如果为 true 就意味着你应该只包括 veganFriendlyi 为 true 的餐馆，为 false 则意味着可以包括任何餐馆。此外，我们还有最大价格 maxPrice 和最大距离 maxDistance 两个过滤器，它们分别考虑餐厅的价格因素和距离因素的最大值。
 *
 * 过滤后返回餐馆的 id，按照 rating 从高到低排序。如果 rating 相同，那么按 id 从高到低排序。简单起见， veganFriendlyi 和 veganFriendly 为 true 时取值为 1，为 false 时，取值为 0 。
 */

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  let array = [];
  if (veganFriendly) {
    restaurants.forEach((e) => {
      if (e[2] && e[3] <= maxPrice && e[4] <= maxDistance) {
        array.push(e);
      }
    });
  } else {
    restaurants.forEach((e) => {
      if (e[3] <= maxPrice && e[4] <= maxDistance) {
        array.push(e);
      }
    });
  }
  array.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
  return array.map((e) => e[0]);
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了92.86%的用户
 * 内存消耗：44.75 MB, 在所有 JavaScript 提交中击败了35.71%的用户
 */