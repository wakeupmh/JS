'use strict'

const chai = require('chai')
const should = chai.should()
const dayOfWeek = require('../src/use_case/getDayOfWeek')

describe('Day of week', function () {
  it('should returns a day into parentheses', function () {
    let day = dayOfWeek.getDayOfWeek("17Mar2009(tues)")
    day.should.equal('tues');
  })
})