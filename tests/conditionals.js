(function () {
  meta('By using if/else statments, solve the exercises below')
  // if foo is greater than 2 make bar true with if
  let foo = 3
  let bar = false
  // if str is yo make str equal to yoyo
  let str = 'yo'
  let arr = []
  let arr2 = [1,2,3]
  // set these based on the variables arr and arr2
  // above (DONT set it explicitly to true and false)
  let arrEmpty;
  let arr2Empty;
  // if foo1 is 1 and foo2 is 2, make foo3 true
  let foo1 = 1
  let foo2 = 2
  let foo3
  // if foo3 is true make foo4 false otherwise make it true
  let foo4
  // make foo5 true without touching the line below
  let foo5 = false
  // make foo6 true without touching the line below
  let foo6 = null
  it('should be proper booleans', () => {
    expect(bar).toBe(true)
    expect(str).toBe('yoyo')
    expect(arrEmpty).toBe(true)
    expect(arr2Empty).toBe(false)
    expect(foo3).toBe(true)
    expect(foo4).toBe(false)
    expect(foo5).toBe(true)
    expect(foo6).toBe(true)
  });
}())