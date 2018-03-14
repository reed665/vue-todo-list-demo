<template>
  <ul>
    <li v-for="(todo, index) of todos" :key="index">
      {{ todo }}
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
