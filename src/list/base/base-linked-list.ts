import { BaseNodeLinkedList } from "./node-linked-list"

export abstract class BaseLinkedList<T, U extends InstanceType<typeof BaseNodeLinkedList>> {
  protected size = 0
  protected countOfIndex = -1
  protected head: U | null = null
  protected last: U | null = null
  protected noElement = - 1

  public getHead(): U | null {
    return this.head
  }

  public isEmpty() {
    return this.size === 0
  }

  public getSize() {
    return this.size
  }

  abstract insert(element: T): void

  abstract removeByIndex(index: number): boolean
  
  abstract removeByElement(element: T): boolean

  abstract insertByindex(element: T, index: number): void

  abstract indexOf(element: T): number
  
  abstract toString(): string

  protected abstract getNodeByIndex(index: number): U | null

  protected abstract insertInLastPosition(node: U): void
}