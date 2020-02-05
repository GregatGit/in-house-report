<template>
  <div>
    <Navigation :user="user" @open="openBugForm" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <OnlineUsers :users="users" />
        </div>
        <div class="col-7">
          <BugForm 
            :user="user" 
            v-if="showBugForm" 
            @close="closeBugForm"  
          />
        </div>
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
import BugForm from '../components/BugForm'

import { findUserName } from '../helpers'

export default {
  name: 'home',
  data: function() {
    return {
      user: null,
      users: [],
      userEmail: null,
      showReadReport: false,
      showBugForm: false
    }
  },
  methods: {
    closeBugForm: function(){
      this.showBugForm = false
    },
    openBugForm: function() {
      this.showBugForm = true
      this.showReadReport = false
      console.log('hi')
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user){
        this.userEmail = user.email
      } else {
        this.$router.push('/login')
      }
    })
    db.collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.users.push(doc.data())
        })
        this.user = findUserName(this.userEmail,this.users)
      })
  },
  components: {
    Navigation,
    FontAwesomeIcon,
    OnlineUsers,
    WhatsOn,
    BugForm
  },
}
</script>
