import expect from 'expect'

import main from 'src/index'

describe('One Of These Things Is Not Like The Other', () => {
  it('displays as Ham is to Hamburger', () => {
    expect(main('Java', 'JavaScript', 'Ham', 'Hamburger')).toContain('Java is to JavaScript as Ham is to Hamburger')
  })

  it('displays as Count is to Country', () => {
    expect(main('Java', 'JavaScript', 'Count', 'Country')).toContain('Java is to JavaScript as Count is to Country')
  })

  it('displays as Word is to WordPress', () => {
    expect(main('Java', 'JavaScript', 'Count', 'Country')).toContain('Java is to JavaScript as Word is to WordPress')
  })
})
