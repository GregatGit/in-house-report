import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    localUser: null,
    status: 'logged off',
    bugs: []
  },
  mutations: {
    GET_USERS(state, payload) {
      state.users = payload
    },
    LOGIN(state, payload) {
      state.localUser = payload
    },
    LOGIN2(state, payload) {
      state.status = payload
    },
    CREATE_REPORT(state, payload){
      state.bugs = payload
    },
    LOAD_REPORTS(state, payload){
      state.bugs = payload
    }
  },
  actions: {
    loadReports({ commit }, payload){
      axios({
        method: 'get',
        url: './bugs.json'
      })
      .then(res => commit('LOAD_REPORTS', res.data))
      .catch(error => console.log(error))
    },
    createReport({ commit }, payload){
      const newBugs = [...this.state.bugs, payload]
      commit('CREATE_REPORT', newBugs)
    },
    login2({ commit }, payload) {
      axios({
        method: 'get',
        url: './localUser.json',
      })
        .then(res => {
          let newStatus = 'logged off'
          if (
            res.data.name === payload.name &&
            res.data.password === payload.password
          ) {
            newStatus = 'logged on'
            const updated = res.data
            delete updated.password
            commit('LOGIN', updated)
          }
          commit('LOGIN2', newStatus)
        })
        .catch(error => console.log(error))
    },
    login({ commit }) {
      axios({
        method: 'get',
        url: './localUser.json',
      })
        .then(res => commit('LOGIN', res.data))
        .catch(error => console.log(error))
    },
    getUsers({ commit }) {
      axios({
        method: 'get',
        url: './users.json',
      })
        .then(res => commit('GET_USERS', res.data))
        .catch(error => console.log(error))
    },
  },
  modules: {
  }
})
