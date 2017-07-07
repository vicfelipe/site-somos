<template>
  <div class="results__container">
    <h1 class="title">Nossos <span>resultados</span></h1>
    <ul class="results__list">
      <li class="results__list__item aumento-indicadores">
        <h2 class="results__list__item__title">Aumento dos Indicadores Educacionais </h2>
        <ul class="results-detail">
          <li class="results-detail__item icon-indicadores-1">97% dos municípios acima da média nacional do IDEB</li>
          <li class="results-detail__item icon-indicadores-2">93% dos municípios acima da sua meta do IDEB</li>
          <li class="results-detail__item icon-indicadores-3">7 Municípios entre os 132 melhores indicadores do Brasil</li>
        </ul>
      </li>
      <li class="results__list__item desenvolvimento-pedagogico">
        <h2 class="results__list__item__title">Desenvolvimento pedagógico de gestores e educadores</h2>
        <ul class="results-detail">
          <li class="results-detail__item icon-desenvolvimento-1">Mais de 7000 professores formados no ano de 2016</li>
          <li class="results-detail__item icon-desenvolvimento-2">Quase 500 assessorias e formações no ano de 2016</li>
          <li class="results-detail__item icon-desenvolvimento-3">Alto índice de satisfação entre os professores </li>
        </ul>
      </li>
      <li class="results__list__item formacao-protagonistas">
        <h2 class="results__list__item__title">Formação de alunos protagonistas do futuro</h2>
        <ul class="results-detail">
          <li class="results-detail__item icon-formacao-1">800 mil livros entregues a redes municipais no último ano</li>
          <li class="results-detail__item icon-formacao-2">185 mil simulados aplicados</li>
          <li class="results-detail__item icon-formacao-3">15 milhões de perguntas corrigidas com encaminhamentos</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'results'
  }
</script>
<style lang="scss">
  .results__container {
    h1, h2 {
      text-align: center;
      color: #fff;
      font-size: 28px;
      text-transform: uppercase;
      margin: 0 0 30px 0;
    }

    .title {
      background-color: #C5C5C5;
      color: #000;
      font-weight: normal;
      padding: 10px;
      margin: 0;

      span {
        color: #EC3680;
        font-weight: bold;
      }
    }

    .aumento-indicadores {
      background-color: #2A80BE;
    }

    .desenvolvimento-pedagogico {
      background-color: #E12362;
    }

    .formacao-protagonistas {
      background-color: #DCAC14;
    }

    .results__list__item {
      padding: 20px 30px;
      color: #fff;

    }

    .results-detail {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__item {
        margin: 0 30px 10px;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 16px;
        height: 78px;
        padding-left: 100px;
        background: no-repeat center left;
        width: 33%;

        &.icon-indicadores-1 {
          background-image: url(/static/images/resultados/icon-indicadores-1.svg);
        }
        &.icon-indicadores-2 {
          background-image: url(/static/images/resultados/icon-indicadores-2.svg);
        }
        &.icon-indicadores-3 {
          background-image: url(/static/images/resultados/icon-indicadores-3.svg);
        }
        &.icon-desenvolvimento-1 {
          background-image: url(/static/images/resultados/icon-desenvolvimento-1.svg);
        }
        &.icon-desenvolvimento-2 {
          background-image: url(/static/images/resultados/icon-desenvolvimento-2.svg);
        }
        &.icon-desenvolvimento-3 {
          background-image: url(/static/images/resultados/icon-desenvolvimento-3.svg);
        }
        &.icon-formacao-1 {
          background-image: url(/static/images/resultados/icon-formacao-1.svg);
        }
        &.icon-formacao-2 {
          background-image: url(/static/images/resultados/icon-formacao-2.svg);
        }
        &.icon-formacao-3 {
          background-image: url(/static/images/resultados/icon-formacao-3.svg);
        }
      }
    }
  }
</style>
