<template>
  <div>
    <nav class="site-nave navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home">Home</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/login">LOGOUT</router-link>
          <router-link class="nav-item nav-link" to=""></router-link>
          <router-link class="nav-item nav-link" to=""></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style lang="scss" scoped>

</style>