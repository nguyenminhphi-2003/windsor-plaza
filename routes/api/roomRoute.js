import { Router } from 'express';
import roomController from '../.././controllers/roomController.js';

const router = Router();

router.route('/').get(roomController.getAllRooms);

export default router;