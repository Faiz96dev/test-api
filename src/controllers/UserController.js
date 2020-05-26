const { Router } = require('express');
const logger = require('../services/LoggerService');
const { errors } = require('../constants/messages');
const UserService = require('../services/UserService');

const UserRouter = Router();

UserRouter.post('/me', async (req, res) => {
  try {
    const { _id } = req.body;
    const user = await UserService.ReturnUser(_id);
    return res.status(200).json(user);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

UserRouter.post('/me/update', async (req, res) => {
  try {
    const payload = req.body;
    const user = await UserService.UpdateUser(payload);
    return res.status(200).json(user);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});

UserRouter.get('/all', async (req, res) => {
  try {
    const user = await UserService.getAll();
    return res.status(200).json(user);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json(errors.common[500]);
  }
});


module.exports = UserRouter;
