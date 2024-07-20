import { Router } from "express";
import permissionController from "../../controllers/permissionController.js";
import authController from "../../controllers/authController.js";

const router = Router();

router.use(authController.protect);

router
  .route('/')
  .get(permissionController.getAllPermissions)
  .post(permissionController.createPermission);

router
  .route('/:id')
  .get(permissionController.getPermissionById)
  .patch(permissionController.updatePermission)
  .delete(permissionController.deletePermission);

export default router;