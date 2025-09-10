/**
 * 1733. 需要教语言的最少人数
 *
 * 在一个由 m 个用户组成的社交网络里，我们获取到一些用户之间的好友关系。两个用户之间可以相互沟通的条件是他们都掌握同一门语言。
 * 给你一个整数 n ，数组 languages 和数组 friendships ，它们的含义如下：
 *  * 总共有 n 种语言，编号从 1 到 n 。
 *  * languages[i] 是第 i 位用户掌握的语言集合。
 *  * friendships[i] = [u​​​​​​i​​​, v​​​​​​i] 表示 u​​​​​​​​​​​i​​​​​ 和 vi 为好友关系。
 * 你可以选择 一门 语言并教会一些用户，使得所有好友之间都可以相互沟通。请返回你 最少 需要教会多少名用户。
 * 请注意，好友关系没有传递性，也就是说如果 x 和 y 是好友，且 y 和 z 是好友， x 和 z 不一定是好友。
 */

/**
 *
 * 我们的目的是找出需要教语言的最少人数，那么我们首先要找出所有不能相互沟通的好友。
 * 其次，我们只需要找到一种语言，使不能相互沟通的好友都掌握这个语言，就能够保证这些好友之间能够相互沟通。
 * 那么如何找到这种语言呢？我们只需要统计每一种语言被多少人掌握了，然后贪心地选择被最多人掌握的语言当作目标语言即可，这是因为没有掌握该种语言的人数最少。可以证明：选择其他语言，我们需要教的人数一定不会比选择该种语言需要教的人数更少，因此这种贪心策略是正确的。
 *
 *  最大公约数?最大集合?
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
    // 用于记录所有不能相互沟通的用户编号
    const cncon = new Set();
    // 遍历每一对好友关系
    for (const friendship of friendships) {
        // mp 用于存储第一个用户掌握的语言
        const mp = new Set();
        let conm = false; // 标记这对好友是否能沟通
        // 将第一个用户掌握的语言加入 mp
        for (const lan of languages[friendship[0] - 1]) {
            mp.add(lan);
        }
        // 检查第二个用户是否掌握相同语言
        for (const lan of languages[friendship[1] - 1]) {
            if (mp.has(lan)) {
                conm = true; // 有共同语言，可以沟通
                break;
            }
        }

        // 如果不能沟通，将这两个用户加入 cncon 集合
        if (!conm) {
            cncon.add(friendship[0] - 1);
            cncon.add(friendship[1] - 1);
        }
    }

    let max_cnt = 0; // 记录某种语言在 cncon 中被掌握的最多人数
    const cnt = new Array(n + 1).fill(0); // 统计每种语言在 cncon 中出现的次数
    // 遍历所有不能沟通的用户
    for (const person of cncon) {
        // 统计该用户掌握的每种语言
        for (const lan of languages[person]) {
            cnt[lan]++;
            max_cnt = Math.max(max_cnt, cnt[lan]); // 更新最大值
        }
    }

    // 需要教的人数 = 不能沟通的用户总数 - 已经掌握目标语言的人数
    return cncon.size - max_cnt;
};
/**
 * 比较粗暴和简单的思路,肯定不可能到达最优解,但是基本近似最优解了,大部份的情况都是只有这样才能解答,
 * 
 * 执行用时：57 ms, 在所有 JavaScript 提交中击败了66.67%的用户
 * 内存消耗：69.28 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */