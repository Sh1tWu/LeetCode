function removeDuplicates (nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    console.log(slow)
    return slow;
};

removeDuplicates([1, 1, 2, 2, 3, 3, 3, 4])