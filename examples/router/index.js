/* eslint-disable semi,semi,no-multiple-empty-lines,indent,no-trailing-spaces,no-undef,spaced-comment,space-infix-ops,padded-blocks */
import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line quotes
import '../utils/iframe-router'
import componentDemos from '../demo/index'
import componentDocs from '../markdown/index'
import docConfig from '../config/markdown.nav.config'
Vue.use(Router)

const registerRoute = (isExample) => {
// Object.keys(navConfig).forEach((lang, index) => {
//   return
// }
  const routers = []
  Object.keys(docConfig).forEach((lang, index) => {

    const navs = docConfig[lang].nav || []
    navs.forEach(nav => {
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(page => addRoute(page, lang))
        })
      } else {
        addRoute(nav, lang)
      }
    })
    function addRoute (page, lang) {
      // console.log('page',page)
      if (isExample && page.noExample) {
        return
      }

      const { path } = page
      if (path) {
        const name = lang + '/' + path.replace('/', '')
        let component

        if (path === '/demo') {
          //component = DemoPages
          component = componentDocs[name]
        } else {
          console.log('00000', path, isExample)
          component = isExample ? componentDemos[path.replace('/', '')] : componentDocs[name]

        }
        routers.push({
          name,
          component: component,
          path: `/${lang}${path}`,
          meta: {
            lang,
            name: page.title
          }
        })
      }
    }
  })
  return routers
}


export default registerRoute
// [
// {
//   path: '/',
//   name: 'HelloWorld',
//   component: HelloWorld
// },
//   {
//     path: '/test',
//     name: 'test',
//     component: r => require.ensure([], () => r(require('../markdown/test.md')))
//   }
// ]
