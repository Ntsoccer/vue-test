<template>
  <div>
    <input type="text" v-model="newItem" class="text">
    <button @click.prevent="addItem" class="btn">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      todos: [],
    }
  },
  methods: {
    addItem() {
      if(!this.newItem) return
      const todo = {
        id: this.todos.length,
        item: this.newItem,
        state: 0
      }
      this.todos.push(todo)
      this.$emit('todo', todo)
      this.newItem = ''
    },
  }
}
</script>