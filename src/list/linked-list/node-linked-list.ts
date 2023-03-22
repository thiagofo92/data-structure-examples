import { BaseNodeLinkedList } from "../base/node-linked-list"

export class NodeLinkedList<T> extends BaseNodeLinkedList<T>{
  public next: NodeLinkedList<T> | null = null
  constructor(element: T) {
    super(element)
  }
}