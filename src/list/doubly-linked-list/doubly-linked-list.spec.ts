import { describe, expect, test } from 'vitest'
import { DoublyLinkedList } from './doubly-linked-list'

function addFakeData(doubly: DoublyLinkedList) {
  for (let i = 0; i < 5; i++) {
    doubly.insert(i)
  }  
}

describe('# Pai linked list', () => {
  test('Insert new element', () => {
    const doubly = new DoublyLinkedList()

    doubly.insert(1)

    const expected = 1
    
    expect(doubly.getSize()).toStrictEqual(expected)
  })

  test('Valid the Prev Node and Next node after insert two elements', () => {
    const doubly = new DoublyLinkedList()

    doubly.insert(1)
    doubly.insert(2)

    const expected = 2
    const node = doubly.getHead()
    const nextNode = node?.next

    expect(doubly.getSize()).toStrictEqual(expected)
    expect(node).not.toBeNull()
    expect(nextNode?.prev).toStrictEqual(node)
  })

  test('Insert element by index using index 0', () => {
    const doubly = new DoublyLinkedList()
    const element = 1
    doubly.insertByindex(element, 0)

    const result = doubly.getNodeByIndex(0)

    expect(result?.element).toStrictEqual(element)
  })

  test('Insert element by index using index 2', () => {
    const doubly = new DoublyLinkedList()
    const element = 1
    addFakeData(doubly)

    doubly.insertByindex(element, 2)

    const result = doubly.getNodeByIndex(2)

    expect(result?.element).toStrictEqual(element)
  })

  test('Insert element by index in last position', () => {
    const doubly = new DoublyLinkedList()
    const element = 1
    addFakeData(doubly)

    let lastPosition = doubly.getSize() - 1
    doubly.insertByindex(element, lastPosition)
    
    lastPosition = doubly.getSize() - 1
    const result = doubly.getNodeByIndex(lastPosition)

    expect(result?.element).toStrictEqual(element)
  })

  test('Get Node by index', () => {
    const doubly = new DoublyLinkedList()
    addFakeData(doubly)
    const result = doubly.getNodeByIndex(2)
    
    const expected = 2
    expect(result?.element).toStrictEqual(expected)
  })
})