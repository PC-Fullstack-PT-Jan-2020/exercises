(function () {
  meta('By modifying variables, solve the exercises below')
  let a = 1
  let b;
  let c = false
  it('should change variables to these values', () => {
    expect(a).toBe(undefined)
    expect(b).toBe(null)
    expect(c).toBe(true)
  })

  let num = 1
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

  let str = ``
  let name = 'John'
  it('should make str equal Hello, john', () => {
    expect(str).toBe('Hello, John')
  })

  let str2 = 'John'
  let last = 'Smith'
  let name2 = ''
  it('should make name2 equal John Smith', () => {
    expect(name2).toBe('John Smith')
  })
}())