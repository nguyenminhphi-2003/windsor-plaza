import { Router } from "express";

import roomRoute from './api/roomRoute.js';
import roomTypeRoute from './api/roomTypeRoute.js';
import userRoute from './api/userRoute.js';

const router = Router();

// API ROUTES
router.use('/api/v1/rooms', roomRoute);
router.use('/api/v1/room-types', roomTypeRoute);
router.use('/api/v1/users', userRoute);

export default router;