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

    if(index > this.countOfIndex) throw Error('Index out of range')



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
    } while(currently?.next)

    return null
  }

  inputInLastPosition(node: DoublyNodeLinkedList): void {
    throw new Error("Method not implemented.")
  }

  override getHead(): DoublyNodeLinkedList | null {
    return this.head
  }
}