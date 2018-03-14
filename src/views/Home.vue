<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js Todo List App"/>
    <TodoForm @onNewTodo="addTodo" />
    <TodoList :todos="todos" />
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
  data() {
    return {
      todos: ['todo1', 'todo2']
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    }
  }
}
</script>
