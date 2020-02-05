<template>
  <div class="container">
    <div class="card mt-5">
      <div class="center text-center">
        <h5>Hi</h5>
        <p class="mt- mx-3">Please ask your team leader to sign you up</p>
        <div class="text-center">
          <button @click="handleClick" type="button" class="btn " data-toggle="tooltip" data-placement="top" title="back to login">↩</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  methods: {
    handleClick: function() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>