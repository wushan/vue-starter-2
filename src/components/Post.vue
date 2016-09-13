<template>
	<div id="post">
		<h1>{{ msg }} !!!</h1>
		<p>參數：{{params}}</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hola !',
      params: 'xx'
    }
  },
  route: {
  	activate: function(){
  		console.log('rendered');
  	}
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
