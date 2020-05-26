const UserEntity = require('../entities/UserEntity');

const FindUser = async (email) => UserEntity.findOne({ email }, (user) => [user]);
const ReturnUser = async (_id) => UserEntity.findOne({ _id }, (user) => [user])
  .select('email -_id  lastName firstName sex age');

const GetAll = async () => UserEntity.find();

const UpdateUser = async (payload) => UserEntity.findOneAndUpdate(
  { _id: payload.searchField },
  {
    $set: {
      ...payload,
    },
  },
  (err, result) => {
    console.log(result);
    console.log(err);
  },
);


const AddUser = async (payload, hash) => {
  const user = new UserEntity({
    passwordHash: hash,
    email: payload.email,
    firstName: payload.firstName,
    lastName: payload.lastName,
    sex: payload.sex,
    age: payload.age,
  });
  await user.save((err) => {
    if (err) return console.error(err);
    return 'user saved to  collection.';
  });
};

module.exports = {
  FindUser,
  AddUser,
  GetAll,
  ReturnUser,
  UpdateUser,
};
