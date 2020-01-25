import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import TagItem from '~/components/TagItem'

const localVue = createLocalVue()

const factory = (props = {}) => {
  return mount(TagItem, {
    localVue,
    propsData: props,
    stubs: {
      NLink: RouterLinkStub
    }
  })
}

describe('components: TagItem', () => {
  test('items', () => {
    const items = [
      {
        sys: { id: '1' },
        fields: { name: 'Foo1', slug: 'foo-1' }
      },
      {
        sys: { id: '2' },
        fields: { name: 'Bar1', slug: 'bar-1' }
      },
      {
        sys: { id: '3' },
        fields: { name: 'Baz1', slug: 'baz-1' }
      }
    ]

    const wrapper = factory({ items })
    const a = wrapper.findAll('a')

    expect(a.at(0).text()).toBe('Foo1')
    expect(a.at(1).text()).toBe('Bar1')
    expect(a.at(2).text()).toBe('Baz1')

    expect(a.at(0).find(RouterLinkStub).props().to).toEqual({ name: 'posts-tags-slug', params: { slug: 'foo-1' } })
    expect(a.at(1).find(RouterLinkStub).props().to).toEqual({ name: 'posts-tags-slug', params: { slug: 'bar-1' } })
    expect(a.at(2).find(RouterLinkStub).props().to).toEqual({ name: 'posts-tags-slug', params: { slug: 'baz-1' } })
  })
})
