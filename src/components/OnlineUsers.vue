<template>
  <div>
    <h3>Online</h3>
    <template v-for="user in users">
      <p v-if="user.online" :key="user.name">
        {{ user.name }}
      </p>
    </template>
    <h4>Offline</h4>
    <template v-for="user in users">
      <p v-if="!user.online" :key="user.name">
        {{ user.name }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'OnlineUsers',
  props: ['users'],
  created() {
    this.$store.dispatch('getUsers')
  }
}
</script>

<style lang="scss" scoped></style>
