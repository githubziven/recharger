/* eslint-disable semi,space-before-function-paren */
// This file is auto gererated by build/bin/build-entry.js
// import './common';

// import progress from 'nprogress';
import test from './zh-CN/test.md'
function wrapper(component) {
  return function(r) {
    // progress.start();
    component(r).then(() => {
      // progress.done();
    }).catch(() => {
      // progress.done();
    });
  };
}

// function componentWrapper(component, name) {
//   component = component.default;
//   component.name = name;
//
//   return component;
// }

export default {
  'zh-CN/test': resolve => require.ensure([], () => resolve(require('./zh-CN/test.md')), 'test')
};
