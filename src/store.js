import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: ['todo1', 'todo2']
  },
  getters: {
    todos: (state) => state.todos
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todos.unshift(todo)
    }
  },
})
