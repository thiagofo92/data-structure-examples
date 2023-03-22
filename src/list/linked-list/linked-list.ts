import { BaseLinkedList } from "../base/base-linked-list"
import { NodeLinkedList } from "./node-linked-list"

export class LinkedList extends BaseLinkedList<number> {
  constructor() {
    super()
  }

  insert(element: number): void {
    const node = new NodeLinkedList(element)
    if(!this.head) {
      this.head = node
      this.last = this.head
      return
    }

    this.last!.next = node
    this.last = node
    
    this.size++
    this.countOfIndex++
  }

  removeByIndex(index: number): boolean {
    if(index > this.countOfIndex) throw RangeError(`Out of range ${index}`)

    if(index === 0) {
      let current = this.head
      this.head = current!.next
      return true
    }

    let previus = this.getNodeByIndex(index - 1)

    if(!previus) return false

    let current = previus.next!
    previus.next = current.next ? current.next : null

    this.size--
    this.countOfIndex--
    return true
  }
  
  removeByElement(element: number): boolean {
    const index = this.indexOf(element)
    return this.removeByIndex(index)
  }

  insertByindex(element: number, index: number) {
    if(index > this.countOfIndex) throw RangeError(`Index out of range ${index}`)

    const node = new NodeLinkedList(element)

    if(index === 0) {
      this.insert(element)
      return
    }

    if(this.countOfIndex === index) {
      this.inputInLastPosition(node)
      return
    }

    const previus = this.getNodeByIndex(index - 1)
    node.next = previus!.next
    previus!.next = node
  }

  indexOf(element: number): number {
    let current = this.head

    for(let i = 0; this.size > i; i ++) {
      if(element === current!.element) return i

      if(!current?.next) return this.noElement

      current = current.next
    }

    return this.noElement
  }

  getHead() {
    return this.head
  }

  isEmpty() {
    return this.size === 0
  }

  toString(): string {
    if(this.head === null) return ''

    let objString = `${this.head.element}`

    let current = this.head.next

    for(let i = 0; this.size > i; i++) {
      
      if(!current?.next) return objString

      objString += `\n${current.element}`
      current = current.next
    }

    return ''
  }

  protected getNodeByIndex(index: number) {
    if(this.size === 0) return null

    let current: NodeLinkedList<number> = this.head!
    for (let i = 0; i < index; i++) {
      current = current.next!
    }

    return current
  }

  protected inputInLastPosition(node: NodeLinkedList<number>) {
    if(this.last) {
      this.last.next = node
      this.last = node
    }
  }
}