<template>
  <div>
    <h3>Bug List</h3>
    <ul class="list-group anyScroll">
      <li 
        class="list-group-item list-group-item-action btn"
        v-for="(bug, index) in bugs"
        :key="index"
        data-toggle="tooltip" data-placement="top" :title="bug.description"
        @click="seeSelectedReport(index)"
      >
        {{bug.title.toUpperCase()}}
        <template v-for="skill in bug.skills"> 🔹 {{skill}} </template>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'WhatsOn',
    props: ['seeSelectedReport'],
    computed: {
      ...mapState(['bugs'])
    },
    created() {
    this.$store.dispatch('loadReports')
  },
  }
</script>

<style lang="scss" scoped>
$height: calc(100vh - 150px);
.anyScroll {
  height: $height;
  overflow-y: scroll;
}
</style>