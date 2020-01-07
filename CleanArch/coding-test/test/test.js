const reward = require('../use_case/isReward')
const day = require('../use_case/getDayOfWeek')
const assert = require('assert')
const should = require('chai').should()

describe('Find Cheaper Hotel test', () => {
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
})

