const { User } = require('../models');

const userData = [
  {
    name: 'user1',
    email: 'user1@hotmail.com',
    password: 'password'
  },
  {
    name: 'user2',
    email: 'user2@hotmail.com',
    password: 'password'
  },
  {
    name: 'user3',
    email: 'user3@hotmail.com',
    password: 'password'
  },
  {
    name: 'user4',
    email: 'user4@hotmail.com',
    password: 'password'
  },
  {
    name: 'user5',
    email: 'user5@hotmail.com',
    password: 'password'
  }
  // {
  //   name: 'Xandromus',
  //   email: 'Xandromus@hotmail.com',
  //   password: 'spac3t1m3'
  // },
  // {
  //   name: 'Lemantino',
  //   email: 'Lemantino@aol.com',
  //   password: 'lun4rl4nd1ng'
  // },
  // {
  //   name: 'taqtics',
  //   email: 'taqtics4@gmail.com',
  //   password: '34zpz##'
  // },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;