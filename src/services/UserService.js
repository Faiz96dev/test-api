const UsersRepository = require('../repositories/UsersRepository');

const findUser = (email) => UsersRepository.FindUser(email);

const ReturnUser = (_id) => UsersRepository.ReturnUser(_id);

const UpdateUser = (payload) => {
  Object.keys(payload)
    .forEach(( key) => (payload[key] === '' ? delete payload[key] : {}));
  console.log(payload)
  UsersRepository.UpdateUser(payload);
};

const getAll = () => UsersRepository.GetAll();

module.exports = {
  findUser,
  getAll,
  ReturnUser,
  UpdateUser,
};
