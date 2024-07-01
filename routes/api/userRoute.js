import { Router } from 'express';
import userController from '../../controllers/userController.js';

const router = Router();

router
  .route('/')
  .get(userController.getAllUsers)
  // 🚨🚨🚨 ONLY USE 'userController.createUser' FOR TESTING PURPOSES, DO NOT USE IN PRODUCTION
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
