const chai = require('chai')
const expect = require('chai').expect
const should = chai.should()
const minValue = require('../src/use_case/reduceToMinValue') 

describe('Reduce to min value', () => {
    it('Should returns the min value of hotels', () => {
        let schedule = [true, true, true]
        let isRewardClient = true
        let result = minValue.reduceToMinValue(schedule, isRewardClient)
        expect(result).to.eql({
            name: "Lakewood",
            price: 240
        })
    })
})