'use strict'

const chai = require('chai')
const should = chai.should()
const rewards = require('../src/use_case/isRewards')

describe('Rewards', () => {
    it('Should returns if a client is rewards', () => {
        let isRewards = rewards.isRewards("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)");
        isRewards.should.equal(false)
    })
})