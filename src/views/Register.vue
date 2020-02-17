<template>
  <div class="container">
    <div class="card mt-5">
      <div class="center text-center">
        <h5>Hi</h5>
        <p class="mt- mx-3">Welcome to In House Reports</p>
        <p class="mt- mx-3">It is an app for developers to message each other with any problems.</p>
        <p class="mt- mx-3">All reports, updates, comments and deletions are sent to the firestore database and users online will see the new changes in real time.</p>
        <p class="mt- mx-3">It is built with Vue.js, Bootstrap 4, Firebase Firestore. I made it to get a better understanding of creating and using a CRUD database in an app, implement Vue.js and to demonstrate to potential employers.</p>
        <p class="mt- mx-3">You can go back and login as a guest, but you will only have read permissions. You can email me at <a href="mailto:gregdd@outlook.com? subject=in-house-report"> gregdd@outlook.com</a> and I can send you login credentials that allow create, update and delete. You can take a look at the code <a href="https://github.com/GregatGit/in-house-report" target="_blank">here</a>.  </p>
        <p class="mt- mx-3">Greg</p>
        <div class="text-center">
          <button @click="handleClick" type="button" class="btn btn-lg" data-toggle="tooltip" data-placement="top" title="back to login">↩</button>
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