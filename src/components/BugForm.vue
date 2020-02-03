<template>
  <div>
    <div class="form-group row">
      <label for="inputTitle" class="col-sm-2 col-form-label">title </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputTitle" placeholder="title" v-model="title" />
      </div>
    </div>(tick applickable)
    <div class="form-group" v-for="skill in skills" :key="skill">
      <div class="form-group row">
        <div class="col-sm-2">{{skill}}</div>
        <div class="col-sm-10">
          <div class="form-check radio-inline">
            <input
              class="form-check-input"
              v-model="checkedSkills"
              type="checkbox"
              :id="skill"
              :value="skill"
            />
            <label class="form-check-label" :for="skill"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <legend class="col-form-label col-sm-2 pt-0">Difficulty</legend>
        <div class="col-sm-10">
          <div v-for="num in levels" :key="num" class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              :id="num"
              :value="num"
              v-model="difficulty"
            />
            <label class="form-check-label">{{num}}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea
        placeholder="What's the issue?"
        class="form-control"
        v-model="description"
        id="description"
        rows="3"
      ></textarea>
    </div>
    <button @click="handleSubmit" class="btn btn-primary mb-5 mr-2">Submit</button> <button @click="closeBugReport" class="btn btn-outline-warning mb-5 ml-2">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'BugForm',
  props: ['localUser', 'closeBugReport'],
  methods: {
    handleSubmit: function() {
      let newTitle = this.title.trim()
      let newDescription = this.description.trim()
      if (newTitle === '' || newDescription === '') {
        console.log('no data')
        return
      }
      const currentTime = new Date()
      
      const report = {
        by: this.localUser,
        title: newTitle,
        description: newDescription,
        skills: [...this.checkedSkills],
        difficulty: this.difficulty,
        time: {
          hours: currentTime.getHours(),
          minutes: currentTime.getMinutes(),
          date: currentTime.toDateString()

        },
        fixed: false,
        emergency: false
      }
      this.$store.dispatch('createReport', report)
      this.title = ''
      this.description = ''
      this.difficulty = 1,
      this.checkedSkills.length = 0,
      this.closeBugReport()
    },
  },
  data() {
    return {
      skills: [
        'JS',
        'CSS',
        'DB',
        'Vue',
        'Responsive',
        'Design',
        'SOE',
        'BackEnd',
      ],
      levels: [1, 2, 3, 4, 5],
      checkedSkills: [],
      difficulty: 1,
      description: '',
      title: '',
      error: null
    }
  },
}
</script>

<style lang="scss" scoped>
</style>