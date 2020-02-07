<template>
  <div>
    <nav class="navbar navbar-default navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home">Welcome: {{user}}</router-link>
        <div class="navbar-nav ml-auto">
          <button class="btn nav-item nav-link" @click="$emit('open')">CREATE REPORT</button>
          <button class="btn nav-item nav-link disabled" disabled>|</button>
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
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push('/login')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 60px;
}
</style>