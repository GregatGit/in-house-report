<template>
  <div>
    <h3>Members</h3>
    <template v-for="user in users">
      <p 
        v-if="user.name != 'Guest'"
        :key="user.name"
        data-toggle="tooltip"
        data-placement="top"
        :title="user.skills"
      >
        {{ user.name }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'OnlineUsers',
  props: ['users'],
  // created() {
  //   this.$store.dispatch('getUsers')
  // }
}
</script>

<style lang="scss" scoped></style>
