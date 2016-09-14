<template>
  <div class="post">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <p>參數：{{ $route.params.id }}</p>
    <h2> 內部連結 </h2>
    <page-navigation></page-navigation>
    <transition name="slide">
      <!--
        giving the post container a unique key triggers transitions
        when the post id changes.
      -->
      <div v-if="post" class="content" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p>{{ post.id }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import Api from '../api'
import Navigation from './Navigation.vue'
export default {
  components: {
    'page-navigation': Navigation
  },
  data () {
    return {
      loading: false,
      post: null,
      error: null
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

      Api.getPost(this.$route.params.id, (err, post) => {
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

<style lang="scss">
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all .35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
.post {
  h2 {
    font-size: 1em;
  }
}

</style>
