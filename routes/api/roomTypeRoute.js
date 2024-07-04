import { Router } from 'express';
import roomTypeController from '../.././controllers/roomTypeController.js';
import authController from '../.././controllers/authController.js';

const router = Router();

router
  .route('/')
  .get(roomTypeController.getAllRoomTypes)
  .post(authController.protect, roomTypeController.createRoomType);

router
  .route('/:id')
  .get(roomTypeController.getRoomTypeById)
  .patch(authController.protect, roomTypeController.updateRoomType)
  .delete(authController.protect, roomTypeController.deleteRoomType);

export default router;
