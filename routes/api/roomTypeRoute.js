import { Router } from 'express';
import roomTypeController from '../.././controllers/roomTypeController.js';

const router = Router();

router
  .route('/')
  .get(roomTypeController.getAllRoomTypes)
  .post(roomTypeController.createRoomType);

router
  .route('/:id')
  .get(roomTypeController.getRoomTypeById)
  .patch(roomTypeController.updateRoomType)
  .delete(roomTypeController.deleteRoomType);

export default router;
