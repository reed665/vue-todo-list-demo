import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todos: (state) => state.todos
  },
  mutations: {
    fetchTodos: (state, todos) => {
      state.todos = todos
    },
  },
  actions: {
    fetchTodos: ({ commit }) => {
      http.get('/todos')
      .then(({ data: todos }) => {
          commit('fetchTodos', todos)
        })
    },
    addTodo: ({ dispatch }, todo) => {
      http.post('/todos', todo)
        .then(() => {
          dispatch('fetchTodos')
        })
    },
    removeTodo: ({ dispatch }, todoId) => {
      http.delete(`/todos/${todoId}`)
        .then(() => {
          dispatch('fetchTodos')
        })
    }
  }
})
