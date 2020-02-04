<template>
  <div>
    <Navigation />
    <h1>Welcome <font-awesome-icon icon="star"></font-awesome-icon></h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '../components/Navigation'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import db from '../db'

export default {
  name: 'home',
  data: function() {
    return {
      user: null,
      users: [],
    }
  },
  mounted() {
    // db.collection('users')
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       console.log(`${doc.id} => ${doc.data().name}`)
    //     })
    //   })
  },
  components: {
    Navigation,
    FontAwesomeIcon,
  },
}
</script>
