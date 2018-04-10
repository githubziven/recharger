<template>
  <div class="re-doc-nav" :style="style">
    <ul>
      <li class="re-doc-nav__item" v-for="(item, index) in navConfig" :key="index">
        <re-doc-nav-link :item="item" :base="base" />
        <ul v-if="item.children">
          <li class="nav-item" v-for="(navItem, index) in item.children" :key="index">
            <re-doc-nav-link :item="navItem" :base="base" />
          </li>
        </ul>
        <div v-if="item.groups" v-for="(group, index) in item.groups" :key="index">
          <div class="re-doc-nav__group-title">{{ group.groupName }}</div>
          <ul>
            <li :key="index" class="re-doc-nav__subitem" v-for="(navItem, index) in group.list" v-if="!navItem.disabled">
              <re-doc-nav-link :item="navItem" :base="base" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 're-doc-nav',

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      top: 60,
      bottom: 0
    };
  },

  computed: {
    style() {
      return {
        top: this.top + 'px',
        bottom: this.bottom + 'px'
      };
    }
  },

  created() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
    console.log('???',this.navConfig,this.base)
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    }
  }
};
</script>

<style lang="scss" type="text/scss">
@import '../assets/scss/variable.scss';

.re-doc-nav {
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1;
  min-width: 250px;
  max-width: 250px;
  position: fixed;
  overflow-y: scroll;
  padding: 25px 0 75px;

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;
  }

  @media (min-width: $re-doc-row-max-width) {
    left: 50%;
    margin-left: calc(-$re-doc-row-max-width/2);
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, .2)
  }

  &__item,
  &__subitem {
    a {
      margin: 0;
      display: block;
      color: #455a64;
      font-size: 16px;
      padding: 10px calc($re-doc-padding/2) 10px $re-doc-padding;
      line-height: 24px;
      transition: all .3s;

      &.active {
        color: $re-doc-blue;
        background-color: #f5f7fa;
      }
    }
  }

  &__item {
    > a {
      font-weight: bold;
    }
  }

  &__subitem {
    a {
      font-size: 14px;

      &:hover {
        color: $re-doc-blue;
        background-color: #f5f7fa;
      }
    }

    span {
      opacity: .6;
      font-size: 13px;
    }
  }

  &__group-title {
    font-size: 12px;
    line-height: 40px;
    padding-left: $re-doc-padding;
    color: $re-doc-text-light-blue;
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    &__item,
    &__subitem {
      a {
        line-height: 22px;
      }
    }

    &__subitem {
      a {
        font-size: 13px;
      }
    }
  }
}
</style>
