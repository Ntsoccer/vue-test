<template>
  <div id="app">
    <h2>ToDoリスト</h2>
    <TodoFilter @state="currentState"></TodoFilter>
    <br>
    <TodoDisplay :todos="todos" :current="current"></TodoDisplay>    
    <h3>新規タスクの追加</h3>
    <TodoInput @todo="todoContent"></TodoInput>
  </div>
</template>

<script>
import TodoDisplay from "./components/TodoDisplay"
import TodoFilter from "./components/TodoFilter"
import TodoInput from "./components/TodoInput"
export default {
  components: {
    TodoDisplay,
    TodoFilter,
    TodoInput
  },
  data() {
    return {
      todos: [],
      current: -1
    }
  },
  methods: {
    todoContent(e){
      this.todos.push(e)
    },
    currentState(e) {
      this.current = e
    },
  }
}
</script>

<style>

</style>