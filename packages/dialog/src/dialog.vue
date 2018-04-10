<template>
  <div class="r-dialog" :model="model" v-show="show">
    <div class="r-dialog__inner">
      <span class="iconfont icon-error" @click="handleClose"></span>
      <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: 'RDialog',
  data () {
    return {
      showDialog: false
    }
  },
  watch: {

  },
  props: {
    model: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClose () {
      this.$emit('update:show', false)
      this.$emit('close')
    }
  }
}
</script>
