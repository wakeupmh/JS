
const should = require('chai').should()
const day = require('../src/use_case/getDayOfWeek')

describe('Extract day of week', () => {
	it('Should returns a day inside a parentheses', () => {
		const dayOfWeek = day.getDayOfWeek('27Mar2009(fri)')
		dayOfWeek.should.equal('fri')
	})
})
