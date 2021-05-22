<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo,index) in filterTodos" :key="index" class="todo">
          <td class="index">{{ index }}</td>
          <td class="item">{{ todo.item }}</td>
          <td>
            <button @click="changeState(todo)" class="changeState">{{ labels[todo.state] }}</button>
          </td>
          <td>
            <button @click="deleteItem(index)" class="deleteItem">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['todos', 'current'],
  data() {
    return {
      options: [
        {value: -1, label: 'すべて'},
        {value: 0, label: '作業中'},
        {value: 1, label: '完了'}
      ],
    }
  },
  methods: {
    changeState(item) {
      item.state = item.state ? 0 : 1
    },
    deleteItem(index) {
      this.todos.splice(index, 1)
    }
  },
  computed: {
    filterTodos() {
      return this.todos.filter(todo => {
        return this.current < 0 ? true : this.current === todo.state
      },this)
    },
    labels() {
    return this.options.reduce(function(accu, curr) {
      return Object.assign(accu, { [curr.value]: curr.label })
    }, {})
  }
  }
}
</script>