<template>
  <div>
    <Navigation :user="user" />
    <h1>Welcome <font-awesome-icon icon="star"></font-awesome-icon></h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Firebase from 'firebase'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import db from '../db'
import Navigation from '../components/Navigation'

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
  },
}
</script>
