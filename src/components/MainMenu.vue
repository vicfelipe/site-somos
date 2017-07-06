<template>
  <div class="menu__container">
    <header>
      <h1 class="logo"></h1>
      <nav>
        <ul class="menu-list">
          <li class="menu-item">Quem somos</li>
          <li class="menu-item">Resultados</li>
          <li class="menu-item">Rede</li>
          <li class="menu-item">Soluções Educacionais</li>
        </ul>
      </nav>
      <div class="call-me">
        Ligamos para você
        <i class="icon-call-me"></i>
      </div>
      <ul class="social">
        <li class="social__facebook"></li>
        <li class="social__instagram"></li>
      </ul>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'main-menu'
  }
</script>
<style lang="scss">
  .menu__container {
    z-index: 1;
    height: 76px;

    header {
      background-color: rgba(200, 20, 86, .8);
      display: flex;
      align-items: center;
      padding: 20px 90px;

      @media(max-width: 320px) {
        padding: 20px 10px;
      }

      .menu-list {
        list-style: none;
        padding: 0;
        margin: 0 0 0 30px;
        display: flex;

        .menu-item {
          padding: 0 20px;
          font-size: 14px;
          color: #fff;
          text-transform: uppercase;
        }
      }
      .logo {
        width: 31px;
        height: 37px;
        padding: 0;
        margin: 0;
        flex-grow: 0;
        background: url(/static/images/logo.svg) no-repeat;
      }

      nav {
        flex-grow: 1;
      }

      .call-me {
        padding: 0 0 0 10px ;
        color: #fff;
        border: 1px solid #9D0A3B;
        display: flex;
        align-items: center;
        flex-grow: 0;

        .icon-call-me {
          height: 34px;
          width: 34px;
          margin-left: 10px;
          background: #9D0A3B url(/static/images/icons/icon-call-me.svg) no-repeat center center;
        }
      }
      .social {
        margin: 0 0 0 80px;
        display: flex;

        &__facebook, &__instagram {
          display: inline-flex;
          width: 20px;
          height: 20px;
          background: transparent url(/static/images/icons/icon-facebook.svg) no-repeat center center;
        }
        &__instagram {
         background: transparent url(/static/images/icons/icon-instagram.svg) no-repeat center center;
         margin-left: 3px;
        }
      }
    }


  }
</style>
