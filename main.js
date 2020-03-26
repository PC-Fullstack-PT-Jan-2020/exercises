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
    const pre = document.createElement('pre')
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
    const pre = document.createElement('pre')
    pre.classList = target === expectation ? 'test success' : 'test failure'
    pre.innerHTML = `Expected ${target} to be ${expectation}`
    document.body.appendChild(pre)
  }
}

function addScript(src) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  document.body.appendChild(s);
}

function getHash() {
  return window.location.hash.slice(1) || config.tabs[0]
}

function generateTabs() {
  const activeLink = getHash()
  const tabStr = config.tabs.map(item => {
    return `<li class="tab ${activeLink === item ? 'active' : ''}"><a href="#${item}">${item}</a></li>`
  }).join('')
  document.querySelector('#tabs').innerHTML = `<ul>${tabStr}</ul>`
}

generateTabs()

document.querySelector('#tabs a').addEventListener('click', function () {
  const href = this.getAttribute('href').slice(1)
  addScript(`tests/${href}.js`)
})

addScript(`tests/${getHash()}.js`)