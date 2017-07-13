<template>
  <div class="about-us__container">
    <img src="/static/images/about-us-girl.png" alt="Quem Somos" class="section-image">
    <h1 class="title">QUEM <span>SOMOS</span></h1>
    <div class="content">
      <p>Somos a maior empresa de ensino básico do País.   Temos a missão de transformar a realidade por meio da Educação, nas nossas escolas próprias, em parceria com as principais escolas privadas e em conjunto com as mais sérias e comprometidas redes públicas brasileiras.</p>
      <p>Para nós, educar é constituir indivíduos plenos, que sejam, a um só tempo, sólidos pedagogicamente, éticos e protagonistas.   Indivíduos que coloquem o “nós” adiante do “eu”.   Que assumam um papel autoral, colaborativo e generoso nas diversas dimensões de suas vidas pessoais e profissionais.   Líderes que, nos setores público e privado, deixem um legado de transformação ao Brasil.</p>
      <p>Durante muitos anos, nos capacitamos intensamente para poder formar essas parcerias, por meio de múltiplos movimentos estratégicos.   Com base neles, hoje contamos com o mais abrangente portfólio de Soluções Educacionais que nos diferenciam na proposição de uma visão de educação transformadora e de longo prazo.</p>
      <p>Ao realizar uma parceria conosco, a sua rede contará com as melhores soluções educacionais disponíveis no mercado, e se beneficiará de encontros, eventos e trocas com outras redes de Educadores de todo o País. Juntos podemos construir muito mais.</p>
    </div>

    <div class="brand-numbers">
      <ul class="brand-numbers__list">
        <li class="brand-numbers__list__item">
          <div class="brand-numbers__number">10 <span>MIL</span></div>
          <div class="brand-numbers__description">ESCOLAS</div>
        </li>
        <li class="brand-numbers__list__item">
          <div class="brand-numbers__number">60%</div>
          <div class="brand-numbers__description">DOS ALUNOS DO BRASIL</div>
        </li>
        <li class="brand-numbers__list__item">
          <div class="brand-numbers__number">40 <span class="small-text">MILHÕES</span></div>
          <div class="brand-numbers__description">DE LIVROS<br>PRODUZIDOS<br>ANUALMENTE</div>
        </li>
      </ul>
    </div>

    <div class="brands">
      <ul class="brands__list">
        <li class="brands__list__item"><img src="/static/images/rede/logo-anglo.svg" alt="Anglo"></li>
        <li class="brands__list__item"><img src="/static/images/rede/logo-ser.svg" alt="SER"></li>
        <li class="brands__list__item"><img src="/static/images/rede/logo-maxi.svg" alt="Maxi"></li>
        <li class="brands__list__item"><img src="/static/images/rede/editora-atica.svg" alt="Editora Ática"></li>
        <li class="brands__list__item"><img src="/static/images/rede/editora-scipione.svg" alt="Editora Scipione"></li>
        <li class="brands__list__item"><img src="/static/images/rede/editora-saraiva.svg" alt="Editora Saraiva"></li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'about-us'
  }
</script>

<style lang="scss">
  .about-us__container {
    padding: 30px 80px;

      @media(max-width: 600px) {
        padding: 40px;
      }

    .title {
      padding: 0;
      margin: 0 0 20px;
      color: #000;
      font-size: 36px;

      span {
        color: #EC3680;
      }
    }

    .content {
      text-align: justify;
      width: 680px;
      line-height: 1.6;

      @media(max-width: 600px) {
        width: 100%;
      }
    }

    .section-image {
      position: absolute;
      right: 100px;
      top: 430px;

      @media(max-width: 1220px) {
        display: none;
      }
    }

    .brand-numbers {
      margin: 70px 0;

      &__list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media(max-width: 600px){
          flex-direction: column;
        }

        &__item {
          min-width: 300px;
          display: flex;
          align-items: center;

          @media(max-width: 600px){
            flex-direction: column;
          }
        }
      }

      &__number {
        width: 94px;
        height: 92px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        background: transparent url(/static/images/icons/icon-brand-bullet.svg) no-repeat center center;
        line-height: 0.9;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
          font-size: 13px;
          &.small-text {
            font-size: 7px;
          }
        }
      }

      &__description {
        margin-left: 15px;

        @media(max-width: 600px){
          margin: 10px 0 20px;
          text-align: center;
        }
      }
    }

    .brands {
      margin: 70px 0;

      &__list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        &__item {
          @media(max-width: 600px){
            width: 80px;
            margin-bottom: 30px;
            }
        }
      }
    }
  }
</style>
