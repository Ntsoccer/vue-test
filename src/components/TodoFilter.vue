<template>
  <div>
    <label v-for="(option, index) in options" :key="index">
      <input type="radio" @click="releaseCurrent(option)" v-model="current" :value="option.value">{{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {value: -1, label: 'すべて'},
        {value: 0, label: '作業中'},
        {value: 1, label: '完了'}
      ],
      current: -1
    }
  },
  methods: {
    releaseCurrent(item) {
      this.$emit('state', item.value)
    }
  },
}
</script>

<style>

</style>