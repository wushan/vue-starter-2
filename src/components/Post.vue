<template>
	<div id="post">
		<h1>{{ msg }} !!!</h1>
		<p>{{ $route.params.id }}</p>
	</div>
</template>

<script>
import { getPost } from '../api'
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null,
      msg: 'xxxx'
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      getPost(this.$parent.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
