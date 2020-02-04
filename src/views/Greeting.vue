<template>
  <div class="welcome">
    <button class="btn btn-primary btn-lg" @click="handleClick">
      <h1>HELLO</h1>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'greeting',
    methods: {
      handleClick: function() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
.welcome {
    background: linear-gradient(to right, rgb(5, 95, 212), #33AEFF);
    width: 100%;
    color: #333333;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    display: flex;
    float: none;
}
</style>