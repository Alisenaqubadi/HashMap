class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class linkedLists {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) current = current.next
      current.next = newNode
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head)
  }

  toString() {
    let current = this.head
    let string = ''
    while (current) {
      string += `( ${current.value} ) -> `
      current = current.next
    }
    return string + 'null'
  }

  size() {
    let current = this.head
    let index = 0
    while (current) {
      index++
      current = current.next
    }
    return index
  }

  getHead() {
    return this.head ? this.head.value : null
  }

  tail() {
    let current = this.head
    if (!current) return null
    while (current.next) current = current.next
    return current.value
  }

  at(Index) {
    let current = this.head
    let i = 0
    while (current && i < Index) {
      current = current.next
      i++
    }
    return current ? current.value : null
  }

  pop() {
    if (!this.head) return
    if (!this.head.next) {
      this.head = null
      return
    }
    let current = this.head
    while (current.next.next) current = current.next
    current.next = null
  }

  contains(value) {
    let current = this.head
    while (current) {
      if (current.value === value) return true
      current = current.next
    }
    return false
  }

  find(value) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) return index
      current = current.next
      index++
    }
    return -1
  }

  getNode() {
    return this.head
  }
}

export { linkedLists }
