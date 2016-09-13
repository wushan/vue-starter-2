<template>
  <div id="api">
  	<h1>Some API</h1>
  	<p>{{msg}}</p>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue'
export default {
  data () {
    return {
    	msg: 'www'
    }
  },
  route: {
    data (transition) {
      // let username = transition.to.params.username
      console.log('???');
      // ...
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
