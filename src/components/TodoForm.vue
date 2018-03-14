<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return
      }
      this.$emit('onNewTodo', this.newTodo)
      this.reset()
    },
    reset() {
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>
  input, button {
    font-size: 27px;
  }
</style>
