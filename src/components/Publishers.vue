<template>
  <div class="publishers__container">
    <h1 class="title">Nossas <span>editoras</span></h1>

    <div class="publishers">
      <div class="publishers__item bg-red">
      <div class="system-brand"><img src="/static/images/rede/editora-atica.svg" alt="Editora Atica"></div>
        <h2>Ática e Scipione</h2>
        <p>
          As Editoras Ática e Scipione são líderes no mercado de livros didáticos e paradidáticos e protagonizam inúmeras inovações
          nas áreas editorial e de produtos educacionais. Juntas, contam com um portfolio de cerca de 2 mil títulos, que incluem
          renomadas obras pedagógicas, clássicos das literaturas infantil e juvenil, atlas e dicionários.
          <br><a href="http://www.aticascipione.com.br" target="_blank">Veja mais</a>
        </p>
      </div>

      <div class="publishers__item blank">
        <img src="/static/images/editoras/garoto-sobre-livros.png" alt="">
      </div>
    </div>

    <div class="publishers">
      <div class="publishers__item bg-green">
      <div class="system-brand no-border"><img src="/static/images/rede/editora-saraiva.svg" alt="Editora Saraiva"></div>
        <h2>Sistema de Ensino Maxi</h2>
        <p>
          As Editoras Ática e Scipione são líderes no mercado de livros didáticos e paradidáticos e protagonizam inúmeras inovações
          nas áreas editorial e de produtos educacionais. Juntas, contam com um portfolio de cerca de 2 mil títulos, que incluem
          renomadas obras pedagógicas, clássicos das literaturas infantil e juvenil, atlas e dicionários.
          <br><a href="http://www.aticascipione.com.br" target="_blank">Veja mais</a>
        </p>
      </div>

      <div class="publishers__item">
        <div class="system-brand"><img src="/static/images/rede/editora-scipione.svg" alt="Editora Scipione"></div>
        <h2>Sistema de Ensino Ser</h2>
        <p>
          O Ser oferece uma formação integral, construída desde os primeiros anos de vida do aluno, gerando capacidades alinhadas
          com as exigências do mundo contemporâneo, como a criatividade e o empreendedorismo. Oferece flexibilidade ao educador e
          se adapta ao formato pedagógico do município, baseando-se em seus três pilares: conhecimento prévio do aluno, formação
          leitora e desenvolvimento de senso crítico e autonomia.
          <br><a>Veja mais</a>
        </p>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'publishers'
  }
</script>
<style lang="scss">
  .publishers__container {
    background-color: #e1e1e1;
    background: url(/static/images/editoras/background.jpg);

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
      text-align: justify;
      width: 75%;
      color: #fff;
      line-height: 1.6;
      margin: 0 auto;
    }

    .publishers {
      width: 75%;
      margin: 110px auto 100px;
      display: flex;

      &__item {
        &:first-child {
          margin-right: 20px;
        }
        width: 50%;
        padding: 45px;
        border-radius: 15px;
        background-color: #3493D6;

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
          position: relative;
          height: 100px;
          margin-top: -800px;
          padding: 0;

          img {
            margin-left: 50px;
          }
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
