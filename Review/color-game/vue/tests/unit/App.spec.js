import App from '@/App'
import { shallowMount } from '@vue/test-utils'

describe('App.test.js',() => {
  let component
  
  beforeEach(() => {
    component = shallowMount(App)
    component.setData({ colors: []});
  })

  // it('should equals to []', () => {
  //   expect(component.vm.color).toEqual(['Dog', 'Cat', 'Fish'])
  // })

  it('has the expected html structure', () => {
    expect(component.element).toMatchSnapshot()
  })
})