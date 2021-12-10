/**
 * 911. 在线选举
 * 
 * 给你两个整数数组 persons 和 times 。在选举中，第 i 张票是在时刻为 times[i] 时投给候选人 persons[i] 的。
 * 
 * 对于发生在时刻 t 的每个查询，需要找出在 t 时刻在选举中领先的候选人的编号。
 * 
 * 在 t 时刻投出的选票也将被计入我们的查询之中。在平局的情况下，最近获得投票的候选人将会获胜。
 * 
 * 实现 TopVotedCandidate 类：
 *  * TopVotedCandidate(int[] persons, int[] times) 使用 persons 和 times 数组初始化对象。
 *  * int q(int t) 根据前面描述的规则，返回在时刻 t 在选举中领先的候选人的编号。
 */
 var TopVotedCandidate = function(persons, times) {
    this.tops = [];
    this.voteCounts = new Map();
    this.voteCounts.set(-1, -1);
    this.times = times;
    let top = -1;
    for (let i = 0; i < persons.length; ++i) {
        const p = persons[i];
        if (!this.voteCounts.has(p)) {
            this.voteCounts.set(p, 0);
        } else {
            this.voteCounts.set(p, this.voteCounts.get(p) + 1);
        }
        if (this.voteCounts.get(p) >= this.voteCounts.get(top)) {
            top = p;
        }
        this.tops.push(top);
    }
};

TopVotedCandidate.prototype.q = function(t) {
    let l = 0, r = this.times.length - 1;
    // 找到满足 times[l] <= t 的最大的 l
    while (l < r) {
        const m = l + Math.floor((r - l + 1) / 2);
        if (this.times[m] <= t) {
            l = m;
        } else {
            r = m - 1;
        }
    }

    return this.tops[l];
};