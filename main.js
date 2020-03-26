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

const APP = {
  testRoot: document.querySelector('#tests'),
  tabRoot: document.querySelector('#tabs'),
  clearTests: function () {
    this.testRoot.innerHTML = '';
  },
  config: config,
  descriptionLogger: function (description, cb) {
    if (this.config.console) {
      console.log('\n\n"It ' + description + '"');
    } else {
      const pre = document.createElement('pre')
      pre.innerHTML = description;
      this.testRoot.appendChild(pre);
    }
    cb();
  },
  expectLogger: function (target, expectation) {
    if (this.config.console) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation);
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation);
        return false;
      }
    } else {
      const pre = document.createElement('pre')
      const passed = target === expectation;
      pre.classList = passed ? 'test success' : 'test failure'
      pre.innerHTML = `${passed ? 'PASSED' : 'FAILED'}: Expected ${target} to be ${expectation}`
      this.testRoot.appendChild(pre)
    }
  },
  init: function () {
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
const expect = (target) => {
  return {
    toBe(expectation) {
      return APP.expectLogger(target, expectation)
    }
  }
}
APP.init()