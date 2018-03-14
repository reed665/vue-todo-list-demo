<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js Todo List App"/>
    <TodoForm @onNewTodo="addTodo" />
    <TodoList :todos="todos" @removeTodo="removeTodo" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TodoList,
    TodoForm,
  },
  created() {
    this.$store.dispatch('fetchTodos')
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch('addTodo', { name: todo })
    },
    removeTodo({ id }) {
      this.$store.dispatch('removeTodo', id)
    }
  }
}
</script>
