<template>
  <div>
    <Navigation :user="user" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <OnlineUsers :users="users" />
        </div>
        <div class="col-7"></div>
        <div class="col-3">
          <WhatsOn />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Firebase from 'firebase'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import db from '../db'
import Navigation from  '../components/Navigation'
import OnlineUsers from '../components/OnlineUsers'
import WhatsOn from '../components/WhatsOn'

export default {
  name: 'home',
  data: function() {
    return {
      user: null,
      users: [],
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.user = user.email
      } else {
        this.$router.push('/login')
      }
    })
    db.collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //console.log(`${doc.id} => ${doc.data().name}`)
          this.users.push(doc.data())
        })
      })
  },
  components: {
    Navigation,
    FontAwesomeIcon,
    OnlineUsers,
    WhatsOn
  },
}
</script>
