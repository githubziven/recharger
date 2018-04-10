<template>
  <div id="app">
   <re-doc-body :simulators="simulators" :current-simulator="currentSimulator" :config="config" base="/zh-CN">
     <router-view/>
   </re-doc-body>
  </div>
</template>

<script>
  import reDocBody from './components/reDocBody.vue'
  import config from './config/markdown.nav.config.js'
  export default {
    name: 'App',
    data(){
      return{
        simulators: [`/examples/#/zh-CN/test`],
        config:config["zh-CN"]
      }
    },
    components: {
      're-doc-body':reDocBody
    },
    computed:{
      currentSimulator() {
        const { name } = this.$route;
        console.log('currentSimulator', name && name.indexOf('demo') !== -1 ? 1 : 0)
        return name && name.indexOf('demo') !== -1 ? 1 : 0;
      }
    },
    created(){
      console.log('!!!!',this.config)
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "assets/scss/normalize";
  @import "./assets/scss/md";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
