/**
 * 672. 灯泡开关 Ⅱ
 *
 * 房间中有 n 只已经打开的灯泡，编号从 1 到 n 。墙上挂着 4 个开关 。
 *
 * 这 4 个开关各自都具有不同的功能，其中：
 *  * 开关 1 ：反转当前所有灯的状态（即开变为关，关变为开）
 *  * 开关 2 ：反转编号为偶数的灯的状态（即 2, 4, ...）
 *  * 开关 3 ：反转编号为奇数的灯的状态（即 1, 3, ...）
 *  * 开关 4 ：反转编号为 j = 3k + 1 的灯的状态，其中 k = 0, 1, 2, ...（即 1, 4, 7, 10, ...）
 * 你必须 恰好 按压开关 presses 次。每次按压，你都需要从 4 个开关中选出一个来执行按压操作。
 *
 * 给你两个整数 n 和 presses ，执行完所有按压之后，返回 不同可能状态 的数量。
 */

/**
 * 官方题解: 降低搜索空间
 *  理论就是可以用暴力遍历的方式获取到最终结果,但是如果用暴力,那么每次就要消耗 O(n ✖️ 4^presses)的时间,
 *  那就必须要考虑降低搜索空间
 *      首先,不需要考虑按钮按动的顺序,而只需要考虑每个按钮被按了几次,在按钮按动次数一样的情况下,顺序不影响灯泡最后的状态
 *      更近一步的,不需要考虑每个按钮具体被按了几次,而只需要考虑被按了奇数次还是偶数次即可,某个键每多按或少按2次及其倍数次,也不影响最后的状态
 * 
 *      其次,观察每个按钮的效果,可以发现所有按钮可以根据编号划分为以下4组,周期为6,下列编号中 k>=0
 *          * 编号为 6k + 1,受按钮 1,3,4影响
 *          * 编号为 6k + 2,6k+6,受按钮1,2影响
 *          * 编号为 6k + 3,6k + 5,受按钮1,3 影响
 *          * 编号为 6k + 4,受按钮1,2,4影响 
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
 var flipLights = function(n, presses) {
    const seen = new Set();
    for (let i = 0; i < 1 << 4; i++) {
        const pressArr = new Array(4).fill(0);
        for (let j = 0; j < 4; j++) {
            pressArr[j] = (i >> j) & 1;
        }
        const sum = _.sum(pressArr);
        if (sum % 2 === presses % 2 && sum <= presses) {
            let status = pressArr[0] ^ pressArr[1] ^ pressArr[3];
            if (n >= 2) {
                status |= (pressArr[0] ^ pressArr[1]) << 1;
            }
            if (n >= 3) {
                status |= (pressArr[0] ^ pressArr[2]) << 2;
            }
            if (n >= 4) {
                status |= (pressArr[0] ^ pressArr[1] ^ pressArr[3]) << 3;
            }
            seen.add(status);
        }
    }
    return seen.size;
};
