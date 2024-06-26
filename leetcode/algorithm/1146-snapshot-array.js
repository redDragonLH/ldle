/**
 * 1146. 快照数组
 * 
 * 
 * 实现支持下列接口的「快照数组」- SnapshotArray：
 *  * SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
 *  * void set(index, val) - 会将指定索引 index 处的元素设置为 val。
 *  * int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
 *  * int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。
 */

/**
 * 菜一点的可以copy一份实例,不菜的可以参考下git的commit逻辑
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.data = new Array(length).fill(0)
    this.snapshot = []
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.data[index]=val
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapshot.push(JSON.parse(JSON.stringify(this.data)))
    return this.snapshot.length-1
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    return this.snapshot[snap_id][index]
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
/**
 * 果然超时
 */

/**
 * 其实从没要求给到完整的快照
 * @param {*} length 
 */
var SnapshotArray = function(length) {
    this.snap_cnt = 0;
    this.data = Array.from({length}, () => []);
};

SnapshotArray.prototype.set = function(index, val) {
    this.data[index].push([this.snap_cnt, val]);
};

SnapshotArray.prototype.snap = function() {
    return this.snap_cnt++;
};

SnapshotArray.prototype.get = function(index, snap_id) {
    // 也可以不用二分,就是速度慢
    const idx = binarySearch(index, snap_id, this.data);
    if (idx === 0) {
        return 0;
    }
    return this.data[index][idx - 1][1];
};

const binarySearch = (index, snap_id, data) => {
    let low = 0, high = data[index].length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        const [x, y] = data[index][mid];
        if (x > snap_id + 1 || (x == snap_id + 1 && y >= 0)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}