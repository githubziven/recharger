<template>
  <router-link v-if="item.path" active-class="active" :to="base + item.path" v-html="itemName" />
  <a v-else-if="item.link" :href="item.link" v-html="itemName"></a>
  <a v-else v-html="itemName"></a>
</template>

<script>
export default {
  name: 're-doc-nav-link',
  props: ['base', 'item'],
  created () {
    // console.log('PPPPP', this.base, this.item)
  },
  computed: {
    itemName () {
      const name = (this.item.title || this.item.name).split(' - ')
      return `${name[0]} <span>${name.slice(1).join(' - ')}</span>`
    }
  }
}
</script>
