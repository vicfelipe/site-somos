<template>
  <div class="menu__container">
  <a name="top"></a>
    <header>
      <h1 class="logo" @click="scroll('menu')"></h1>
      <nav :class="{ showing : showResponsiveMenu }">
        <ul class="menu-list">
          <li class="menu-item" @click="scroll('about-us')">Quem somos</li>
          <li class="menu-item" @click="scroll('results')">Resultados</li>
          <li class="menu-item" @click="scroll('solutions')">Soluções Educacionais</li>
          <li class="menu-item" @click="scroll('network')">Rede</li>
          <li class="menu-item" @click="scroll('contact')">Contato</li>
        </ul>
      </nav>
      <div class="call-me" id="btCallMe" @click="openDialog('modalCallMe')" :class="{ showing : showResponsiveMenu }">
        Ligamos para você
        <i class="icon-call-me"></i>
      </div>
      <ul class="social" :class="{ showing : showResponsiveMenu }">
        <a href="https://www.facebook.com/SomosEducacao/" target="_blank"><li class="social__facebook"></li></a>
        <a href="https://www.instagram.com/explore/locations/935739376/somos-educacao/" target="_blank"><li class="social__instagram"></li></a>
      </ul>
      <button class="hamb-menu" @click="toggleMenu"><i class="icon-menu"></i></button>
    </header>

    <md-dialog md-open-from="#btCallMe" md-close-to="#btCallMe" ref="modalCallMe" class="modal-call-me">
      <md-dialog-title>
        <button @click="closeDialog('modalCallMe')" class="modal-close"><i class="icon-clear"></i></button>
      </md-dialog-title>
      <md-dialog-content>
        <div class="form-container__call-me">
          <input placeholder="Nome" id="nome" name="nome"  type="text">
          <input placeholder="Email" id="email" name="email" type="text">
          <input placeholder="DDD + Telefone" id="telefone" name="telefone" type="text">
          <button id="enviar" name="enviar">Enviar</button>
        </div>
      </md-dialog-content>
    </md-dialog>

  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'main-menu',
    data () {
      return {
        showResponsiveMenu: false
      }
    },
    methods: {
      toggleMenu () {
        this.showResponsiveMenu = !this.showResponsiveMenu
      },
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      },
      scroll (target) {
        this.showResponsiveMenu = false
        target = document.querySelector('.' + target + '__container')
        event.preventDefault()
        var newOffSetTop = target.offsetTop - 75

        if (newOffSetTop < 0) {
          newOffSetTop = 0
        }

        $('html, body').animate({
          scrollTop: newOffSetTop
        }, 1000, function () {
          var $target = $(target)
          $target.focus()
          if ($target.is(':focus')) {
            return false
          } else {
            $target.attr('tabindex', '-1')
            $target.focus()
          }
        })
      }
    }
  }

</script>
<style lang="scss">

  .modal-call-me {

    z-index: 1001;

    .md-dialog-content {
      padding: 0;
    }

    .md-dialog-title {
      padding: 5px;

    }

    .form-container__call-me {
      display: flex;
      flex-direction: column;

      input {
        padding: 5px;
        margin: 10px;
      }

      button {
        background-color: #c81456;
        padding: 10px;
        color: #fff;
        border: none;
      }
    }

  }

  .menu__container {
    z-index: 2;
    height: 76px;
    position: fixed;
    width: 100%;

    @media(max-width: 600px) {
      width: 100vw;
    }


    a {
      color: #fff;
      text-decoration: none;

      &:hover {
       text-decoration: underline;
      }
    }

    .hamb-menu {
      color: #fff;
      border: none;
      background-color: transparent;
      display: none;
      z-index: 1005;
      cursor: pointer;

      @media(max-width: 600px) {
        display: block;
      }
    }

    header {
      background-color: rgba(200, 20, 86, .8);
      display: flex;
      align-items: center;
      padding: 20px 90px;

      @media(max-width: 600px) {
        padding: 20px;
        position: relative;
        justify-content: space-between;
      }

      .menu-list {
        list-style: none;
        padding: 0;
        margin: 0 0 0 30px;
        display: flex;

        @media(max-width: 600px) {
          padding: 0;
          margin: 0;
          flex-direction: column;
        }

        .menu-item {
          padding: 0 20px;
          font-size: 14px;
          color: #fff;
          text-transform: uppercase;
          cursor: pointer;

          @media(max-width: 600px) {
            padding: 20px 0;
            margin: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          }
        }
      }

      .logo {
        width: 31px;
        height: 37px;
        padding: 0;
        margin: 0;
        flex-grow: 0;
        cursor: pointer;
        background: url(/static/images/logo.svg) no-repeat;
        z-index: 1000;
      }

      nav {
        flex-grow: 1;

        @media(max-width: 600px) {
          flex-grow: 1;
          background-color: rgba(200, 20, 86, 0.9);
          width: 100vw;
          height: 100vh;
          position: absolute;
          left: 0;
          top: 0;
          padding: 100px 20px;
          display: none;
          box-sizing: border-box;

          &.showing {
            display: block;
          }
        }
      }

      .call-me {
        padding: 0 0 0 10px ;
        color: #fff;
        border: 1px solid #9D0A3B;
        display: flex;
        align-items: center;
        flex-grow: 0;
        cursor: pointer;

        @media(max-width: 600px) {
          z-index: 1002;
          position: absolute;
          right: 112px;
          display: none;
        }

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

        @media(max-width: 600px) {
          z-index: 1003;
          position: absolute;
          right: 52px;
          display: none;
        }

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

      .showing {
        &.call-me,
        &.social {
          display: flex;
        }
      }
    }


  }
</style>
