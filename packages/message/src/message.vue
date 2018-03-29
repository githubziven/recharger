<template>
  <transition
    name="msgbox-fade"
    @before-enter="beforeEnter"
    @after-leave="afterLeave"
  >
    <div class="r-message-box" v-show="showBox">
      <div class="r-message-box__mask" @touchstart="showChange">
      </div>
      <div class="r-message-box__body">
        <div class="r-message-box__title" v-if="options.title">{{options.title}}</div>
        <div class="r-message-box__icon" v-if="options.iconShow"><i :class="[defautIconClass, options.iconClass]"></i>
        </div>
        <transition name="fade">
          <div class="r-message-box__content">{{options.message}}</div>
        </transition>
        <div class="r-message-box__input" v-show="options.$type==='input'"></div>
        <div class="r-message-box__btn" v-show="options.$type==='alert'||options.$type==='loading'"></div>
        <div class="r-message-box__confirm" v-show="options.$type==='input'||options.$type==='confirm'"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "RMessage",
    data() {
      return {
        showBox: false,
        defautIconClass: 'iconfont',
        options: {
          message: '',
          title: '',
          iconShow: false,
          iconClass: ''
        }
      }
    },
    created() {
    },
    methods: {
      showChange() {
        this.showBox = false
      },
      beforeEnter: function (el) {

        console.log('准备进入')

      },
      enter: function (el, done) {
        console.log('进入')
      },
      afterEnter: function (el) {
        console.log('进入之后')
      },
      leave: function (el, done) {
        // ...
        console.log('离开')

      },
      afterLeave: function (el) {
        // ...
        document.body.classList.remove('hidden-overflow')
        console.log('离开之后')
      },
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .msgbox-fade-enter-active {
    animation: msgbox-fade-in .3s;
  }

  .msgbox-fade-leave-active {
    animation: msgbox-fade-out .3s;
  }

  @keyframes msgbox-fade-in {
    0% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes msgbox-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
  }

</style>
