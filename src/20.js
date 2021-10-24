function isValid (s) {
    let stk = []
    let all = ['()', '[]', '{}']
    let test = ['(', '[', '{']
    for (let i in s) {
        if (test.includes(i)) {
            stk.push(i)
        } else {
            if (!all.includes(`${stk.pop()}${i}`)) {
                return false
            }
        }
    }
    console.log(!stk.length)
}

isValid("{[]}()}")