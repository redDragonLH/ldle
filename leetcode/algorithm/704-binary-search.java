/**
 * 704. 二分查找
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */
 /**
  * 语法基本一样,只是变量声明从固定关键字变为数据类型关键字
  */
class Solution {
    public int search(int[] nums, int target) {
      int left = 0;
      int right = nums.length-1;
      int mid = 0;
      while(left <= right) {
        mid = (left+right) >> 1;
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid]> target){
            right = mid-1;
        }else {
            left= mid+1;
        }

      }
      return -1;
    }
}