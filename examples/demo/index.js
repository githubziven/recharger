/* eslint-disable semi,space-before-function-paren */
// This file is auto gererated by build/bin/build-entry.js
// import './common';

// import progress from 'nprogress';

function asyncWrapper(component) {
  return function(r) {
    // progress.start();
    component(r).then(() => {
      // progress.done();
    }).catch(() => {
      // progress.done();
    });
  };
}

function componentWrapper(component, name) {
  component = component.default;
  component.name = name;
  console.log('??????',name,component)
  return component;
}

export default {
  'helloword': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./pages/HelloWorld.vue'), 'helloword')), 'helloword')),
  'test': asyncWrapper(r => require.ensure([], () => r(componentWrapper(require('./pages/test.vue'), 'test')), 'test'))
};