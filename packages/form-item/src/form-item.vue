<template>
  <div class="r-form-item" :class="[{
       'is-error': validateState === 'error',
       'is-success': validateState === 'success'
       }]">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <div v-if="validateState === 'error' " class="r-form-item__error">
      {{validateMessage}}
    </div>
  </div>
</template>

<script>
import schema from 'async-validator'
import emitter from 'utils/mixin/emitter.js'

export default {
  name: "RFormItem",
  componentName: "RFormItem",
  props: ['label', 'value', 'prop'],
  mixins: [emitter],
  data () {
    return {
      validateState: '',
      validateMessage: ''
    }
  },
  provide () {
    return {
      rFormItem: this
    };
  },
  inject: ['rForm'],
  mounted () {
    this.dispatch('RForm', 'rl.form.addField', [this])
  },
  methods: {
    validate () {
      console.log('model', this.rForm.model)
      console.log('rule', this.rForm.rules)
      console.log('prop', this.prop)
      const validator = new schema(this.rForm.rules)
      return new Promise((resolve, reject) => {
        validator.validate(this.rForm.model, (errors, fields) => {
          if (errors) {
            console.log(fields, errors)
            this.validateState = 'error'
            this.validateMessage = errors[0].message
            reject(errors)
          } else {
            this.validateState = 'success'
            resolve(true)
          }
          // validation passed
        })
      })
    }
  }
}
</script>
