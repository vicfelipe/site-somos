<template>
  <div class="slider__container">
    <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
      <md-board id="slide1"></md-board>
      <md-board id="slide2"></md-board>
      <md-board id="slide3"></md-board>
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
    overflow: hidden;
    height: 621px;

    .md-boards .md-board {
      padding: 0;
      width: 100%;
      height: 573px;

      @media(max-width: 600px) {
        padding: 0;
        width: 100vh;
        height: calc(736*100/414)px;
      }
    }

    #slide1 {
      background: url(/static/images/teaser/image1.jpg) no-repeat;
      background-size: cover;
      background-position: center;

      @media(max-width: 600px) {
        background: url(/static/images/teaser/image1-mobile.jpg) no-repeat;
        background-size: cover;
        background-position: center;
      }
    }

    #slide2 {
      background: url(/static/images/teaser/image2.jpg) no-repeat;
      background-size: cover;
      background-position: center;
      @media(max-width: 600px) {
        background: url(/static/images/teaser/image2-mobile.jpg) no-repeat;
        background-size: cover;
        background-position: center;
      }
    }

    #slide3{
      background: url(/static/images/teaser/image3.jpg) no-repeat;
      background-size: cover;
      background-position: center;
      @media(max-width: 600px) {
        background: url(/static/images/teaser/image3-mobile.jpg) no-repeat;
        background-size: cover;
        background-position: center;
      }

    }
  }
</style>
