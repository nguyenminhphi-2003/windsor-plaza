import { Router } from 'express';
import roomController from '../.././controllers/roomController.js';

const router = Router();

router
  .route('/')
  .get(roomController.getAllRooms)
  .post(roomController.createRoom);

router
  .route('/:id')
  .get(roomController.getRoomById)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

export default router;
