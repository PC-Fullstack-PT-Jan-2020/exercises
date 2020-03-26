(function () {
  meta('creating functions, have tests pass')

  function giveMeTrue() {

  }

  it('giveMeTrue should give me the value true', () => {
    expect(giveMeTrue()).toBe(true)
  })

  function giveMeHello() {

  }

  it('giveMeHello should give me the value Hello', () => {
    expect(giveMeHello()).toBe('Hello')
  })

  function add() {
    
  }
  it('add function should work', () => {
    expect(add(1,2)).toBe(3)
    expect(add(1, 3)).toBe(4)
    expect(add(1, -3)).toBe(-2)
  })

  function reverseString() {

  }

  it('reverseString should reverse a string', () => {
    expect(reverseString('cool')).toBe('looc')
  })

  function giveMeFirstLetter() {

  }

  it('giveMeFirstLetter should give me first letter of str', () => {
    expect(giveMeFirstLetter('abc')).toBe('a')
    expect(giveMeFirstLetter('help')).toBe('h')
  })

  function giveMeLastLetter() {
    
  }

  it('giveMeLastLetter should give me last letter', () => {
    expect(giveMeLastLetter('foo')).toBe('o')
    expect(giveMeLastLetter('bar')).toBe('r')
  })

  function giveMeLetterAtIndex() {

  }

  it('giveMeLetterAtIndex should give me a letter at an index', () => {
    expect(giveMeLetterAtIndex('hello', 0)).toBe('h')
    expect(giveMeLetterAtIndex('bye', 2)).toBe('e')
  })

  function giveMeLetterAtHumanIndex() {

  }

  it('should give me a letter based on 1 index so passing 1 would give me 0 index', () => {
    expect(giveMeLetterAtHumanIndex('neat', 1)).toBe('n')
  })

  function multiplyByTwo() {

  }

  it('should multiply arrays by two', () => {
    expect(multiplyByTwo([1,2,3])).toBe([2,4,6])
    expect(multiplyByTwo([1, 1, 1])).toBe([2, 2, 2])
  })

  function multiplyByAny() {

  }

  it('should multiply an array by a number', () => {
    expect(multiplyByAny([1, 2, 3], 2)).toBe([2, 4, 6])
    expect(multiplyByAny([1, 1, 1], 3)).toBe([3, 3, 3])
  })

  function itemInArray() {
    
  }

  it('should check if item is in an array', () => {
    expect(itemInArray([1,2,3], 2)).toBe(true)
  })

  function checkIfObjectHasProp(obj, prop) {
    
  }

  it('should check if an obj has a prop', () => {
    expect(checkIfObjectHasProp({ title: 'foo' }, 'title')).toBe(true)
    expect(checkIfObjectHasProp({title: ''}, 'title')).toBe(true)
    expect(checkIfObjectHasProp({ title: '' }, 'baz')).toBe(false)
  })

  function giveMeOne() {
    return 1
  }

  function giveMeBackAValuePassedIn(val) {
    return val
  }

  function callFunction() {
    
  }

  it('callFunction should call the functions', () => {
    expect(callFunction(giveMeOne)).toBe(1)
    expect(callFunction(giveMeBackAValuePassedIn, 1)).toBe(1)
    expect(callFunction(giveMeBackAValuePassedIn, 2)).toBe(2)
    expect(callFunction(giveMeBackAValuePassedIn, false)).toBe(false)
    expect(callFunction(giveMeBackAValuePassedIn, [1])).toBe([1])
  })
}())