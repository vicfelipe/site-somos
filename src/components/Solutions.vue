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
          <li class="programs-detail__item icon-first-line-1">O Líder em Mim<br><span class="further-details veja-mais" @click="open(0)" target="_blank">Veja mais</span></li>
          <li class="programs-detail__item icon-first-line-2">Assessoria Pedagógica e Formação<br><span class="further-details veja-mais" @click="open(1)" target="_blank">Veja mais</span></li>
          <li class="programs-detail__item icon-first-line-3">Simulados e Avaliações Educacionais<br><span class="further-details veja-mais" @click="open(2)" target="_blank">Veja mais</span></li>
        </ul>
      </li>
      <li class="programs__list__item second-line">
        <ul class="programs-detail">
          <li class="programs-detail__item icon-second-line-1">Portais Educacionais<br><span v-show="false" class="further-details veja-mais" @click="open(3)" target="_blank">Veja mais</span></li>
          <li class="programs-detail__item icon-second-line-2">Projetos de leitura<br><span class="further-details veja-mais" @click="open(4)" target="_blank">Veja mais</span></li>
          <li class="programs-detail__item icon-second-line-3">Apoio e gestão<br><span v-show="false" class="further-details veja-mais" @click="open(5)" target="_blank">Veja mais</span></li>
        </ul>
      </li>
    </ul>

    <md-dialog ref="modal" md-open-from="#btCallMe" md-close-to="#btCallMe">
      <md-dialog-title>
        <button @click="close()" class="modal-close"><i class="icon-clear"></i></button>
      </md-dialog-title>
      <md-dialog-content>
        <iframe :src="modalContent[selectedModal].pdflink" width="960px" height="500px" align="center" style="border: none;"></iframe>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'solutions',
    data () {
      return {
        modalContent: [
          {
            pdflink: '/static/pdf/laminas_OLEM-V3f-hotsite.pdf'
          },
          {
            pdflink: '/static/pdf/Lamina-assessoria-V3f-hotsite.pdf'
          },
          {
            pdflink: '/static/pdf/laminas_avaliacoes-v4f-hotsite.pdf'
          },
          {
            pdflink: '/static/pdf/'
          },
          {
            pdflink: '/static/pdf/laminas_Paradidaticos-V3f-hotsite.pdf'
          },
          {
            pdflink: '/static/pdf/'
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
    font-weight: normal;
  }
  .solutions__container {
    height: 630px;
    background: url(/static/images/solucao/background.jpg) no-repeat top center;
    background-size: 100%;  

    @media (max-width: 600px) {
      height: auto;
      background-size: auto 100%;
      padding-bottom: 50px;
    }

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

      @media (max-width: 600px) {
        flex-direction: column;
      }

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

        @media (max-width: 600px) {
          width: auto;
          background-size: 20%;
          padding-left: 80px;
          height: 52px;
          margin-bottom: 15px;
        }

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
