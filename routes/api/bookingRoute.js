import { Router } from 'express';
import bookingController from '../../controllers/bookingController.js';
import authController from '../../controllers/authController.js';

const router = Router();

router.use(authController.protect);

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBookingById)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

export default router;
