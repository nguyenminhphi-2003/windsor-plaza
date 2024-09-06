import { Router } from 'express';
import userController from '../../controllers/userController.js';
import authController from '../../controllers/authController.js';

const router = Router();

router.post('/login', authController.login);
router.post('/signup', authController.signup);

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/me', userController.getMe, userController.getUserById);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

router
  .route('/')
  .get(authController.checkPermit('readUser'), userController.getAllUsers);

router
  .route('/:id')
  .get(authController.checkPermit('readUser'), userController.getUserById)
  .patch(authController.checkPermit('updateUser'), userController.updateUser)
  .delete(authController.checkPermit('deleteUser'), userController.deleteUser);

export default router;
