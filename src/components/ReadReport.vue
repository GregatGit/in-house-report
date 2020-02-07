<template>
  <div>
    <h3 class="text-center">
      <u>{{report.title}}</u>
    </h3>

    <div class="list-group-item">
      <span><b>By: </b></span>
      <span> {{report.by}}</span>
    </div>
    <div class="list-group-item">
      <span><b>Date issued:  </b> </span>
      <span>{{report.time.date}} {{report.time.hours}}:{{report.time.minutes}}</span>
    </div>
    <div class="list-group-item">
      <span><b>Difficulty level:  </b></span>
      <span>{{report.difficulty}}</span>
    </div>
    <div class="list-group-item">
      <span>{{report.description}}</span>
    </div>
    <div class="list-group-item pb-5" >
      <span class="float-left"><button class="btn btn-warning" @click="showDeleteButton">{{message}}</button></span><span v-if="showDelete" class="float-right"><button class="btn btn-danger" @click="$emit('deleteDoc', report.id)" data-toggle="tooltip" data-placement="left" title="warning: this deletes from the DB">Danger!</button></span>
    </div>
    <button @click="$emit('closeReport')" class="btn btn-outline-success mt-3">CLOSE</button>   
  </div>
</template>

<script>
import db from '../db'
export default {
  name: 'ReadReport',
  props: ['report'],
  data: function() {
    return {
      showDelete: false,
      message: 'Delete'
    }
  },
  methods: {
    showDeleteButton: function(){
      this.showDelete = !this.showDelete
      if (this.showDelete){
        this.message = 'Cancel Del'
      } else {
        this.message = 'Delete'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>