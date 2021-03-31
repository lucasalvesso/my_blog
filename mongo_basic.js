print('==============---------- Start ----------==============');

db = db.getSiblingDB('user_db');
db.createUser(
  {
    user: 'user_master',
    pwd: '1234',
    roles: [{ role: 'readWrite', db: 'user_db' }],
  },
);
db.createCollection('users');

print('==============---------- END ----------==============');
