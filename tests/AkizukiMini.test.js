import { mount } from '@vue/test-utils'
import AkizukiMiniSvg from '@/components/AkizukiMiniSvg.vue'
import flushPromises from 'flush-promises'

describe('AkizukiMiniSvg.vue', () => {
  it('on/off check', async () => {
    const wrapper = mount(AkizukiMiniSvg, {
      propsData: { initCode: '' },
    })
    expect(wrapper.emitted().changed[0][0]).toEqual({'code':'8400000000370000000000000000000000000000000000000000000000000000242E'})

    wrapper.findAll('button')[0].trigger('click')
    await flushPromises()
    expect(wrapper.emitted().changed[1][0]).toEqual({'code':'840000000037000000F0E52EFAE12BBFF88FFFB8CB2FFEE33FEEF28BFFF88FBB9540'})

    wrapper.findAll('button')[1].trigger('click')
    await flushPromises()
    expect(wrapper.emitted().changed[2][0]).toEqual({'code':'8400000000370000000000000000000000000000000000000000000000000000242E'})
  })

  it('plid check', async () => {
    const pre = mount(AkizukiMiniSvg, {
      propsData: { initCode: '84-10fgFGA' },
    })
    expect(pre.emitted().changed[0][0]).toEqual({'code':'84010F0F0A370000000000000000000000000000000000000000000000000000B1DC'})

    const wrapper = mount(AkizukiMiniSvg, {
      propsData: { initCode: '8412345678' },
    })
    expect(wrapper.emitted().changed[0][0]).toEqual({'code':'8412345678370000000000000000000000000000000000000000000000000000AEB8'})

    await wrapper.find('input#barcode').setValue('F4598510087012044')
    await flushPromises()
    expect(wrapper.emitted().changed[1][0]).toEqual({'code':'846603CBE9370000000000000000000000000000000000000000000000000000C9F3'})
  })
})
