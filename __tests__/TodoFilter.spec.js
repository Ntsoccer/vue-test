// import { shallowMount } from '@vue/test-utils';
// import TodoFilter from '@/components/TodoFilter';

// describe('TodoFilter.vue', () => {
//   it.only('TodoDisplayにpropsの値', () => {
//     const wrapper = shallowMount(TodoFilter, {
//       data() {
//         return {
//           current: -1
//         }
//       }
//     })
//     console.log(wrapper.html())
//   })
// })

import { shallowMount } from '@vue/test-utils';
import TodoFilter from '@/components/TodoFilter';
import { expect } from '@jest/globals';

describe('ReleaseCurrentChecked', () => {
  let wrapper = shallowMount(TodoFilter)
  it('releaseCurrentのテスト', () => {
    const emit = wrapper.emitted()
    console.log(emit)
    const radioInput = wrapper.find('input[type="radio"]')
    radioInput.element.value = '-1'
    wrapper.find('input').trigger('click')
    console.log(emit)
    // stateがemitされることのテスト
    expect(emit['state']).toBeTruthy()
    //１個のイベントがemitされたことのテスト
    expect(emit['state'].length).toBe(1)
    expect(emit['state'][0][0]).toBe(-1)
  })
})