/**
 * 单向链表
 */

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
    // 从当前位置向前移动n个节点
    // advance (n, item) {
    //     let currNode = this.head
    //     let optionNode = null
    //     while (currNode.next.data != item) {
    //         currNode = currNode.next
    //     }
    //     optionNode = currNode.next
    //     currNode.next = currNode.next.next
    //     optionNode.next = null
    //     console.log(n)
    //     for (let i = 1; i <= n; i++) {
    //         currNode = currNode.next
    //     }
    //     currNode.next = optionNode
    //     if (currNode.next.next) {
    //         optionNode.next = currNode.next.next
    //     }
    //     optionNode.next = currNode.next
    // }
}

// let L1 = new SingleList()
// let arr = [2, 3, 4, 5, 6]

// for (let i in arr) {
//     L1.append(arr[i])
// }

// L1.display()

// L1.advance(2, 4)

// L1.display()

// L1.display()

// arr.forEach(item => { L1.append(item) })

// let C = L1.find(4)
// let D = L1.findLast()
// D.next = C