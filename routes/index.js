import { Router } from "express";

import roomRoute from './api/roomRoute.js';
import roomTypeRoute from './api/roomTypeRoute.js';
import userRoute from './api/userRoute.js';
import billRoute from './api/billRoute.js';
import bookingRoute from './api/bookingRoute.js';

const router = Router();

// API ROUTES
router.use('/api/v1/rooms', roomRoute);
router.use('/api/v1/room-types', roomTypeRoute);
router.use('/api/v1/users', userRoute);
router.use('/api/v1/bills', billRoute);
router.use('/api/v1/bookings', bookingRoute);

export default router;