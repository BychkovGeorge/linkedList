class linkedList {
    constructor () {
        this.tail = null
        this.head = null
    }

    append (node) {
        if (this.head) {
            this.tail.next = node
            this.tail = node
            return
        }
        this.head = node
        this.tail = node
    }

    prepend (node) {
        if (this.head) {
            node.next = this.head
            this.head = node
            return
        }
        this.head = node
        this.tail = node
    }

    drop (node) {
        if (this.head) {
            let temp = this.head
            while (temp.next) {
                if (node === this.head.data) {
                    this.head = this.head.next
                    return
                }
                if (temp.next.data === node) {
                    temp.next = temp.next.next
                    return
                }
                temp = temp.next
            }
        }
    }

    toArray () {
        const resultArray = []
        let temp = this.head
        while (temp) {
            resultArray.push(temp.data)
            temp = temp.next
        }
        return resultArray
    }
}

class listElement {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

let list = new linkedList()

list.append(new listElement('my'))
list.append(new listElement('dear'))
list.prepend(new listElement('hi'))
list.append(new listElement('friend'))
list.append(new listElement('Alan'))
console.log(list.toArray())
list.drop('dear')
console.log(list.toArray())
