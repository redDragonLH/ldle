/**
 * 3508. 设计路由器
 *
 * 请你设计一个数据结构来高效管理网络路由器中的数据包。每个数据包包含以下属性：
 *  * source：生成该数据包的机器的唯一标识符。
 *  * destination：目标机器的唯一标识符。
 *  * timestamp：该数据包到达路由器的时间戳。
 * 实现 Router 类：
 * Router(int memoryLimit)：初始化路由器对象，并设置固定的内存限制。
 *  * memoryLimit 是路由器在任意时间点可以存储的 最大 数据包数量。
 *  * 如果添加一个新数据包会超过这个限制，则必须移除 最旧的 数据包以腾出空间。
 * bool addPacket(int source, int destination, int timestamp)：将具有给定属性的数据包添加到路由器。
 *  * 如果路由器中已经存在一个具有相同 source、destination 和 timestamp 的数据包，则视为重复数据包。
 *  * 如果数据包成功添加（即不是重复数据包），返回 true；否则返回 false。
 * int[] forwardPacket()：以 FIFO（先进先出）顺序转发下一个数据包。
 *  * 从存储中移除该数据包。
 *  * 以数组 [source, destination, timestamp] 的形式返回该数据包。
 *  * 如果没有数据包可以转发，则返回空数组。
 * int getCount(int destination, int startTime, int endTime)：
 *  * 返回当前存储在路由器中（即尚未转发）的，且目标地址为指定 destination 且时间戳在范围 [startTime, endTime]（包括两端）内的数据包数量。
 * 注意：对于 addPacket 的查询会按照 timestamp 的递增顺序进行。
 */
/**
 * @param {number} memoryLimit
 */
class Router {
  constructor(memoryLimit) {
    this.memoryLimit = memoryLimit;
    this.packetQ = [];
    this.packetSet = new Set();
    this.destToTimestamps = new Map();
  }

  _key(p) {
    return `${p.source},${p.destination},${p.timestamp}`;
  }

  addPacket(source, destination, timestamp) {
    const packet = { source, destination, timestamp };
    const key = this._key(packet);
    if (this.packetSet.has(key)) return false;
    if (this.packetQ.length === this.memoryLimit) this.forwardPacket();
    this.packetQ.push(packet);
    this.packetSet.add(key);
    if (!this.destToTimestamps.has(destination))
      this.destToTimestamps.set(destination, { timestamps: [], head: 0 });
    this.destToTimestamps.get(destination).timestamps.push(timestamp);
    return true;
  }

  forwardPacket() {
    if (this.packetQ.length === 0) return [];
    const packet = this.packetQ.shift();
    this.packetSet.delete(this._key(packet));
    this.destToTimestamps.get(packet.destination).head++;
    return [packet.source, packet.destination, packet.timestamp];
  }

  getCount(destination, startTime, endTime) {
    const p = this.destToTimestamps.get(destination);
    if (!p) return 0;
    const left = this.lowerBound(p.timestamps, startTime, p.head);
    const right = this.lowerBound(p.timestamps, endTime + 1, p.head);
    return right - left;
  }

  lowerBound(nums, target, left) {
    let right = nums.length;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (nums[mid] >= target) right = mid;
      else left = mid + 1;
    }
    return right;
  }
}

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
