<template>
  <div :key="report.id">
    <h3 class="text-center">
      <u>{{report.title}}</u>
    </h3>

    <div class="list-group-item">
      <span>
        <b>By:</b>
      </span>
      <span>{{report.by}}</span>
    </div>
    <div class="list-group-item">
      <span>
        <b>Date issued:</b>
      </span>
      <span>{{report.time.date}} {{report.time.hours}}:{{report.time.minutes}}</span>
    </div>
    <div class="list-group-item">
      <span>
        <b>Difficulty level:</b>
      </span>
      <span>{{report.difficulty}}</span>
    </div>
    <div class="list-group-item">
      <span>{{report.description}}</span>
    </div>
    <div class="list-group-item pb-5">
      <span class="float-left">
        <button class="btn btn-warning" @click="showDeleteButton">{{message}}</button>
      </span>
      <span v-if="showDelete" class="float-right">
        <button
          class="btn btn-danger"
          @click="$emit('deleteDoc', report.id)"
          data-toggle="tooltip"
          data-placement="left"
          title="warning: this deletes from the DB"
        >Danger!</button>
      </span>
    </div>
    <div class="list-group-item">
      <span>
        <b>Comments:</b>
      </span>
    </div>
    <template v-if="comments.length > 0">
      <div v-for="comment in comments" class="list-group-item">
        <span class="float-left">{{comment.by}}</span>
        <span>{{comment.comment}}</span>
      </div>
    </template>
    <div class="list-group-item">
      <span>
        <input v-model="newComment" type="textarea" maxlength="250" />
      </span>
      <span class="float-right">
        <button v-if="!sending" class="btn btn-primary">
          <font-awesome-icon icon="plus" name="plus" @click="addComment" />
        </button>
        <button v-if="sending" class="btn btn-primary">
          <font-awesome-icon class="fa-spin" icon="hourglass-end" name="plus" />
        </button>
      </span>
    </div>
    <button @click="$emit('closeReport')" class="btn btn-outline-success mt-3">CLOSE</button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Firebase from 'firebase'
import db from '../db'
export default {
  name: 'ReadReport',
  props: ['report', 'user'],
  data: function() {
    return {
      showDelete: false,
      message: 'Delete',
      comments: [],
      newComment: '',
      sending: false,
    }
  },
  methods: {
    addComment: function() {
      if (this.newComment === '') {
        console.log('no comment to add')
        return
      }
      console.log('here')

      const commentDB = {
        by: this.user,
        comment: this.newComment,
        stars: 0,
        time: Firebase.firestore.FieldValue.serverTimestamp(),
      }
      this.sending = true
      db.collection('bugs')
        .doc(this.report.id)
        .collection('comments')
        .add(commentDB)
        .then(() => {
          console.log('Document successfully written!')
          this.newComment = ''
          this.sending = false
        })
        .catch(error => {
          console.error('Error writing document: ', error)
          this.sending = false
        })
    },
    showDeleteButton: function() {
      this.showDelete = !this.showDelete
      if (this.showDelete) {
        this.message = 'Cancel Del'
      } else {
        this.message = 'Delete'
      }
    },
  },
  mounted() {
    db.collection('bugs')
      .doc(this.report.id)
      .collection('comments')
      .onSnapshot(res => {
        const newComments = []
        res.forEach(doc => {
          newComments.push({id: doc.id, ...doc.data()})
        })
        this.comments = newComments
      })
  },
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style lang="scss" scoped>
</style>