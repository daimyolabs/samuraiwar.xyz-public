<template>
  <div class="about">
    <div class="character">
      <div class="pattern">
        <div class="r1"></div>
        <div class="r2"></div>
        <div class="r3"></div>
        <div class="r4"></div>
        <div class="r5"></div>
      </div>
<img class="about02" src="@/assets/images/about_02.png" alt="" draggable="false" />
    </div>

    <div class="content">
      <h2>Samurai War</h2>

      <p>
        The Samurai Wars is the story of war between 5 clans for control
        of the shogunate between the Senkoku period and the Edo period.
        <br> <br>
        A total of 7,700 each unique samurai are summoned, all endowed with
        one of five families.
        <br> <br>
        According to the Samurai War's roadmap, we plan to release various
        dapps. The first, Marketplace where user can trade samurai, at low
        fees.
        <br> <br>
        And there is War-room, Play-to-earn game where each clan forms
        a DAO and conquers the provinces of Edo period's Japan.
        <br> <br>
        <a href="https://daimyolabs.notion.site/SamuraiWar-War-Room-2e3144b04a784bb981b5da821fce1432" target="_blank">War-room Docs</a>
      </p>

      <h2>Our Background</h2>

      <p>
        SamuraiWar is a project we started at Daimyolabs. In addition to
        samurai, we intend to introduce NFTs and blockchain technology to
        traditional cultures of Japan, and spread them to people around
        the world.
        <br> <br>
        If you want to know more about us, please refer to our <a href="https://daimyolabs.notion.site/SamuraiWar-Docs-bb3939ac6f5745a6b95141fec1cd313c" target="_blank">docs.</a>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'About',
  components: {},
  props: {},
  setup(props, context) {
    return {

    }
  },
  data() {
    return {

    }
  },
  computed() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/layouts/about.scss";
</style>
