(function () {
  meta('Using for loops solve the exercises below')
  let nums = [1,2,5]
  let sum;
  it('sum should be 8', () => {
    expect(sum).toBe(8)
  })

  let str = 'cool'
  let str2;
  it('make a backwards string', () => {
    expect(str2).toBe('looc')
  })

  let arr = []
  it('arr should be the numbers 1-10 in an array', () => {
    expect(arr).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  let arr2 = []
  it('arr2 should be the numbers 10-1 in an array', () => {
    expect(arr).toBe([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  })
  
  let arr3 = []
  it('arr3 should only be even numbers between 1 and 10', () => {
    expect(arr3).toBe([2,4,6,8,10])
  })

  let nums2 = [1,2,3,4]
  let arr4 = []
  it('arr4 should be an array of true false values - true if even, false if not based on nums2', () => {
    expect(arr4).toBe([false, true, false, true])
  })

  let items = [1,2,3]
  let htmlStr = ''
  it('make html', () => {
    expect(htmlStr).toBe('<ul><li>1</li><li>2</li><li>3</li></ul>')
  })
}())