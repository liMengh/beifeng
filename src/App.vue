<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    mounted(){
      this.$store.dispatch("getCategorys")
      this.$store.dispatch("getShops")
      this.getAddress()
    },
    components: {
      FooterGuide
    },
    methods: {
      ...mapActions(['getAddress'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
