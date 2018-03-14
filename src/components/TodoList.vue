<template>
  <ul>
    <li v-for="todo of todos" :key="todo.id" @click="$emit('removeTodo', todo)">
      {{ todo.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['todos'],
}
</script>


<style scoped>
  ul {
    list-style: none;
    padding: 0;
    font-size: 28px;
  }
</style>
