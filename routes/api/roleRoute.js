import { Router } from 'express';
import roleController from '../../controllers/roleController.js';
import authController from '../../controllers/authController.js';

const router = new Router();

router.use(authController.protect);

router
  .route('/')
  .get(roleController.getAllRoles)
  .post(roleController.createRole);

router
  .route('/:id')
  .get(roleController.getRoleById)
  .patch(roleController.updateRole)
  .delete(roleController.deleteRole);

export default router;