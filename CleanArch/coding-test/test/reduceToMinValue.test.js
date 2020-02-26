const should = require('chai').should()
const minValue = require('../src/use_case/reduceToMinValue')
const hotels = require('../src/infra/hotels.json')

describe('Reduce to min value', () => {
  it('Should have property weekday', () => {
    hotels.map(hotel => hotel.should.have.property('weekday'))
  })

  it('Should have property weekend', () => {
    hotels.map(hotel => hotel.should.have.property('weekend'))
  })

  it('Should have property reward', () => {
    hotels.map(hotel => hotel.should.have.property('reward'))
  })

  it('Should have property reward and sub property weekday', () => {
    hotels.map(hotel => hotel.reward.should.have.property('weekday'))
  })

  it('Should have property reward and sub property weekend', () => {
    hotels.map(hotel => hotel.reward.should.have.property('weekend'))
  })

  it('Should returns min value', () => {
    const reduced = minValue.reduceToMinValue(hotels, 'reward', 'weekend')
    reduced.should.equal(40)
  })
})
