(function () {
  let num = 1
  num++
  it('should increment num', () => {
    expect(num).toBe(2)
  });

  let foo = 2
  it('should decrement foo', () => {
    expect(foo).toBe(1)
  });

  let bar = false
  let baz = true
  it('should flip bar and baz boolean values w/ not operator', () => {
    expect(bar).toBe(true)
    expect(baz).toBe(false)
  });

  let score = 6
  it('should make score be 2 more than its original value without reassigning variable', () => {
    expect(score).toBe(8)
  })

  let o = {
    age: 1,
  }
  it('o should have a name property', () => {
    expect(o.name).toBe('Mark')
  })

  let o2 = {}
  it('o2 should have a title property without including it on the object directly', () => {
    expect(o2.title).toBe('My value')
  })

}())