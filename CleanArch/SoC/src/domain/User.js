const { attributes } = require('structure');

const User = attributes({
  id: Number,
  name: {
    type: String,
    required: true
  },
  age: Number
})(class User {
  isLegal() {
    return this.age >= User.MIN_LEGAL_AGE;
  }
});

User.MIN_LEGAL_AGE = 18;

module.exports = User;