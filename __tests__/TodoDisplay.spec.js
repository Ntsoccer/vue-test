import { shallowMount } from '@vue/test-utils';
import TodoDisplay from '@/components/TodoDisplay';
import { expect, it } from '@jest/globals';

describe('TodoDisplay.vue', () => {
  let todos = [{
    id: 1, item: "text", state: 0
  }]
  let wrapper = shallowMount(TodoDisplay, {
    propsData: {
      todos: todos,
      current: -1
    }
  })
  it('changeStateメソッドのテスト', async () => {
    wrapper.find('.changeState').trigger('click')
    await wrapper.setProps({
      todos: [{
        id: 1,
        item: "text",
        state: 1
      }]
    })
    expect(wrapper.find('.changeState').text()).toBe("完了")
  })
  it('deleteItemメソッドのテスト', async () => {

    expect(wrapper.find('.todo').element.children.length).toBe(4)
    wrapper.find('.deleteItem').trigger('click')
    await wrapper.setProps({
      todo: null
    })
    expect(wrapper.find('.todo').exists()).toBe(false)
  })
})