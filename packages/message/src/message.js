/* eslint-disable no-undef,semi,no-unused-vars,prefer-const,comma-dangle,import/newline-after-import,max-len,indent,arrow-body-style,object-shorthand,no-multi-spaces,no-param-reassign,dot-notation,comma-spacing,no-unused-expressions,keyword-spacing,space-in-parens,no-empty,key-spacing,consistent-return,no-else-return,padded-blocks,object-curly-spacing,no-lonely-if */
import Vue from 'vue'
// eslint-disable-next-line semi,import/newline-after-import
import MessageContainer from './message.vue'
// eslint-disable-next-line import/first
import merge from 'lodash/merge'
// eslint-disable-next-line import/first
const MessageConstructor = Vue.extend(MessageContainer);
let instance
// eslint-disable-next-line padded-blocks
let initInstance = (options) => {

// eslint-disable-next-line no-var
  if (!instance) {
    instance = new MessageConstructor().$mount();
    document.body.appendChild(instance.$el);
  }
  document.body.classList.add('hidden-overflow')
  Vue.nextTick(() => {
    instance.showBox = true;
    instance.options = merge(instance.options, options)
    console.log('》》》》》》', instance.options)
  });
}
const MessageBox = (options, callback) => {
  if (options.callback || !callback) {
    callback = options.callback
  }
  initInstance(options);
}
MessageBox.alert = (options) => {
  if (options === undefined) {
    options = {
      title: 'Alert',
      message: '这是一条提示！'
    }
  }
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  return MessageBox(merge({
    title: options.title,
    message: options.message,
    $type: 'alert',
    iconShow: true,
    iconClass: 'icon-alertwarn',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options))
}
MessageBox.loading = (options) => {
  if (options !== false) { // 如果传入的不是false布尔值,则视为打开loading
    if (options === undefined) {
      options = {
        title: 'Loading',
        message: '正在加载！'
      }
    }
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    return MessageBox(merge({
      title: options.title,
      message: options.message,
      $type: 'loading',
      iconShow: true,
      iconClass: 'icon-jiazai',
      closeOnPressEscape: false,
      closeOnClickModal: false
    }, options))
  } else {
    console.log('PPP',!instance)
    if (instance) {
      Vue.nextTick(() => {
        instance.showBox = false
      });
    }
  }

}
export default MessageBox;
export {MessageBox};
