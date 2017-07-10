<template>
  <div class="network__container">
    <h1 class="title">Nossa <span>rede satisfeita</span></h1>

    <div class="carousel-container">
      <div v-for="slide in slides" class="carousel-item" :style="{ backgroundImage: slide.bgimage }">
        <div class="avatar-container">
          <img :src="slide.avatar">
        </div>
        <div class="content">
          <p>{{ slide.text }}</p>
          <p>
            <strong>{{ slide.name }}</strong><br>
            {{ slide.position }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'network',
    data () {
      return {
        slides: [
          {
            avatar: '/static/images/satisfeitos/avatar1.png',
            bgimage: 'url(/static/images/satisfeitos/bg1.png)',
            text: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”',
            name: 'João Monteiro',
            position: 'Professor'
          },
          {
            avatar: '/static/images/satisfeitos/avatar2.png',
            bgimage: 'url(/static/images/satisfeitos/bg2.png)',
            text: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”',
            name: 'Maria Clara Souza',
            position: 'Pedagoga'
          },
          {
            avatar: '/static/images/satisfeitos/avatar3.png',
            bgimage: 'url(/static/images/satisfeitos/bg3.png)',
            text: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”',
            name: 'Manuel Santos',
            position: 'Estudante'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .network__container {
    background-color: #fff;
    padding-bottom: 80px;

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

    .carousel-container {
      display: flex;
      justify-content: space-between;
      width: 84%;
      margin: 0 auto;
    }

    .carousel-item {
      width: 300px;
      border-radius: 5px;
      border: 1px solid #000;
      background: no-repeat center top #fff;
      padding: 90px 20px 10px;
      box-sizing: border-box;
      background-position-y: -3px;

      .avatar-container {
          border: 1px solid red;
          border-radius: 50px;
          width: 90px;
          height: 90px;
          margin: 0 auto;

        img {
          border: 2px solid white;
          border-radius: 50px;
        }
      }
    }
  }

  </style>
