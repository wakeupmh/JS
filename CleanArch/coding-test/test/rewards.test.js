const should = require('chai').should()
const reward = require('../src/use_case/isReward')

describe('Rewards', () => {
	it('Should returns if a client is rewards', () => {
		const isReward = reward.isReward('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)')
		isReward.should.equal(true)
	})
})