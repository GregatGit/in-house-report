<template>
  <div>
    <h3 data-toggle="tooltip" data-placement="left" title="click on report" class="text-center">Bug List <small class="text-danger">({{bugs.length}})</small></h3>
    <ul class="list-group anyScroll">
      <li
        class="list-group-item list-group-item-action btn"
        v-for="(bug, index) in bugs"
        :key="index"
        data-toggle="tooltip"
        data-placement="top"
        :title="bug.description"
        @click="handleClick(index)"
      >
        <p><u class="mr-2">{{bug.title.toUpperCase()}}</u></p>
        <template v-for="skill in bug.skills">🔹 {{skill}} </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import db from '../db'
export default {
  name: 'WhatsOn',
  props: ['bugs', 'readIndex'],
  methods: {
    handleClick: function(index){  
      if (this.readIndex !== null){
        if (this.readIndex === index){
          console.log('already done')
          return
        }
      } 
      this.$emit('closeReport')
      setTimeout(() => {
        this.$emit('readReport', index)
      }, 1)
    }
  },
  // computed: {
  //   ...mapState(['bugs']),
  // },
  // created() {
  //   this.$store.dispatch('loadReports')
  // },
  created() {
    // db.collection('bugs').onSnapshot(res => {
    //   const changes = res.docChanges()

    //   changes.forEach(change => {
    //     if (change.type === 'added'){
    //       this.bugs.push({
    //         id: change.doc.id,
    //         ...change.doc.data()
    //       })
    //     }
    //   })
    // })
  }
}
</script>

<style lang="scss" scoped>
$height: calc(100vh - 150px);
.anyScroll {
  height: $height;
  overflow-y: scroll;
}
small{
  font-size: .8rem;
}
</style>