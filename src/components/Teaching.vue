<template>
  <div class="teaching__container">
    <h1 class="title">Sistemas de <span>ensino</span></h1>
    <div class="content">
      <p>Os Sistemas de Ensino da SOMOS Educação tem uma proposta coesa e diferenciada que pode ser aplicada de maneira adequada as necessidades de cada Município.</p>
      <p>Material elaborado por autores renomados com larga experiência em sala de aula que promove a autonomia do aluno e o desenvolve socialmente, formando cidadãos críticos e participativos.</p>
    </div>



    <div class="teaching-systems">
      <div class="teaching-systems__item">
        <img class="system-brand" src="/static/images/rede/logo-anglo.svg" alt="Anglo">
        <h2>Sistema de Ensino Anglo</h2>
        <p>
          O Melhor parceiro para aprovação nos vestibulares. O Anglo é referência no Brasil em aprovações nas universidades,
          além de estruturar a educação no município com seu calendário pedagógico. Com a proposta “Aula dada, aula estudada”,
          tem como foco desenvolver a autonomia nos alunos a partir de um projeto pedagógico único, articulado em todos os detalhes.
          <a>Veja mais</a>
        </p>
      </div>
      <div class="teaching-systems__item bg-green">
        <img class="system-brand" src="/static/images/rede/logo-ser.svg" alt="SER">
        <h2>Sistema de Ensino Ser</h2>
        <p>
          O Ser oferece uma formação integral, construída desde os primeiros anos de vida do aluno, gerando capacidades alinhadas
          com as exigências do mundo contemporâneo, como a criatividade e o empreendedorismo. Oferece flexibilidade ao educador e
          se adapta ao formato pedagógico do município, baseando-se em seus três pilares: conhecimento prévio do aluno, formação
          leitora e desenvolvimento de senso crítico e autonomia.
          <a>Veja mais</a>
        </p>
      </div>
    </div>

    <div class="teaching-systems">
      <div class="teaching-systems__item bg-red">
        <img class="system-brand" src="/static/images/rede/logo-maxi.svg" alt="Maxi">
        <h2>Sistema de Ensino Maxi</h2>
        <p>
          Uma proposta pedagógica afetiva para o desenvolvimento do aluno O Maxi é o sistema que privilegia a educação de qualidade
          cognitiva e científica, autoconfiança e a autoestima para um crescimento social e afetivo, com pacotes que incentivam a
          leitura e opções de modelos de alfabetização. Uma proposta diferenciada que se baseia na Pedagogia Afetiva, contribuindo
          para a construção da identidade pessoal do aluno.
          <a>Veja mais</a>
        </p>
      </div>
      <div class="teaching-systems__item blank">
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'teaching'
  }
</script>
<style lang="scss">
  .teaching__container {
    background-color: #e1e1e1;

    .title {
      text-align: center;
      color: #000;
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
      color: #000;
      line-height: 1.6;
      margin: 0 auto;
    }

    .teaching-systems {
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
          width: 110px;
          display: block;
          margin: -100px auto 25px;
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
