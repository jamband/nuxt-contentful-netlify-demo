import { mount, createLocalVue } from '@vue/test-utils'
import CreatedDate from '~/components/CreatedDate'

const localVue = createLocalVue()

const factory = (props = {}) => {
  return mount(CreatedDate, {
    localVue,
    propsData: props
  })
}

describe('components: CreatedDate', () => {
  test('date: 2020.01.01', () => {
    const wrapper = factory({ date: '2020.01.01' })
    expect('2020.01.01').toBe(wrapper.text())
  })
})
