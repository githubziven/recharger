<template>
    <div class="re-doc-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 're-doc-container'
}
</script>

<style lang="scss" type="text/scss" scoped>
@import "../assets/scss/variable";
.re-doc-container {
  position: absolute;
  width: 100%;
  background-color: #32a973;
  top: $re-doc-header-top-height;
  left: 0;
  bottom: 0;
}
</style>
