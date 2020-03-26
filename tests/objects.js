(function () {
  meta('Manipulate objects or use methods to solve below exercises')
  const foo = {
    title: 'bar',
    obj: {},
    list: [], // dont touch this property directly!!!
    count: 20 // dont touch this property directly!!!
  }
  it('foo should pass these tests', () => {
    expect(foo.hasOwnProperty('name')).toBe(true)
    expect(foo.bar).toBe('yolo')
    expect(foo.obj.neat).toBe('a')
    expect(foo.count).toBe(21)
    expect(foo.list).toBe([1, 2, 3])
  })

  const bar = {
    title: 'a', // I dont want to touch this property directly!!!
    baz: false, // I dont want to touch this property directly!!!
    bam: true // I dont want to touch this property directly!!!
  }
  // set bar.bam without saying bar.bam = false (flip value)
  it('bar should pass these tests', () => {
    expect(bar.title).toBe('bar')
    expect(bar.baz).toBe('bar')
    expect(bar.bam).toBe(false)
  })

  let nameIsInBar
  let titleInBar
  it(`check if name is in bar or title is in bar`, () => {
    expect(nameIsInBar).toBe(false)
    expect(titleInBar).toBe(true)
  })
}())