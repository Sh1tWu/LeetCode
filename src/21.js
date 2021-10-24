class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class SingleList {
    constructor() {
        this.size = 0
        this.head = new Node('head')
        this.currNode = ''
        this.data = null
    }
    redirection () {
        return this.head
    }
    find (item) {
        let currNode = this.head
        while (currNode && (currNode.data !== item)) {
            // console.log(currNode)
            currNode = currNode.next
        }
        return currNode
    }
    insert (item, element) {
        let itemNode = this.find(item)
        if (!itemNode) {
            return
        }
        let newNode = new Node(element)
        newNode.next = itemNode.next
        itemNode.next = newNode
        this.size++
    }
    remove (item) {
        if (!this.find(item)) {
            return
        }
        if (item === 'head') {
            if (!(this.isEmpty())) {
                return
            } else {
                this.head.next = null
                return
            }
        }
        let currNode = this.head
        while (currNode.next.data !== item) {
            if (!currNode.next) {
                return
            }
            currNode = currNode.next
        }
        currNode.next = currNode.next.next
        this.size--
    }
    append (element) {
        let newNode = new Node(element)
        let currNode = this.findLast()
        currNode.next = newNode
        this.currNode = currNode.next
        this.data = this.head.next
        this.size++
    }
    findLast () {
        let currNode = this.head
        while (currNode.next) {
            currNode = currNode.next
        }
        return currNode
    }
    isEmpty () {
        return !this.size
    }
    show () {
        console.log(this.currNode.data)
    }
    getLength () {
        return this.size
    }
    display () {
        let result = ''
        let currNode = this.head
        while (currNode) {
            result += currNode.data
            currNode = currNode.next
            if (currNode) {
                result += '->'
            }
        }
        console.log(result)
    }
    clear () {
        this.head.next = null
        this.size = 0
    }
}

let L1 = new SingleList()
let L2 = new SingleList()
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 3, 5, 7, 8]

arr1.forEach(item => {
    L1.append(item)
})
arr2.forEach(item => {
    L2.append(item)
})

L1.display()
L2.display()

function mergeTwoList (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.data < l2.data) {
        l1.next = mergeTwoList(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoList(l1, l2.next)
        return l2
    }
}

console.log(L1)
console.log(L2)
let L3 = mergeTwoList(L1, L2)
console.log(L3)