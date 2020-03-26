(function () {
  // if foo is greater than 2 make bar true with if
  let foo = 3
  let bar = false
  let str = 'yo'
  // if str is yo make str equal to yoyo
  it('should be proper booleans', () => {
    expect(bar).toBe(true)
    expect(str).toBe('yoyo')
  });
}())