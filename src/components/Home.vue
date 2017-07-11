<template>
  <div class="container">
    <main-menu></main-menu>
    <a name="slider"></a>
    <slider></slider>

    <a name="about-us"></a>
    <about-us></about-us>

    <a name="results"></a>
    <results></results>

    <a name="solutions"></a>
    <solutions></solutions>

    <a name="teaching"></a>
    <teaching></teaching>

    <a name="publishers"></a>
    <publishers></publishers>

    <a name="network"></a>
    <network></network>

    <a name="contact"></a>
    <contact></contact>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    position: relative;
    flex-direction: column;


    @media(max-width: 600px) {
      overflow: hidden;
      width: 100vw;
    }
  }

  .main-content {
    display: flex;
  }
</style>
