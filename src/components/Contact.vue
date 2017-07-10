<template>
  <div class="contact__container">
    <h1 class="title">Entre em <span>contato</span></h1>
    <div class="content">
      <p>
        Preencha o formulário a seguir e agende uma visita com um de nossos consultores, ou se preferir, ligue agora para:<br>
        <span>(11) 4383-8910</span>
      </p>
    </div>

    <div class="form-container">
      <div class="form-container__left">
          <input placeholder="Nome" id="nome" name="nome"  type="text">
          <input placeholder="DDD + Telefone" id="telefone" name="telefone" type="text">
          <input placeholder="Email" id="email" name="email" type="text">
          <input placeholder="Cargo" id="cargo" name="cargo" type="text">
          <input placeholder="Estado" id="estado" name="estado" type="text">
          <input placeholder="Municipio" id="municipio" name="municipio" type="text">
      </div>

      <div class="form-container__right">
        <textarea placeholder="Mensagem" id="mensagem" name="mensagem" type="text"></textarea>
        <button id="enviar" name="enviar">Enviar</button>
      </div>
    </div>
    <div class="footer">
      <strong>SOMOS Educação</strong> | 2017 - Todos os direitos reservados.<br>
      Desenvolvido por Oficina de Marketing
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .contact__container {
    background-color: #333;

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
      text-align: center;
      width: 75%;
      color: #fff;
      line-height: 1.6;
      margin: 0 auto;

      span {
        font-size: 34px;
        font-weight: bold;
      }

      padding-bottom: 30px;
    }

    .form-container {
      padding: 0 30px 70px;
      width: 700px;
      margin: 0 auto;
      display: flex;

      &__right,
      &__left {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      &__left {
        margin-right: 30px;
      }

      .input-field {
        box-sizing: border-box;
      }

      input, textarea, button {
        border: none;
        padding: 5px;
        margin: 5px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-family: sans-serif;
      }

      button {
        color: #fff;
        background-color: rgba(204,21,74,1)
      }

      #mensagem {
        flex-grow: 1;
      }
    }

    .footer {
      background-color: #000;
      color: #EC3680;
      text-align: center;
      padding: 20px;
      width: 100%;
      font-size: 14px;
        box-sizing: border-box;

      strong {
        color: #fff;
      }
    }
  }

</style>
