(function () {
  meta('Using string methods and properties only, solve the exercises below')
  // set str to its actual value
  let str = '';
  it('str should pass all tests below', () => {
    expect(str.charAt(1)).toBe('a')
    expect(str.charAt(0)).toBe('a')
    expect(str.charAt(2)).toBe('r')
    expect(str.charAt(5)).toBe('a')
    expect(str.charAt(6)).toBe('r')
    expect(str.charAt(7)).toBe('k')
    expect(str.charAt(3)).toBe('d')
    expect(str.charAt(4)).toBe('v')
  })
  // set str to its actual value
  let str2 = ''
  it('str2 should pass all the tests below', () => {
    expect(str2.includes('h')).toBe(true)
    expect(str2.includes('e')).toBe(true)
    expect(str2.includes('l')).toBe(true)
    expect(str2.includes('p')).toBe(true)
  })

  // set strLen to how many characters str3 is
  let str3 = 'whatevs'
  let strLen

  it('strLen should be 7', () => {
    expect(strLen).toBe(7)
  })

  // set strIndex to where 'a' is in str4
  let str4 = 'foobar'
  let strIndex
  let baz = 'h'
  let bazIndex
  it('strIndex should be 4', () => {
    expect(strIndex).toBe(4)
    expect(bazIndex).toBe(-1)
  })

  let str5 = 'f'
  let insideOf = str5.includes()
  it('insideOf should be true', () => {
    expect(insideOf).toBe(true)
  })
  
  // set notIncludes based on str5
  let notIncludes
  it('notIncludes should be true', () => {
    expect(notIncludes).toBe(true)
  })
}())