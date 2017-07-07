<template>
  <div class="solutions__container">
    <h1 class="title">Nossas soluções educacionais</h1>
    <div class="content">
      <p>As Soluções Educacionais da SOMOS Educação, são referência de qualidade.</p>
      <p>A SOMOS Educação está preparada para apoiar a escola em todos os níveis, oferecendo uma ampla gama de conteúdos educacionais inovadores e de alta qualidade, que abordem todas as dimensões de cada um dos estudantes e dos educadores.</p>
    </div>

    <h2 class="subtitle">Programas e serviços</h2>

    <ul class="programs__list">
      <li class="programs__list__item first-line">
        <ul class="programs-detail">
          <li class="programs-detail__item icon-first-line-1">O Líder em Mim<br><a class="further-details" href="#">Veja mais</a></li>
          <li class="programs-detail__item icon-first-line-2">Assessoria Pedagógica e Formação<br><a class="further-details" href="#">Veja mais</a></li>
          <li class="programs-detail__item icon-first-line-3">Simulados e Avaliações Educacionais<br><a class="further-details" href="#">Veja mais</a></li>
        </ul>
      </li>
      <li class="programs__list__item second-line">
        <ul class="programs-detail">
          <li class="programs-detail__item icon-second-line-1">Portais Educacionais<br><a class="further-details" href="#">Veja mais</a></li>
          <li class="programs-detail__item icon-second-line-2">Projetos de leitura<br><a class="further-details" href="#">Veja mais</a></li>
          <li class="programs-detail__item icon-second-line-3">Apoio e gestão<br><a class="further-details" href="#">Veja mais</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'solutions'
  }
</script>
<style lang="scss">
  .solutions__container {
    a {
      color: #fff;
    }
    height: 630px;
    background: url(/static/images/solucao/background.jpg) no-repeat top center;

    .title {
      text-align: center;
      color: #fff;
      font-weight: bold;
      padding: 50px 50px 0;
      margin: 0;
      text-transform: uppercase;
    }

    .content {
      text-align: justify;
      width: 75%;
      color: #fff;
      line-height: 1.6;
      margin: 0 auto;
    }

    .subtitle {
      font-size: 18px;
      font-weight: bold;
      padding: 45px 50px 30px;
      margin: 0 auto;
      color: #fff;
      text-align: center;
    }

    .programs__list {
      width: 75%;
      margin: 0 auto;
    }

    .programs-detail {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__item {
        margin: 0 0 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        font-size: 14px;
        height: 120px;
        padding-left: 140px;
        background: no-repeat center left;
        width: 33%;
        font-weight: 500;

        a {
          font-size: 12px;
          font-weight: 300;
        }

        &.icon-first-line-1 {
          background-image: url(/static/images/solucao/icon-first-line-1.svg);
        }
        &.icon-first-line-2 {
          background-image: url(/static/images/solucao/icon-first-line-2.svg);
        }
        &.icon-first-line-3 {
          background-image: url(/static/images/solucao/icon-first-line-3.svg);
        }
        &.icon-second-line-1 {
          background-image: url(/static/images/solucao/icon-second-line-1.svg);
        }
        &.icon-second-line-2 {
          background-image: url(/static/images/solucao/icon-second-line-2.svg);
        }
        &.icon-second-line-3 {
          background-image: url(/static/images/solucao/icon-second-line-3.svg);
        }
      }
    }
  }

  </style>
