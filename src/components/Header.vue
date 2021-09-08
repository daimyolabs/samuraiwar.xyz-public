<template>
  <div class="header">
    <div class="container mobile" v-if="isMobile">
      <div class="top">
        <h1><a href="/">Samurai War</a></h1>
        <button @click="mobileMenuToggle"><i class="fas fa-bars"></i></button>
      </div>

      <div class="sub-menu" v-show="mobileMenuShow">
        <a href="https://daimyolabs.notion.site/SamuraiWar-Docs-bb3939ac6f5745a6b95141fec1cd313c" target="_blank">Docs</a>
        <a href="/about" target="_self">About</a>
        <a href="https://daimyolabs.notion.site/SamuraiWar-War-Room-2e3144b04a784bb981b5da821fce1432" target="_blank" onclick="alert('It will open after sales!');">War-room</a>
        <a href="#" target="_blank" onclick="alert('It will open later.'); return false;">Marketplace</a>
      </div>
    </div>

    <div class="container" v-else>
      <h1><a href="/">Samurai War</a></h1>
      <div class="menu">
        <a href="https://daimyolabs.notion.site/SamuraiWar-Docs-bb3939ac6f5745a6b95141fec1cd313c" target="_blank">Docs</a>
        <a href="/about" target="_self">About</a>
        <a href="https://daimyolabs.notion.site/SamuraiWar-War-Room-2e3144b04a784bb981b5da821fce1432" target="_blank" onclick="alert('It will open after sales!');">War-room</a>
        <a href="#" target="_blank" onclick="alert('It will open later.'); return false;">Marketplace</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Header',
  components: {},
  props: {},
  setup(props, context) {
    const mobileCheck = () => {
      return window.outerWidth <= 900;
    }

    let isMobile = ref(false);
        isMobile.value = mobileCheck();

    window.addEventListener('resize', () => {
      isMobile.value = mobileCheck();
    });

    return {
      isMobile
    }
  },
  data() {
    return {
      mobileMenuShow: false
    }
  },
  computed() {

  },
  methods: {
    mobileMenuToggle() {
      this.mobileMenuShow = !this.mobileMenuShow;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/components/header.scss";
</style>
