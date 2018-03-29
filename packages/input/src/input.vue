<template>
  <div
    class="r-input"
    :class="[
    !!$slots.prefix ? 'r-input--' + 'prefix' : '',
    !!$slots.suffix ? 'r-input--' + 'suffix' : '',
    inputSize ? 'r-input--' + inputSize : ''
    ]"
   :style="{ width:width+'vw'}"
  >
    <div class="r-input__inner">
      <span v-if="$slots.prefix"><slot name="prefix"></slot></span>
      <input
        type="text"
        :placeholder="!!placeholder?placeholder:''"
      >
      <span v-if="$slots.suffix"><slot name="suffix"></slot></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RInput",
    props: ['placeholder','size','width'],
    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      inputSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },
    mounted() {
      console.log(this.$ELEMENT)
      console.log(this.placeholder)
    }
  }
</script>

