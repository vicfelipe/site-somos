<template>
  <div class="contact__container">
    <h1 class="title">Entre em <span>contato</span></h1>
    <div class="content">
      <p>
        Preencha o formulário a seguir e agende uma visita com um de nossos consultores, ou se preferir, ligue agora para:<br>
        <span>(11) 4383-8910</span>
      </p>
    </div>
    <form id="contato" v-on:submit.prevent="onSubmit">
      <div class="form-container">
        <div class="form-container__left">
            <input placeholder="Nome" id="nome" name="nome"  type="text" v-model="nome">
            <input placeholder="DDD + Telefone" id="telefone" name="telefone" type="text" v-model="telefone">
            <input placeholder="Email" id="email" name="email" type="text" v-model="email">
            <input placeholder="Cargo" id="cargo" name="cargo" type="text" v-model="cargo">
            <input placeholder="Estado" id="estado" name="estado" type="text" v-model="estado">
            <input placeholder="Municipio" id="municipio" name="municipio" type="text" v-model="municipio">
        </div>

        <div class="form-container__right">
          <textarea v-model="mensagemuser" placeholder="Mensagem" id="mensagem" name="mensagem" type="text" style="resize: none;"></textarea>
          <button id="enviar" type="submit" name="enviar">Enviar</button>
        </div>
      </div>
    </form>

    
    <div class="footer">
      <strong>SOMOS Educação</strong> | 2017 - Todos os direitos reservados.<br>
      <a href="https://www.oficinademarketing.com.br" target="_blank">Desenvolvido por Oficina de Marketing</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        nome: null,
        telefone: null,
        email: null,
        cargo: null,
        estado: null,
        municipio: null,
        mensagemuser: null,
        mensagem: 'Mensagem do usuário:/n' + this.mensagemuser + 'Dados do usuário/nNome: ' + this.nome + '/nTelefone: ' + this.telefone + '/nE-mail: ' + this.email + '/nCargo: ' + this.cargo + '/nEstado: ' + this.estado + '/nMunicípio: ' + this.municipio + '/n'
      }
    },
    methods: {
      // onSubmit: function () {
      //   var emailjs = require('@/assets/js/emailjs')
      //   emailjs.send('somos_educacao', 'somos_educacao', {
      //     nome: this.nome,
      //     telefone: this.telefone,
      //     email: this.email,
      //     cargo: this.cargo,
      //     estado: this.estado,
      //     municipio: this.municipio,
      //     mensagem: this.mensagem
      //   })
      //   .then(function (response) {
      //     console.log('SUCCESS. status=%d, text=%s', response.status, response.text)
      //   }, function (err) {
      //     console.log('FAILED. error=', err)
      //   })
      // }
    }
      // enviarFormulario: function () {
      //   var url = "https://api.mailgun.net/v3/oficinademarketing.com.br/messages"
      //   var method = "POST"
      //   var data = {
      //     from: this.email,
      //     to: 'victor@oficinademarketing.com.br',
      //     subject: '[SITE SOMOS Rede Pública] Novo contato de '+this.nome,
      //     text: this.mensagem
      //   }

      //   var async = true;
      //   var request = new XMLHttpRequest();
      //   request.onload = function () {
      //     var status = request.status // HTTP response status, e.g., 200 for "200 OK"
      //     var data = request.responseText // Returned data, e.g., an HTML document.
      //   }
      //   request.open(method, url, async)
      //   request.setRequestHeader("Content-Type", "multipart/form-data;charset=UTF-8")
      //   request.send(data)

      //   // return emailjs.send('somos_educacao', 'somos_educacao', {
      //   //   nome: this.nome,
      //   //   telefone: this.telefone,
      //   //   email: this.email,
      //   //   cargo: this.cargo,
      //   //   estado: this.estado,
      //   //   municipio: this.municipio,
      //   //   mensagem: this.mensagem
      //   // })
      //   // .then(function (response) {
      //   //   console.log('SUCCESS. status=%d, text=%s', response.status, response.text)
      //   // }, function (err) {
      //   //   console.log('FAILED. error=', err)
      //   // })
      // }
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
        font-size: 30px;
        font-weight: bold;
      }

      padding-bottom: 30px;
    }

    .form-container {
      padding: 0 30px 70px;
      width: 700px;
      margin: 0 auto;
      display: flex;

      @media(max-width: 600px){
        flex-direction: column;
        width: 100%;
      }

      &__right,
      &__left {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        @media(max-width: 600px){
          width: 100%;
          box-sizing: border-box;
        }
      }

      &__left {
        margin-right: 30px;
      }

      .input-field {
        box-sizing: border-box;
      }

      input, textarea, button {
        border: none;
        padding: 10px;
        margin: 5px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        font-family: sans-serif;
        border-radius: 5px;
      }

      button {
        color: #fff;
        background-color: rgba(204,21,74,1);
        cursor: pointer;
        &:hover{
          background-color: #ff5c8b;
        }
        &:focus{
          background-color: #ff5c8b;
        }
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
      
      a {
        color: #EC3680;
        text-decoration: none;
      }

      strong {
        color: #fff;
      }
    }
  }

</style>
