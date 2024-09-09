import { Router } from 'express';
import permissionController from '../../controllers/permissionController.js';
import authController from '../../controllers/authController.js';

const router = Router();

router.use(authController.protect);

router
  .route('/')
  .get(
    authController.checkPermit('readPermission'),
    permissionController.getAllPermissions,
  )
  .post(
    authController.checkPermit('createPermission'),
    permissionController.createPermission,
  );

router
  .route('/:id')
  .get(
    authController.checkPermit('readPermission'),
    permissionController.getPermissionById,
  )
  .patch(
    authController.checkPermit('updatePermission'),
    permissionController.updatePermission,
  )
  .delete(
    authController.checkPermit('deletePermission'),
    permissionController.deletePermission,
  );

export default router;
