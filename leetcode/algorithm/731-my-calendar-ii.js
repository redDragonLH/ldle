/**
 * 731. 我的日程安排表 II
 *
 * 实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内不会导致三重预订时，则可以存储这个新的日程安排。
 *
 * MyCalendar 有一个 book(int start, int end)方法。它意味着在 start 到 end 时间内增加一个日程安排，注意，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end。
 *
 * 当三个日程安排有一些时间上的交叉时（例如三个日程安排都在同一时间内），就会产生三重预订。
 *
 * 每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致三重预订，返回 true。否则，返回 false 并且不要将该日程安排添加到日历中。
 *
 * 请按照以下步骤调用MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
 */
/**
 * 简单来说就是判断前后时间是否在另一个区间里,那其中有一个不在区间就不算重复么(时间交叉就算啊),
 * 是交叉对比,这样就能简单的检查是否重合
 */
 var MyCalendarTwo = function() {
    this.booked = [];
    // 使用一个对象保存二重预订
    this.overlaps = [];
};

MyCalendarTwo.prototype.book = function(start, end) {
    for (const arr of this.overlaps) {
        // l: 开始时间; r:结束时间
        let l = arr[0], r = arr[1];
        // 开始时间比新日程结束时间小;结束时间比新日程
        if (l < end && start < r) {
            // 三重预订返回false
            return false;
        }
    }
    // 检查两重预订;同样的逻辑
    for (const arr of this.booked) {
        let l = arr[0], r = arr[1];
        if (l < end && start < r) {
            // 不过要计算一下两重预订的重合区间
            this.overlaps.push([Math.max(l, start), Math.min(r, end)]);
        }
    }
    this.booked.push([start, end]);
    return true;
};
/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
