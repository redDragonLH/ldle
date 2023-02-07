/**
 * 1604. 警告一小时内使用相同员工卡大于等于三次的人
 *
 * 力扣公司的员工都使用员工卡来开办公室的门。每当一个员工使用一次他的员工卡，安保系统会记录下员工的名字和使用时间。如果一个员工在一小时时间内使用员工卡的次数大于等于三次，这个系统会自动发布一个 警告 。
 *
 * 给你字符串数组 keyName 和 keyTime ，其中 [keyName[i], keyTime[i]] 对应一个人的名字和他在 某一天 内使用员工卡的时间。
 *
 * 使用时间的格式是 24小时制 ，形如 "HH:MM" ，比方说 "23:51" 和 "09:49" 。
 *
 * 请你返回去重后的收到系统警告的员工名字，将它们按 字典序升序 排序后返回。
 *
 * 请注意 "10:00" - "11:00" 视为一个小时时间范围内，而 "23:51" - "00:10" 不被视为一小时内，因为系统记录的是某一天内的使用情况。
 */

/**
 * 思路是把数据组成数组对,然后按照时间排序,比较麻烦
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  let arr = [];
  let len = keyName.length;
  for (let i = 0; i < len; i++) {
    let time = keyTime[i].split(":");
    arr.push([keyName[i], [parseInt(time[0]), parseInt[time[1]]]]);
  }
  sortByTime(arr);

  let left = 0,
    right = 3;
    // 要求是一小时内三次,而不一定是这个人一小时内连续三次
    // 思路断了
  while (right < len) {
    for (let i = left; i <right; i++) {
        const element = array[i];
        
    }
  }
};

let sortByTime = (arr) => {
  arr.sort((a, b) => {
    let aH = a[1][0];
    let bH = b[1][0];
    console.log("HHH", a, aH, b, bH);

    if (aH > bH) {
      return 1;
    }
    if (aH < bH) {
      return -1;
    }

    let aM = a[1][1];
    let bM = b[1][1];
    console.log("MMM", a, aM, b, bM);

    if (aM > bM) {
      return 1;
    }
    if (aM < bM) {
      -1;
    } else {
      return 0;
    }
  });
};
