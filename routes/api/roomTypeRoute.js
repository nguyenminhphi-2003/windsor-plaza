import { Router } from 'express';
import roomTypeController from '../.././controllers/roomTypeController.js';
import authController from '../.././controllers/authController.js';

const router = Router();

router
  .route('/')
  .get(
    authController.checkPermit('readRoomType'),
    roomTypeController.getAllRoomTypes,
  )
  .post(
    authController.checkPermit('createRoomType'),
    roomTypeController.createRoomType,
  );

router
  .route('/:id')
  .get(
    authController.checkPermit('readRoomType'),
    roomTypeController.getRoomTypeById,
  )
  .patch(
    authController.checkPermit('updateRoomType'),
    roomTypeController.updateRoomType,
  )
  .delete(
    authController.checkPermit('deleteRoomType'),
    roomTypeController.deleteRoomType,
  );

export default router;
