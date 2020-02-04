<template>
  <div>
    <nav class="site-nave navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home">Welcome: {{user}}</router-link>
        <div class="navbar-nav ml-auto">
          <button class="btn nav-item nav-link">LOG BUG</button>
          <button @click="handleLogout" class="btn nav-item nav-link">LOGOUT</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Firebase from 'firebase'
  export default {
    name: 'navigation',
    props: ['user'],
    methods: {
      handleLogout: function() {
        Firebase.auth().signOut()
        .then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>