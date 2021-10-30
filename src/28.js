var strStr = function (hayStack, needle) {
    const n = hayStack.length
    const m = needle.length
    for (let i = 0; i + m <= n; i++) {
        let flag = true
        for (let j = 0; j < m; j++) {
            if (hayStack[i + j] != needle[j]) {
                flag = false
                break
            }
        }
    }
}