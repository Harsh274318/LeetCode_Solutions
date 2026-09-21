/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    let finder = 0;

    while (finder !== slow) {
        finder = nums[finder];
        slow = nums[slow];
    }

    return finder;
};