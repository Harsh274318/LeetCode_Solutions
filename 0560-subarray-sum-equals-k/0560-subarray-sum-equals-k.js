/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let prefixSum = 0;

    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let needed = prefixSum - k;

        if (map.has(needed)) {
            count += map.get(needed);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};