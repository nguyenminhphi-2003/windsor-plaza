import { Router } from 'express';
import roleController from '../../controllers/roleController.js';
import authController from '../../controllers/authController.js';

const router = new Router();

router.use(authController.protect);

router
  .route('/')
  .get(authController.checkPermit('readRole'), roleController.getAllRoles)
  .post(authController.checkPermit('createRole'), roleController.createRole);

router
  .route('/:id')
  .get(authController.checkPermit('readRole'), roleController.getRoleById)
  .patch(authController.checkPermit('updateRole'), roleController.updateRole)
  .delete(authController.checkPermit('deleteRole'), roleController.deleteRole);

export default router;
