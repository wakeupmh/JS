
const should = require('chai').should()
const weekend = require('../src/use_case/isWeekend')

describe('Weekend', () => {
  it('Should returns if a day inside a parentheses is weekend', () => {
    const isWeekend = weekend.isWeekend('28Mar2009(sat)')
    isWeekend.should.equal(true)
  })
})