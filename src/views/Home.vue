<template>
  <div>
    <Navigation />
    <h1>Welcome</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '../components/Navigation'
export default {
  name: 'home',
  components: {
    Navigation
  },
}
</script>
