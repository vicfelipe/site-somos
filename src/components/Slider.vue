<template>
  <div class="slider__container">
    <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
      <md-board id="slide1">
        <img src="/static/images/teaser/image1.jpg" alt="">
      </md-board>
      <md-board id="slide2">
        <img src="/static/images/teaser/image2.jpg" alt="">
      </md-board>
      <md-board id="slide3">
        <img src="/static/images/teaser/image3.jpg" alt="">
      </md-board>
    </md-boards>
  </div>
</template>

<script>
  export default {
    name: 'slider'
  }
</script>
<style lang="scss">
  .slider__container {
    margin-top: -76px;
    overflow: hidden;
    height: 573px;

    .md-boards .md-board {
      padding: 0;
    }

    .md-boards-navigation {
      display: none;
    }
  }
</style>
