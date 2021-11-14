/**
 * 677. 键值映射
 * 
 * 实现一个 MapSum 类，支持两个方法，insert 和 sum：
 *  * MapSum() 初始化 MapSum 对象
 *  * void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对将被替代成新的键值对。
 *  * int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。
 */

/**
 * 核心算法就是字典树
 * 
 * 考虑过预处理，在插入时就重新计算每个前缀的值之和，但是这样前缀就得多出很多无用的前缀，
 * 因为要计算的是每个插入的key的所有可能的前缀
 * 
 */
var MapSum = function () {
    /**
     * map = [
     *          {
     *              key:'a',
     *              val:'1',
     *              map:[]
     *          }
     *      ]
     */

    this.map = {
        key: '',
        map: []
    }
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    let existData = this._search(this.map, key, 0)
    if (existData.key) {
        existData.val = val
    } else this._insert(this.map, key, 0, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let data = this._search(this.map, prefix, 0)
    // 广度优先遍历
    let arr = [data]
    let result = 0;
    let arrLen = arr.length
    while (arr.length) {
        while (arrLen--) {
            let temp = arr.shift()
            result += temp.val || 0
            arr.push(...(temp.map || []))
        }
        arrLen = arr.length
    }
    return result
};
/** 
 * @param {object} map 
 * @param {string} key 
 * @param {number} i
 * @return {void}
 */
MapSum.prototype._search = function (map, key, i) {
    if (key.length === i) return map;
    let data = map.map.find(e => e.key === key[i])
    if (data) {
        return this._search(data, key, i + 1)
    }
    else return {}
};

/** 
 * 找位置插入，找到就插入，如果没有位置就得自己创造了
 * @param {object} map 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype._insert = function (map, key, i, val) {
    let tempMap = map
    // 保存当前key的在map里面的存在最后一个字符的位置
    let nextMap = tempMap;
    let keyLen = key.length;
    // 查询当前到哪里
    while (tempMap && tempMap.map) {
        nextMap = tempMap
        tempMap = tempMap.map.find(e => e.key === key[i++])
    }
    tempMap = nextMap
    while (keyLen !== i) {
        nextMap = tempMap
        let template = {
            key: key[i],
            map: []
        }
        tempMap.map.push(template)
        tempMap = tempMap.map.find(e => e.key === key[i]);
        i++
    }
    tempMap.val = val
};
/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

/**
 * ["MapSum","insert","sum","insert","sum","sum","insert","sum","sum","sum","insert","sum","sum","sum","sum","sum","insert","insert","insert","sum","sum","sum"]
 * [[],["aa",3],["a"],["aa",2],["a"],["aa"],["aaa",3],["aaa"],["bbb"],["ccc"],["aewfwaefjeoawefjwoeajfowajfoewajfoawefjeowajfowaj",111],["aa"],["a"],["b"],["c"],["aewfwaefjeoawefjwoeajfowajfoewajfoawefjeowajfowaj"],["bb",143],["cc",144],["aew",145],["bb"],["cc"],["aew"]]
 * 此例堆栈溢出
 * 
 * 数据结构有问题，可以继续优化
 */

/**
 * 官方题解 字典树
 */

class TrieNode {
    constructor() {
        this.val = 0;
        this.next = new Array(26).fill(0);
    }
}

var MapSum = function () {
    this.root = new TrieNode();
    this.map = new Map();

};

MapSum.prototype.insert = function (key, val) {
    const delta = val - (this.map.get(key) || 0);
    this.map.set(key, val);
    let node = this.root;
    for (const c of key) {
        if (node.next[c.charCodeAt() - 'a'.charCodeAt()] === 0) {
            node.next[c.charCodeAt() - 'a'.charCodeAt()] = new TrieNode();
        }
        node = node.next[c.charCodeAt() - 'a'.charCodeAt()];
        node.val += delta;
    }
};

MapSum.prototype.sum = function (prefix) {
    let node = this.root;
    for (const c of prefix) {
        if (node.next[c.charCodeAt() - 'a'.charCodeAt()] === 0) {
            return 0;
        }
        node = node.next[c.charCodeAt() - 'a'.charCodeAt()];
    }
    return node.val;
};
/**
 * 数据结构优化，但是转数字有点没必要吧
 */