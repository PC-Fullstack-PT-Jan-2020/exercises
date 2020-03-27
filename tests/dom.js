(function () {
  meta('using vanilla js dom manipulation')

  function expectDom($pre) {
    return function (value) {
      return expect(value, $pre)
    }
  }

  document.querySelector('#tests').innerHTML = `
    <div id="dom">
      <button id="button1">button 1</button>
      <button id="button2">button 2</button>
      <button id="button3">button 3</button>
      <button id="button4">button 4</button>
    </div>
  `
  it('button1 should have the innerHTML of 2 after clicking', ($pre) => {
    // DONT touch
    const expect = expectDom($pre);
    document.querySelector('#button1').addEventListener('click', () => {
      expect(this.innerHTML).toBe(2)
    })
  })
  let arr = [1,2]
  it('list1 should be an ul list after clicking button2', ($pre) => {
    // DONT touch
    const expect = expectDom($pre);
    document.querySelector('#button2').addEventListener('click', () => {
      // only changing new list
      let newList
      const expectedList = `<ul><li>1</li><li>2</li></ul>`
      expect(newList).toBe(expectedList)
    })
  })

  let arr2 = [1, 2]
  it('list2 should be an ul list of [1,2,3] after clicking button3', ($pre) => {
    // DONT touch
    const expect = expectDom($pre);
    document.querySelector('#button3').addEventListener('click', () => {
      // only changing newList and arr2
      // ??
      let newList
      const expectedList = `<ul><li>1</li><li>2</li><li>3</li></ul>`
      expect(`<ul>${newList}</ul>`).toBe(expectedList)
    })
  })

  function initialCountSetup($pre, count) {
    let p = document.createElement('p')
    p.id = 'count'
    p.innerHTML = count
    $pre.append(p)
    return p
  }

  it('count should be 1 more after clicking button', ($pre) => {
    // DONT touch
    const expect = expectDom($pre);
    const count = 22
    const p = initialCountSetup($pre, count)
    document.querySelector('#button4').addEventListener('click', () => {
      // modify count and set inner content of p

      // ??
      // ??
      const num = Number(p.innerHTML)
      expect(num).toBe(23)
      
    })
  })
}())