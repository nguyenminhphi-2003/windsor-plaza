import { Router } from 'express';
import userController from '../../controllers/userController.js';
import authController from '../../controllers/authController.js';

const router = Router();

router.post('/login', authController.login);
router.post('/signup', authController.signup);

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
