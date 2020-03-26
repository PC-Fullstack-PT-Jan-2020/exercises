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

const testRoot = document.querySelector('#tests');

const APP = {
  testRoot: document.querySelector('#tests'),
  tabRoot: document.querySelector('#tabs'),
};

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
    APP.testRoot.appendChild(pre)
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
    APP.testRoot.appendChild(pre)
  }
}

function addScript(src) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  document.body.appendChild(s);
}

function removeScripts(filename) {
  var tags = document.getElementsByTagName('script');
  console.log(tags)
  for (var i = tags.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
    if (tags[i] && tags[i].parentNode) {
      tags[i].parentNode.removeChild(tags[i]);
    }
  }
}

function getHash() {
  return window.location.hash.slice(1) || config.tabs[0]
}

function generateTabs() {
  const activeLink = getHash()
  const tabStr = config.tabs.map(item => {
    return `<li class="tab ${activeLink === item ? 'active' : ''}"><a class="link" href="#${item}">${item}</a></li>`
  }).join('')
  APP.tabRoot.innerHTML = `<ul>${tabStr}</ul>`
}

generateTabs()

APP.tabRoot.addEventListener('click', function (e) {
  APP.testRoot.innerHTML = '';
  const tabClicked = e.target.matches('.link') || e.target.childNodes[0].matches('link')
  const aTag = e.target.matches('.link') ? e.target : e.target.childNodes[0];
  if (tabClicked) {
    const href = aTag.getAttribute('href').slice(1)
    removeScripts()
    addScript(`tests/${href}.js`)
    setTimeout(() => {
      generateTabs()
    }, 0)
  }
})

addScript(`tests/${getHash()}.js`)