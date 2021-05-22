// import { shallowMount, mount } from '@vue/test-utils';
// import TodoInput from '@/components/TodoInput';
// import { expect, jest } from '@jest/globals';
// import { config } from '@vue/test-utils'

// config.showDeprecationWarnings = false

// describe("AddItemChecked", () => {
//   it('addItemのテスト', () => {
//     const wrapper = mount(TodoInput)
//     wrapper.find('.btn').trigger('click')
//     wrapper.vm.addItem()
//     const todo = {
//       id: 1,
//       item: 'text',
//       state: 0
//     }
//     wrapper.vm.$data.todos.push(todo)
//   })
// })

import { shallowMount } from '@vue/test-utils';
import TodoInput from '@/components/TodoInput';
import { expect } from '@jest/globals';
describe('AddItemChecked', () => {
  let wrapper = shallowMount(TodoInput)
  it('addItemのテスト', () => {
    const emit = wrapper.emitted()    
    console.log(emit)   
    wrapper.find('input').setValue('todo')
    wrapper.find('button').trigger('click')
    console.log(emit)       
    //todoがemitされることのテスト
    expect(emit['todo']).toBeTruthy()
　　//１個のイベントがemitされたことのテスト
　　expect(emit['todo'].length).toBe(1)
　　//emitされたオブジェクトのitemキーのプロパティはtodoであることのテスト
    expect(emit['todo'][0][0].item).toBe('todo')
  })
})