<template>
  <div>
    <h3>
      <u>{{report.title}}</u>
    </h3>

      <div class="list-group-item">
        <span>By: </span>
        <span> {{report.by}}</span>
      </div>
      <div class="list-group-item">
        <span>Date issued: </span>
        <span>{{report.time.date}} {{report.time.hours}}:{{report.time.minutes}}</span>
      </div>
      <div class="list-group-item">
        <span>Difficulty level: </span>
        <span> {{report.difficulty}}</span>
      </div>
      <div class="list-group-item">
        <span> {{report.description}}</span>
      </div>

    <button @click="$emit('closeReport')" class="btn btn-outline-success mt-3">CLOSE</button>
  </div>
</template>

<script>
export default {
  name: 'ReadReport',
  props: ['report'],
}
</script>

<style lang="scss" scoped>
</style>