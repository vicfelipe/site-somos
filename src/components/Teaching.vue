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
          <br><br><span target="_blank" @click="open(0)" class="veja-mais">Veja mais</span>
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
          <br><br><span class="veja-mais" target="_blank" @click="open(1)">Veja mais</span>
        </p>
      </div>
      <div class="teaching-systems__item bg-red">
        <img class="system-brand" src="/static/images/rede/logo-maxi.svg" alt="Maxi">
        <h2>Sistema de Ensino Maxi</h2>
        <p>
          Uma proposta pedagógica afetiva para o desenvolvimento do aluno O Maxi é o sistema que privilegia a educação de qualidade
          cognitiva e científica, autoconfiança e a autoestima para um crescimento social e afetivo, com pacotes que incentivam a
          leitura e opções de modelos de alfabetização. Uma proposta diferenciada que se baseia na Pedagogia Afetiva, contribuindo
          para a construção da identidade pessoal do aluno.
          <br><br><span class="veja-mais" @click="open(2)" target="_blank">Veja mais</span>
        </p>
      </div>
      <div class="teaching-systems__item blank">
      </div>

    </div>

    <md-dialog ref="modal" md-open-from="#btCallMe" md-close-to="#btCallMe">
      <md-dialog-title>
        <button @click="close()" class="modal-close"><i class="icon-clear"></i></button>
      </md-dialog-title>
      <md-dialog-content>
        <h1><a :href="modalContent[selectedModal].site" target="_blank">Ir para o {{modalContent[selectedModal].sistemaNome}}</a></h1>
        <iframe :src="modalContent[selectedModal].pdflink" width="960px" height="500px" align="center" style="border: none;"></iframe>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'teaching',
    data () {
      return {
        modalContent: [
          {
            sistemaNome: 'Sistema de Ensino Anglo',
            site: 'http://www.sistemaanglo.com.br/Paginas/Home.aspx',
            pdflink: '/static/pdf/laminas_Anglo-V5f-hotsite.pdf'
          },
          {
            sistemaNome: 'Sistema de Ensino SER',
            site: 'http://www.ser.com.br/#/index',
            pdflink: '/static/pdf/lamina-SER-v3f-hotsite.pdf'
          },
          {
            sistemaNome: 'Sistema de Ensino Maxi',
            site: 'http://www.sistemadeensinomaxi.com.br/#/index',
            pdflink: '/static/pdf/laminas_Maxi-V4f-hotsite.pdf'
          }
        ],
        selectedModal: 0,
        clickedElement: null
      }
    },
    methods: {
      open (modalIndex) {
        this.selectedModal = modalIndex
        this.$refs.modal.open()
      },
      close () {
        this.$refs.modal.close()
      }
    }
  }
</script>
<style lang="scss">
  .md-dialog-container{
    background-color: rgba(0,0,0,0.7) !important;
  }
  .md-dialog{
    position: absolute;
    z-index: 2;
  }
  .md-dialog-content{
    overflow: hidden !important;
  }
  .veja-mais{
    text-decoration: underline;
    cursor: pointer;
  }
  .teaching__container {

    background-color: #e1e1e1;
    box-sizing: border-box;

    a {
      color: #fff;
    }

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
