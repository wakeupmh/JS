const should = require('chai').should()
const reward = require('../src/use_case/isReward')
const minValue = require('../src/use_case/reduceToMinValue')
const day = require('../src/use_case/getDayOfWeek')
const hotels = require('../src/infra/hotels.json')
const weekend = require('../src/use_case/isWeekend')

describe('Hotel test', () => {
  describe('Rewards', () => {
    it('Should return if a client is rewards', () => {
      const isReward = reward.isReward('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)')
      isReward.should.equal(true)
    })
  })

  describe('Extract day of week', () => {
    it('Should return a day inside a parentheses', () => {
      const dayOfWeek = day.getDayOfWeek('27Mar2009(fri)')
      dayOfWeek.should.equal('fri')
    })
  })

  describe('Weekend', () => {
    it('Should return if a day inside a parentheses is weekend', () => {
      const isWeekend = weekend.isWeekend('28Mar2009(sat)')
      isWeekend.should.equal(true)
    })
  })

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

    it('Should return min value', () => {
      const reduced = minValue.reduceToMinValue(hotels, 'reward', 'weekend')
      reduced.should.equal(40)
    })
  })
})
