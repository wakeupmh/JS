const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async ()=>{
        await truncate();
    });

    it('should encrypt user password', async () => {
        const user = await User.create({ name: 'Marcos', email: 'devopmh@gmail.com', password_hash: '1234'});
        const compareHash = await bcrypt.compare('1234', user.password_hash);

        expect(compareHash).toBe(true);
    })
})