import { mount } from '@vue/test-utils'
import AkizukiBigSvg from '@/components/AkizukiBigSvg.vue'
import flushPromises from 'flush-promises'

describe('AkizukiBigSvg.vue', () => {
  it('on/off check', async () => {
    const wrapper = mount(AkizukiBigSvg, {
      propsData: { initCode: '' },
    })
    expect(wrapper.emitted().changed[0][0]).toEqual({'code':'00000000000000000000000000000000'})

    wrapper.findAll('button')[0].trigger('click')
    await flushPromises()
    expect(wrapper.emitted().changed[1][0]).toEqual({'code':'77767667677777767767777617777777'})

    wrapper.findAll('button')[1].trigger('click')
    await flushPromises()
    expect(wrapper.emitted().changed[2][0]).toEqual({'code':'00000000000000000000000000000000'})
  })
})
