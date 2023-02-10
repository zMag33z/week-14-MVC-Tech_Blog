const { User } = require('../models');

const userData = [
  {
    name: 'Xandromus',
    email: 'Xandromus@hotmail.com',
    password: 'spac3t1m3'
  },
  {
    name: 'Lemantino',
    email: 'Lemantino@aol.com',
    password: 'lun4rl4nd1ng'
  },
  {
    name: 'MaG33',
    email: 'MaG33@gmail.com',
    password: '34zpz##'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;