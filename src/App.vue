<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }} !!!</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue'
    }
  }
}
</script>

<style lang="scss">
  @import "src/assets/styles/app.scss";
</style>
