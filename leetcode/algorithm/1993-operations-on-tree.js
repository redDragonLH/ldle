/**
 * 1993. 树上的操作
 *
 * 给你一棵 n 个节点的树，编号从 0 到 n - 1 ，以父节点数组 parent 的形式给出，其中 parent[i] 是第 i 个节点的父节点。
 * 树的根节点为 0 号节点，所以 parent[0] = -1 ，因为它没有父节点。你想要设计一个数据结构实现树里面对节点的加锁，解锁和升级操作。
 *
 * 数据结构需要支持如下函数：
 *  * Lock：指定用户给指定节点 上锁 ，上锁后其他用户将无法给同一节点上锁。只有当节点处于未上锁的状态下，才能进行上锁操作。
 *  * Unlock：指定用户给指定节点 解锁 ，只有当指定节点当前正被指定用户锁住时，才能执行该解锁操作。
 *  * Upgrade：指定用户给指定节点 上锁 ，并且将该节点的所有子孙节点 解锁 。只有如下 3 个条件 全部 满足时才能执行升级操作：
 *  *  * 指定节点当前状态为未上锁。
 *  *  * 指定节点至少有一个上锁状态的子孙节点（可以是 任意 用户上锁的）。
 *  *  * 指定节点没有任何上锁的祖先节点。
 *
 * 请你实现 LockingTree 类：
 *  * LockingTree(int[] parent) 用父节点数组初始化数据结构。
 *  * lock(int num, int user) 如果 id 为 user 的用户可以给节点 num 上锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 id 为 user 的用户 上锁 。
 *  * unlock(int num, int user) 如果 id 为 user 的用户可以给节点 num 解锁，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 变为 未上锁 状态。
 *  * upgrade(int num, int user) 如果 id 为 user 的用户可以给节点 num 升级，那么返回 true ，否则返回 false 。如果可以执行此操作，节点 num 会被 升级 。
 */
var LockingTree = function (parent) {
  const n = parent.length;
  this.parent = parent;
  this.lockNodeUser = new Array(n).fill(-1);
  this.children = new Array(n).fill(0).map(() => new Array());
  for (let i = 0; i < n; i++) {
    const p = parent[i];
    if (p != -1) {
      this.children[p].push(i);
    }
  }
};

LockingTree.prototype.lock = function (num, user) {
  if (this.lockNodeUser[num] == -1) {
    this.lockNodeUser[num] = user;
    return true;
  }
  return false;
};

LockingTree.prototype.unlock = function (num, user) {
  if (this.lockNodeUser[num] == user) {
    this.lockNodeUser[num] = -1;
    return true;
  }
  return false;
};

LockingTree.prototype.upgrade = function (num, user) {
  res =
    this.lockNodeUser[num] == -1 &&
    !this.hasLockedAncestor(num) &&
    this.checkAndUnlockDescendant(num);
  if (res) {
    this.lockNodeUser[num] = user;
  }
  return res;
};

LockingTree.prototype.hasLockedAncestor = function (num) {
  num = this.parent[num];
  while (num != -1) {
    if (this.lockNodeUser[num] != -1) {
      return true;
    } else {
      num = this.parent[num];
    }
  }
  return false;
};

LockingTree.prototype.checkAndUnlockDescendant = function (num) {
  res = this.lockNodeUser[num] != -1;
  this.lockNodeUser[num] = -1;
  for (const child of this.children[num]) {
    res |= this.checkAndUnlockDescendant(child);
  }
  return res;
};
