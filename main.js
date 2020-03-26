// a simple "it" function for naming groups of expectations
function it(description, contents) {
  descriptionLogger(false, description, contents)
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function (expectation) {
      return expectLogger(false, target, expectation)
    }
  }
}

/*
  have test logger,
  if cns (console) use js console
  otherwise plop test in html
*/
function descriptionLogger(cns = true, description, cb) {
  if (cns) {
    console.log('\n\n"It ' + description + '"');
  } else {
    let pre = document.createElement('pre')
    pre.innerHTML = description;
    document.body.appendChild(pre)
  }
  cb();
}

function expectLogger(cns = true, target, expectation) {
  if (cns) {
    if (target === expectation) {
      console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation);
      return true;
    } else {
      console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation);
      return false;
    }
  } else {
    let pre = document.createElement('pre')
    pre.classList = target === expectation ? 'test success' : 'test failure'
    pre.innerHTML = `Expected ${target} to be ${expectation}`
    document.body.appendChild(pre)
  }
}