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
      messages: [],
    }
  }
}
</script>

<style lang="scss" scoped>
</style>