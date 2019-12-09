const request = require('supertest');
const app = require('../../src/app')
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  })
    
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Marcos',
      email: 'devopmh@gmail.com',
      password_hash: '123'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456'
      })
    expect(response).toBe(200)
  });

  it('should not authenticate with invalid credentials', async () => {
    beforeEach(async () => {
      await truncate();
    })
      
    it('should authenticate with valid credentials', async () => {
      const user = await User.create({
        name: 'Marcos',
        email: 'devopmh@gmail.com',
        password_hash: '1234'
      });
  
      const response = await request(app)
        .post('/sessions')
        .send({
          email: user.email,
          password: '12231433456'
        })
      expect(response).toBe(401)
  })
})