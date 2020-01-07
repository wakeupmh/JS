const should = require('chai').should()
const reward = require('../src/use_case/isReward')
const minValue = require('../src/use_case/reduceToMinValue')
const day = require('../src/use_case/getDayOfWeek')
const weekend = require('../src/use_case/isWeekend')
const cheaperHotel = require('../src/use_case/cheaperHotel')
const hotels = require('../src/infra/hotels.json')

describe('Hotel test', () => {
  describe('Rewards', () => {
    it('Should returns if a client is rewards', () => {
      const isReward = reward.isReward('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)')
      isReward.should.equal(true)
    })
  })

  describe('Extract day of week', () => {
    it('Should returns a day inside a parentheses', () => {
      const dayOfWeek = day.getDayOfWeek('27Mar2009(fri)')
      dayOfWeek.should.equal('fri')
    })
  })

  describe('Weekend', () => {
    it('Should returns if a day inside a parentheses is weekend', () => {
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

    it('Should returns min value', () => {
      const reduced = minValue.reduceToMinValue(hotels, 'reward', 'weekend')
      reduced.should.equal(40)
    })
  })

  describe('Cheaper Hotel', () => {
    it("Should returns hotel's name for a rewards' client with weekend into input", () => {
      const cheaperHotelName = cheaperHotel.findCheaper('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)')
      cheaperHotelName.should.equal('Ridgewood')
    })

    it("Should returns hotel's name for a regular's client with weekend into input", () => {
      const cheaperHotelName = cheaperHotel.findCheaper('Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)')
      cheaperHotelName.should.equal('Bridgewood')
    })

    it("Should returns hotel's name for a regular's client without weekend into input", () => {
      const cheaperHotelName = cheaperHotel.findCheaper('Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)')
      cheaperHotelName.should.equal('Lakewood')
    })
  })
})
