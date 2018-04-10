<template>
  <div class="re-doc-body">
    <re-doc-topbar></re-doc-topbar>
    <re-doc-container>
      <re-doc-nav :navConfig="config.nav" :base="base"></re-doc-nav>
      <div class="re-doc-main">
        <div class="re-doc-markdown">
          <slot></slot>
        </div>
        <div class="re-doc-simulator">
          <simulator v-if="simulator" :src="simulator" />
          <simulator v-for="(url, index) in simulators" :key="index" v-show="index === currentSimulator" :src="url" />
        </div>
      </div>
    </re-doc-container>
  </div>
</template>

<script>
import reDocTopbar from './reDocTopBar'
import reDocContainer from './reDocContainer'
import Simulator from './simulator'
import reDocNav from './Nav.vue'
export default {
  name: 're-doc-body',
  props: {
    config: {
      type: Object,
      require: true
    },
    currentSimulator: Number,
    simulator: String,
    simulators: {
      type: Array,
      default: () => { }
    },
    base: {
      type: String,
      default: ''
    }
  },
  created () {
    // console.log('~~~~~~~~', this.currentSimulator, this.simulators)
  },
  components: {
    'simulator': Simulator,
    're-doc-topbar': reDocTopbar,
    're-doc-container': reDocContainer,
    're-doc-nav': reDocNav
  }
}
</script>

<style scoped>

</style>
