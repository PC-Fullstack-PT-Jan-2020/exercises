// DOM utils

/*
  adds a script to the dom
  param script name
*/
function addScript(src) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  document.body.appendChild(s);
}
/*
  remove scripts from the dom
*/
function removeScripts(filename) {
  var tags = document.getElementsByTagName('script');
  for (var i = tags.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
    if (tags[i] && tags[i].parentNode) {
      tags[i].parentNode.removeChild(tags[i]);
    }
  }
}
// grab the location hash or the first tab from config
function getHash() {
  return window.location.hash.slice(1) || APP.config.tabs[0]
}

function compareArrayOrObj(value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function (item1, item2) {
    // Code will go here...
  };

  // Compare properties
  var match;
  if (type === '[object Array]') {
    for (var i = 0; i < valueLen; i++) {
      compare(value[i], other[i]);
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        compare(value[key], other[key]);
      }
    }
  }

  // If nothing failed, return true
  return true;
}

const APP = {
  testRoot: document.querySelector('#tests'),
  tabRoot: document.querySelector('#tabs'),
  clearTests: function () {
    this.testRoot.innerHTML = '';
  },
  config: {},
  descriptionLogger: function (description, cb) {
    let pre;
    if (this.config.console) {
      console.log('\n\n"It ' + description + '"');
    } else {
      pre = document.createElement('pre')
      pre.innerHTML = description;
      this.testRoot.appendChild(pre);
    }
    cb(pre);
  },
  expectLogger: function (target, expectation, domTarget = null) {
    let passed = target === expectation;
    // handle arrays and objects differently
    if (Array.isArray(target) || typeof target === 'obj') {
      passed = compareArrayOrObj(target, expectation)
    }

    if (this.config.console) {
      if (passed) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation);
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation);
        return false;
      }
    } else {
      const pre = document.createElement('pre')
      pre.classList = passed ? 'test success' : 'test failure'
      pre.innerHTML = `${passed ? 'PASSED' : 'FAILED'}: Expected ${target} to be ${expectation}`
      if (domTarget) {
        domTarget.appendChild(pre)
      } else {
        this.testRoot.appendChild(pre)
      }
    }
  },
  init: function (config) {
    this.config = config;
    addScript(`tests/${getHash()}.js`);
    this.generateTabs();
    this.tabRoot.addEventListener('click', this.manageActiveTests.bind(this));
  },
  manageActiveTests: function (e) {
    // prevent default since we are going to push href programatically
    e.preventDefault();
    this.clearTests();
    const tabClicked = e.target.matches('.link') || e.target.childNodes[0].matches('.link');
    const aTag = e.target.matches('.link') ? e.target : e.target.childNodes[0];
    if (tabClicked) {
      const href = aTag.getAttribute('href');
      const sanitized = href.slice(1);
      window.location = href;
      removeScripts();
      addScript(`tests/${sanitized}.js`);
      setTimeout(() => {
        this.generateTabs();
      }, 0);
    }
  },
  generateTabs: function() {
    const activeLink = getHash()
    const tabStr = this.config.tabs.map(item => {
      return `<li class="tab ${activeLink === item ? 'active' : ''}"><a class="link" href="#${item}">${item}</a></li>`
    }).join('')
    this.tabRoot.innerHTML = `<ul>${tabStr}</ul>`
  },
  insertMeta: function (description) {
    const n = document.createElement('pre');
    n.classList = 'meta'
    n.innerHTML = `&#9432; ${description}`;
    this.testRoot.prepend(n);
  }
};

// global utils for testing

/*
  takes a string and a callback
  params:
    description: string
    contents: functon
*/
const it = (description, contents) => {
  APP.descriptionLogger(description, contents);
}
/*
  takes a target value and returns a toBe util that checks an expectation
  params:
    target: any value
    expectation: any value
*/
const expect = (target, domTarget = null) => {
  return {
    toBe(expectation) {
      return APP.expectLogger(target, expectation, domTarget)
    },
    toEqualArray(expectation) {

    }
  }
}

const meta = (description) => {
  APP.insertMeta(description)
}
APP.init(config)