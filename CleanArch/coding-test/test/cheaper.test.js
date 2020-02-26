const should = require('chai').should()
const cheaperHotel = require('../src/use_case/cheaperHotel')

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