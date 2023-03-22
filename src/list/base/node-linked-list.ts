export class BaseNodeLinkedList<T, U> {
  public element: T
  public next: U | null = null
  constructor(element: T) {
    this.element = element
  }
}