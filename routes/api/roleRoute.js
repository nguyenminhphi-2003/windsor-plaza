import { Router } from 'express';
import roleController from '../../controllers/roleController.js';

const router = new Router();

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