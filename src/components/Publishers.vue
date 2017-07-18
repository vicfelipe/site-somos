<template>
  <div class="publishers__container">
    <h1 class="title">Nossas <span>editoras</span></h1>

    <img src="/static/images/editoras/garoto-sobre-livros.png" class="section-image" alt="">

    <div class="content" v-html="content"></div>

    <div class="publishers">
      <div v-for="publisher in publishers" class="publishers__item" :class="publisher.color" :key="publisher[0]">
        <div v-if="publisher.logotype" class="system-brand" :class="{ 'no-border' : !border }"><img :src="publisher.logotype" :alt="publisher.title"></div>
        <h2>{{ publisher.title }}</h2>
        <p>
          {{ publisher.content }}
          <br><br><a v-if="publisher.link" :href="publisher.link" target="_blank">Veja mais</a>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'teaching',
    data () {
      return {
        content: '<p>A SOMOS Educação está preparada para apoiar as redes em todos os níveis, oferecendo uma ampla gama de conteúdos educacionais inovadores e de alta qualidade.</p><p>E para isso conta com as mais variadas obras didáticas e paradidaticas das conceituadas Editoras Atica, Scipione e Saraiva.</p>',
        border: false,
        publishers: [{
          color: 'bg-red',
          logotype: '/static/images/rede/editora-atica.svg',
          title: 'Ática e Scipione',
          content: 'As Editoras Ática e Scipione são líderes no mercado de livros didáticos e paradidáticos e protagonizam inúmeras inovações nas áreas editorial e de produtos educacionais. Juntas, contam com um portfolio de cerca de 2 mil títulos, que incluem renomadas obras pedagógicas, clássicos das literaturas infantil e juvenil, atlas e dicionários.',
          link: 'http://www.aticascipione.com.br'
        },
        {
          color: 'blank'
        },
        {
          color: 'bg-blue',
          logotype: '/static/images/rede/editora-scipione.svg',
          title: 'Editora Scipione',
          content: 'As Editoras Ática e Scipione são líderes no mercado de livros didáticos e paradidáticos e protagonizam inúmeras inovações nas áreas editorial e de produtos educacionais. Juntas, contam com um portfolio de cerca de 2 mil títulos, que incluem renomadas obras pedagógicas, clássicos das literaturas infantil e juvenil, atlas e dicionários.',
          link: 'http://www.aticascipione.com.br'
        },
        {
          color: 'bg-green',
          logotype: '/static/images/rede/editora-saraiva.svg',
          title: 'Saraiva',
          content: 'Presente no segmento editorial desde 1917, a Saraiva Educação integra a SOMOS Educação desde dezembro de 2015, com um portfolio completo e sempre atenta ao desenvolvimento do estudante, a marca é referência na produção de conteúdo para a educação básica, preparatórios, ensino técnico e superior.',
          link: 'http://www.editorasaraiva.com.br'
        }]
      }
    }
  }
</script>
<style lang="scss">
  .publishers__container {

    background: url(/static/images/editoras/background.jpg);
    box-sizing: border-box;
    position: relative;
    background-size: auto 100%;

    a {
      color: #fff;
    }

    .title {
      text-align: center;
      color: #fff;
      font-weight: bold;
      padding: 50px 50px 0;
      margin: 0;
      text-transform: uppercase;

      span {
        color: #EC3680;
        font-weight: bold;
      }
    }

    .content {
      text-align: left;
      width: 45%;
      margin: 0 auto 0 12.5%;
      color: #fff;
      line-height: 1.6;

      @media(max-width: 600px) {
        width: 75%;
        margin: 0 auto;
      }
    }

    .section-image {
      position: absolute;
      top: -602px;
      right: 67px;

      @media(max-width: 600px) {
        display: none;
      }
    }

    .publishers {
      width: 75%;
      margin: 110px auto 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      &__item {
        box-sizing: border-box;
        width: 49%;
        padding: 45px;
        border-radius: 15px;
        background-color: #3493D6;
        margin-bottom: 80px;

        @media (max-width: 600px) {
          width: 100%;
          box-sizing: border-box;
          padding: 45px 25px;
          margin-bottom: 80px;
          &.blank {
            display: none;
          }
        }

        .system-brand {
          display: block;
          margin: -100px auto 25px;
          width: 110px;
          background: white;
          border-radius: 19px;
          height: 115px;
          box-sizing: border-box;
          border: 6px solid white;
          overflow: hidden;

          img {
            width: 110px;
            margin: -6px;
          }

          &.no-border {
            border: none;

            img {
              margin: 0;
            }
          }
        }

        h2 {
          font-size: 18px;
          font-weight: bold;
          color: #fff;
        }

        p {
          font-size: 14px;
          font-weight: normal;
          color: #fff;
        }

        &.blank {
          background-color: transparent;
        }

        &.bg-green {
          background-color: #2EC771;
        }

        &.bg-red {
          background-color: #E01316;
        }
      }
    }
  }

  </style>
