<template>
  <div>
    <form class="mt-3" @submit.prevent="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Log in</h3>
                <section class="form-group">
                  <div v-if="error" class="col-12 alert alert-danger px-3">{{error}}</div>
                  <label class="form-control-label sr-only" for="Email">Email</label>
                  <input
 
                    class="form-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                    v-model="email"
                  />
                </section>
                <section class="form-group">
                  <input

                    class="form-control"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </section>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary float-left" type="submit">Log in</button>
                  <button 
                    class="btn btn-primary float-right"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="read permissions only"
                    @click="guestLogin"
                  >Log in as Guest</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      <router-link to="/register">register | about</router-link>
    </p>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    guestLogin: function(){
      this.email = 'guest@test.com',
      this.password = 'guest123'
      this.login()
    },
    login: function() {
      const info = {
        email: this.email,
        password: this.password,
      }
      Firebase.auth().signInWithEmailAndPassword(info.email, info.password).then(
        () => {
          this.$router.push('/home')
        },
        error => {
          this.error = error.message
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
</style>