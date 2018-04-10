<template>
  <form class="r-form" :rules="rules">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "RForm",
  componentName: "RForm",
  props: ['rules', 'model'],
  provide: function provide () {
    return {
      rForm: this
    };
  },
  data () {
    return {
      fields: []
    }
  },
  created () {
    this.$on('rl.form.addField', (field) => {
      if (field) {
        console.log(111111, field)
        this.fields.push(field);
      }
    })
  },
  // watch: {
  //   rules() {
  //     console.log('123456')
  //     return this.validate()
  //   }
  // },
  methods: {
    validate (callback = function () { }) {
      console.log('232323', this.model, this.rules, callback)
      this.fields.forEach((item, index) => {
        item.validate().then(valid => callback(valid)).catch(() => callback(false))
      })
    }
  }

}
</script>
