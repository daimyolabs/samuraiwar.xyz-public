<template>
  <div class="main">
    <div class="samurai-world">
      <div class="countdown">
        <div>
          <span>{{time.h}}</span>
          <span>:</span>
          <span>{{time.m}}</span>
          <span>:</span>
          <span>{{time.s}}</span>
        </div>
        <div><span>HRS</span> <span style="margin-left: 13px;">MINS</span> <span>SECS</span></div>
        <div><span>SEP 9th 1PM(ET)/5PM UTC</span></div>
      </div>

      <div class="object-group">
        <img class="tree03" src="@/assets/images/tree03.png" alt="" draggable="false" />
        <img class="tree02" src="@/assets/images/tree02.png" alt="" draggable="false" />
        <img class="tree01" src="@/assets/images/tree01.png" alt="" draggable="false" />

        <img class="tree07" src="@/assets/images/tree07.png" alt="" draggable="false" />
        <img class="tree06" src="@/assets/images/tree06.png" alt="" draggable="false" />
        <img class="tree05" src="@/assets/images/tree05.png" alt="" draggable="false" />
        <img class="tree04" src="@/assets/images/tree04.png" alt="" draggable="false" />

        <img class="rock" src="@/assets/images/rock.png" alt="" draggable="false" />

        <img class="castle_100" src="@/assets/images/castle_100.png" alt="" draggable="false" />
        <img class="castle_0" src="@/assets/images/castle_0.png" alt="" draggable="false" />

        <button class="metamask" onclick="alert('It will open later.');">
          <img src="@/assets/images/metamask_fox.png" alt="Samurai War Buy" />
        </button>

        <img class="sun" src="@/assets/images/sun.png" alt="" draggable="false" />

        <img class="cloud" src="@/assets/images/cloud.png" alt="" draggable="false" />
        <img class="sea" src="@/assets/images/sea.png" alt="" draggable="false" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Main',
  components: {},
  props: {},
  setup(props, context) {
    const countDownDate = new Date("Sep 9, 17:00:00 +0000 2021").getTime();
    const time = reactive({
      d: 0,
      h: 0,
      m: 0,
      s: 0
    });

    // Update the count down every 1 second
    let x = setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      time.d = Math.floor(distance / (1000 * 60 * 60 * 24));
      time.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      time.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      time.s = Math.floor((distance % (1000 * 60)) / 1000);

      time.h += time.d * 24;

      time.h = time.h < 10 ? '0' + time.h : time.h;
      time.m = time.m < 10 ? '0' + time.m : time.m;
      time.s = time.s < 10 ? '0' + time.s : time.s;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);

    return {
      time
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
  @import "~@/assets/scss/layouts/main.scss";
</style>
