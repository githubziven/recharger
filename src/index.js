/* eslint-disable semi,comma-dangle,import/extensions,quotes,import/newline-after-import,no-multi-spaces,no-unused-vars,no-param-reassign,indent,curly */
/**
* date: 2018/2/12
* author: ziven
* comments:
*/
// eslint-disable-next-line semi
// eslint-disable-next-line import/extensions
import RButton from '../packages/button/index.js'
// eslint-disable-next-line quotes
import RLead from "../packages/lead/index.js"
// eslint-disable-next-line quotes
import RCashBulk from "../packages/cash-bulk/index.js"
import RCashBulkGroup from '../packages/cash-bulk-group/index.js'
import RTable from '../packages/table/index.js'
import RInput from '../packages/input/index.js'
import RForm from  '../packages/form/index.js'
import RFormItem from '../packages/form-item/index.js'
import MessageBox from '../packages/message/index.js'
import RButtonGroup from '../packages/button-group/index.js'

import '../packages/theme-default/lib/index.css'
// import ElCollapseTransition from '../packages/transition/collapse-transition.js'
const components = [
  RButton,
  RButtonGroup,
  RLead,
  RCashBulk,
  RCashBulkGroup,
  RTable,
  RInput,
  RForm,
  RFormItem,
  // ElCollapseTransition
]

const install = function (Vue) {
  // if (install.installed)
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$loading = MessageBox.loading
  Vue.prototype.aaaa = 1
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  RButton,
  RLead,
  RCashBulk,
  RCashBulkGroup,
  RTable,
  RInput,
  RForm,
  RFormItem,
  MessageBox
  // RMessage,
  // ElCollapseTransition
}
