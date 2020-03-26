(function () {
  meta('Using array methods only solve the exercises below')
  let foo = []
  let foo2 = [true, 'bar']
  // set count and count2 values based on arrays above
  let count
  let count2
  it('counts should be correct', () => {
    expect(count).toBe(0)
    expect(count2).toBe(2)
  })
  // add to bar without setting the variable directly below
  let bar = []
  it('bar should equal [1]', () => {
    expect(bar).toBe([1])
  })

  // remove last item from baz without setting variable directly below
  // hint its an array method we didnt talk about
  let baz = [1, 2]
  it('baz should be [1]', () => {
    expect(baz).toBe([1])
  })

  let nums = [1,2,3]
  let multiplied
  // multiply every number in this list by 2
  it('multiplied should be [2,4,6]', () => {
    expect(multiplied).toBe([2,4,6])
  })

  nums = [1,2,3,4,5]
  let greaterThan1
    it('greaterThan1 should be all numbers greater than 1', () => {
    expect(greaterThan1).toBe([2,3,4,5])
  })

  let numbers = [100, 200, 300]
  let sum;
  it('sum should be 600', () => {
    expect(sum).toBe(600)
  })

  let harderNumbers = [{value: 1}, {value: 2}, {value: 3}]
  let sum2;
  it('sum2 should be 6', () => {
    expect(sum2).toBe(6)
  })

  // not using filter or loops - remove the first item from foo
  // hint its an array method we didnt talk about
  let n = [1,2,3]
  it('n should be [2,3]', () => {
    expect(n).toBe([2,3])
  })
  let x = [1,2,3]
  let htmlString = '';
  it('makes html', () => {
    expect(htmlString).toBe('<p>1</p><p>2</p><p>3</p>')
  })
}())