<template>
  <nav id="navbar">
    <ul>
      <li>
        <router-link to="/" activeClass="active">HOME</router-link>
      </li>
      <li>
        <router-link to="/post/1" activeClass="active">POST 1</router-link>
      </li>
      <li>
        <router-link to="/post/2" activeClass="active">POST 2</router-link>
      </li>
      <li>
        <router-link to="/api" activeClass="active">API</router-link>
      </li>
      <li>
        <router-link to="/with-params/1" activeClass="active">/with-params/1</router-link>
      </li>
      <li>
        <router-link to="/with-params/2" activeClass="active">/with-params/2</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
</script>

<style lang="scss">
</style>