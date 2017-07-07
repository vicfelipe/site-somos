<template>
  <div class="network__container">
    <h1 class="title">Nossa <span>rede satisfeita</span></h1>

    <carousel>
      <slide>
        <div class="carousel-item">
          <div class="avatar-container">
            <img src="/static/images/satisfeitos/avatar1.png">
          </div>
          <div class="content">
            <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”</p>
            <p>
              <strong>João Monteiro</strong><br>
              Professor
            </p>
          </div>
        </div>
      </slide>
      <slide>
        <div class="carousel-item">
          <div class="avatar-container">
            <img src="/static/images/satisfeitos/avatar1.png">
          </div>
          <div class="content">
            <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”</p>
            <p>
              <strong>João Monteiro</strong><br>
              Professor
            </p>
          </div>
        </div>
      </slide>
    </carousel>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { VueCarousel, Carousel, Slide } from 'vue-carousel'

  Vue.use(VueCarousel)
  Vue.use(Carousel)
  Vue.use(Slide)

  export default {
    name: 'network',
    components: {
      Carousel,
      Slide
    }
  }
</script>
<style lang="scss">
  .network__container {
    background-color: #e1e1e1;

    .title {
      text-align: center;
      color: #000;
      font-weight: bold;
      padding: 50px 50px 30px;
      margin: 0;
      text-transform: uppercase;

      span {
        color: #EC3680;
        font-weight: bold;
      }
    }

    .VueCarousel-slide {

    }
  }

  </style>
