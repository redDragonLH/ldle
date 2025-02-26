/**
 * 1472. 设计浏览器历史记录
 *
 * 你有一个只支持单个标签页的 浏览器 ，最开始你浏览的网页是 homepage ，你可以访问其他的网站 url ，也可以在浏览历史中后退 steps 步或前进 steps 步。
 * 请你实现 BrowserHistory 类：
 *  * BrowserHistory(string homepage) ，用 homepage 初始化浏览器类。
 *  * void visit(string url) 从当前页跳转访问 url 对应的页面  。执行此操作会把浏览历史前进的记录全部删除。
 *  * string back(int steps) 在浏览历史中后退 steps 步。如果你只能在浏览历史中后退至多 x 步且 steps > x ，那么你只后退 x 步。请返回后退 至多 steps 步以后的 url 。
 *  * string forward(int steps) 在浏览历史中前进 steps 步。如果你只能在浏览历史中前进至多 x 步且 steps > x ，那么你只前进 x 步。请返回前进 至多 steps步以后的 url 。
 */

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.current = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.history = this.history.slice(0, this.current + 1);
  this.history.push(url);
  this.current++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.current = Math.max(this.current - steps, 0);
  return this.history[this.current];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.current = Math.min(this.current + steps, this.history.length - 1);
  return this.history[this.current];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
/**
 * 执行用时：22 ms, 在所有 JavaScript 提交中击败了97.01%的用户
 * 内存消耗：65.50 MB, 在所有 JavaScript 提交中击败了5.97%的用户
 */