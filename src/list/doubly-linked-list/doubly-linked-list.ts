import { BaseLinkedList } from "../base/base-linked-list"
import { DoublyNodeLinkedList } from "./node-linked-list"

export class DoublyLinkedList extends BaseLinkedList<number, DoublyNodeLinkedList>{
  private tail: unknown = null
  constructor() {
    super()
    this.tail = undefined
  }

  insert(element: number) {
    const node = new DoublyNodeLinkedList(element, null, null)
    this.size++
    this.countOfIndex++

    if(!this.head) {
      this.head = node
      this.last = this.head
      return
    }

    this.last!.next = node
    node.prev = this.last
    
    this.last = node
  }

  insertByindex(element: number, index: number): void {
    if(index === 0 && this.size === 0) return this.insert(element)

    if(index > this.size) throw Error('Index out of range')

    if(this.countOfIndex === index) {
      return this.insertInLastPosition(new DoublyNodeLinkedList(element, null, null))
    }

    const currently = this.getNodeByIndex(index)
    const prevNode = currently?.prev || null
    const newNode = new DoublyNodeLinkedList(element, currently, prevNode)
    currently!.prev = newNode

    if(prevNode) prevNode.next = newNode

    if(index === 0) this.head = newNode

    this.countOfIndex++
    this.size++

    return
  }

  removeByIndex(index: number): boolean {
    throw new Error("Method not implemented.")
  }
  removeByElement(element: number): boolean {
    throw new Error("Method not implemented.")
  }
  
  indexOf(element: number): number {
    throw new Error("Method not implemented.")
  }

  toString(): string {
    throw new Error("Method not implemented.")
  }

  getNodeByIndex(index: number): DoublyNodeLinkedList | null {
    let currently = this.head
    let i = 0

    do {
      if(i === index) return currently

      currently = currently?.next || null
      i++
    } while(this.size > i)

    return null
  }

  insertInLastPosition(node: DoublyNodeLinkedList): void {
    if(this.size === 0) return this.insert(node.element)

    node.prev = this.last
    this.last!.next = node
    this.last = node

    this.countOfIndex++
    this.size++
  }

  override getHead(): DoublyNodeLinkedList | null {
    return this.head
  }
}