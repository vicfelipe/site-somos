<template>
  <div class="menu__container">
  <a name="top"></a>
    <header>
      <h1 class="logo" @click="scroll('menu')"></h1>
      <nav>
        <ul class="menu-list">
          <li class="menu-item" @click="scroll('about-us')">Quem somos</li>
          <li class="menu-item" @click="scroll('results')">Resultados</li>
          <li class="menu-item" @click="scroll('solutions')">Soluções Educacionais</li>
          <li class="menu-item" @click="scroll('network')">Rede</li>
          <li class="menu-item" @click="scroll('contact')">Contato</li>
        </ul>
      </nav>
      <div class="call-me" id="btCallMe" @click="openDialog('modalCallMe')">
        Ligamos para você
        <i class="icon-call-me"></i>
      </div>
      <ul class="social">
        <li class="social__facebook"></li>
        <li class="social__instagram"></li>
      </ul>
    </header>

    <md-dialog md-open-from="#btCallMe" md-close-to="#btCallMe" ref="modalCallMe">
      <md-dialog-title>A matéria pode ter um texto</md-dialog-title>
      <md-dialog-content>
        <div class="form-container">
          <div class="form-container__left">
            <input placeholder="Nome" id="nome" name="nome"  type="text">
            <input placeholder="Email" id="email" name="email" type="text">
            <input placeholder="DDD + Telefone" id="telefone" name="telefone" type="text">
            <button id="enviar" name="enviar">Enviar</button>
          </div>
        </div>
      </md-dialog-content>
    </md-dialog>

  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'main-menu',
    methods: {
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      },
      onOpen () {
        console.log('Opened')
      },
      onClose (type) {
        console.log('Closed', type)
      },
      scroll (target) {
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
  .menu__container {
    z-index: 1000;
    height: 76px;
    position: fixed;
    width: 1280px;


    a {
      color: #fff;
      text-decoration: none;

      &:hover {
       text-decoration: underline;
      }
    }

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
          cursor: pointer;
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
