/* eslint-disable semi,space-before-function-paren */
// This file is auto gererated by build/bin/build-entry.js
// import './common';

// import progress from 'nprogress';
import test from './zh-CN/test.md'
// import index from './zh-CN/index.vue'
// import inputs from './zh-CN/inputs.md'
function wrapper (component) {
  return function (r) {
    // progress.start();
    component(r).then(() => {
      // progress.done();
    }).catch(() => {
      // progress.done();
    });
  };
}
export default {
  'zh-CN/test': wrapper(r => require.ensure([], () => r(require('./zh-CN/test.md')), 'zh-CN/test')),
  'zh-CN/index': wrapper(r => require.ensure([], () => r(require('./zh-CN/index.vue')), 'zh-CN/index')),
  'zh-CN/inputs':wrapper(r => require.ensure([], () => r(require('./zh-CN/inputs.md')), 'zh-CN/inputs')),
  'zh-CN/quickstart':wrapper(r => require.ensure([], () => r(require('./zh-CN/quickstart.md')), 'zh-CN/quickstart'))
};
