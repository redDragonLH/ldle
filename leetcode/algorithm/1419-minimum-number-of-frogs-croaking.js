/**
 * 1419. 数青蛙
 *
 * 给你一个字符串 croakOfFrogs，它表示不同青蛙发出的蛙鸣声（字符串 "croak" ）的组合。由于同一时间可以有多只青蛙呱呱作响，所以 croakOfFrogs 中会混合多个 “croak” 。
 *
 * 请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。
 *
 * 要想发出蛙鸣 "croak"，青蛙必须 依序 输出 ‘c’, ’r’, ’o’, ’a’, ’k’ 这 5 个字母。如果没有输出全部五个字母，那么它就不会发出声音。如果字符串 croakOfFrogs 不是由若干有效的 "croak" 字符混合而成，请返回 -1 。
 */

/**
 * 用栈,但是要计算最多嵌套几层
 * 这个计算比较麻烦
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
    
    let stack = [];

};

/**
 * 官方题解
 * 纯计数
 * @param {*} croakOfFrogs 
 * @returns 
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    if (croakOfFrogs.length % 5 !== 0) {
        return -1;
    }
    let res = 0, frogNum = 0;
    const cnt = new Array(4).fill(0);
    const map = new Map();
    map.set('c', 0);
    map.set('r', 1);
    map.set('o', 2);
    map.set('a', 3);
    map.set('k', 4);
    for (let i = 0; i < croakOfFrogs.length; i++) {
        const c = croakOfFrogs[i];
        const t = map.get(c);
        if (t === 0) {
            cnt[t]++;
            frogNum++;
            if (frogNum > res) {
                res = frogNum;
            }
        } else {
            if (cnt[t - 1] === 0) {
                return -1;
            }
            cnt[t - 1]--;
            if (t === 4) {
                frogNum--;
            } else {
                cnt[t]++;
            }
        }
    }
    if (frogNum > 0) {
        return -1;
    }
    return res;
};