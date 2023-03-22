import { BaseNodeLinkedList } from "../base/node-linked-list"

export class DoublyNodeLinkedList extends BaseNodeLinkedList<number, DoublyNodeLinkedList> {
  public prev: DoublyNodeLinkedList | null = null
  
  constructor(element: number, next: DoublyNodeLinkedList | null, prev: DoublyNodeLinkedList | null) {
    super(element)
    this.next = next
    this.prev = prev
  }
}