import { Router } from 'express';
import roomController from '../.././controllers/roomController.js';
import authController from '../.././controllers/authController.js';

const router = Router();

router.use(authController.protect);

router
  .route('/')
  .get(authController.checkPermit('readRoom'), roomController.getAllRooms)
  .post(authController.checkPermit('createRoom'), roomController.createRoom);

router
  .route('/:id')
  .get(authController.checkPermit('readRoom'), roomController.getRoomById)
  .patch(authController.checkPermit('updateRoom'), roomController.updateRoom)
  .delete(authController.checkPermit('deleteRoom'), roomController.deleteRoom);

export default router;
