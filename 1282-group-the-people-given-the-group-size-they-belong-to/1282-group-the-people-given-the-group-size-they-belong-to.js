/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = new Map();
    for (let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i];

        if (map.has(size)) {
            map.get(size).push(i);
        } else {
            map.set(size, [i]);
        }
    }
    let result = [];

    for (let [size, people] of map) {
        for (let i = 0; i < people.length; i += size) {
            result.push(people.slice(i, i + size));
        }
    }

    return result;
};