<template>
  <div class="container">
    <main-menu></main-menu>
    <slider></slider>
    <about-us></about-us>
    <results></results>
    <solutions></solutions>
    <teaching></teaching>
    <publishers></publishers>
    <network></network>
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
  }

  .main-content {
    display: flex;
  }
</style>
