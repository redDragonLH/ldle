/**
 * 2353. 设计食物评分系统
 * 
 * 设计一个支持下述操作的食物评分系统：

 *  * 修改 系统中列出的某种食物的评分。
 *  * 返回系统中某一类烹饪方式下评分最高的食物。
 * 实现 FoodRatings 类：

 *  * FoodRatings(String[] foods, String[] cuisines, int[] ratings) 初始化系统。食物由 foods、cuisines 和 ratings 描述，长度均为 n 。
 *  *  * foods[i] 是第 i 种食物的名字。
 *  *  * cuisines[i] 是第 i 种食物的烹饪方式。
 *  * ratings[i] 是第 i 种食物的最初评分。
 *  * void changeRating(String food, int newRating) 修改名字为 food 的食物的评分。
 *  * String highestRated(String cuisine) 返回指定烹饪方式 cuisine 下评分最高的食物的名字。如果存在并列，返回 字典序较小 的名字。
 * 注意，字符串 x 的字典序比字符串 y 更小的前提是：x 在字典中出现的位置在 y 之前，也就是说，要么 x 是 y 的前缀，或者在满足 x[i] != y[i] 的第一个位置 i 处，x[i] 在字母表中出现的位置在 y[i] 之前。
 */

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  this.foods = foods;
  this.cuisines = cuisines;
  this.ratings = ratings;
  const n = foods.length;
  const indexes = {};
  const map = {};
  for (let i = 0; i < n; i++) {
    const name = foods[i];
    const c = cuisines[i];
    map[c] = map[c] || new MaxHeap(foods, ratings);
    map[c].insert(i);
    indexes[name] = i;
  }
  this.map = map;
  this.indexes = indexes;
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  const { indexes, foods, ratings, map, cuisines } = this;
  const idx = indexes[food];
  ratings[idx] = newRating;
  const heap = map[cuisines[idx]];
  heap.update(idx, newRating);
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const { map, foods } = this;
  return foods[map[cuisine].max()];
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

/* 大顶堆 */
class MaxHeap {
  constructor(foods, ratings) {
    this.arr = [-1]; // Array<质量>
    this.foods = foods;
    this.ratings = ratings;
  }
  insert(x) {
    this.arr.push(x);
    this.swim(this.arr.length - 1);
  }
  update(idx, newRating) {
    const { arr } = this;
    const index = arr.findIndex((it) => it === idx);
    if (index === -1) {
      return;
    }
    arr.splice(index, 1);
    this.ratings[idx] = newRating;
    this.insert(idx);

    // 得分更改，重排堆中元素
    let j = arr.length - 1;
    while (j > 0) {
      this.swim(j);
      j--;
    }
  }
  swim(i) {
    const parent = this.parent;
    while (parent(i) > 0 && this.more(i, parent(i))) {
      this.swap(i, parent(i));
      i = parent(i);
    }
  }
  max() {
    return this.arr[1];
  }
  sink(i) {
    const { left, right, arr } = this;
    const n = arr.length;
    while (left(i) < n) {
      let temp = i;
      if (this.more(left(i), temp)) temp = left(i);
      if (right(i) < n && this.more(right(i), temp)) temp = right(i);
      if (i === temp) {
        break;
      }
      this.swap(i, temp);
      i = temp;
    }
  }
  more(i, j) {
    const { foods, ratings, arr } = this;
    if (ratings[arr[i]] !== ratings[arr[j]]) {
      return ratings[arr[i]] > ratings[arr[j]];
    }
    if (foods[arr[i]] < foods[arr[j]]) {
      return true;
    }
    return false;
  }
  parent(i) {
    return i >> 1;
  }
  swap(i, j) {
    const { arr } = this;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  left(i) {
    return i * 2;
  }
  right(i) {
    return i * 2 + 1;
  }
  get size() {
    return this.arr.length - 1;
  }
}
