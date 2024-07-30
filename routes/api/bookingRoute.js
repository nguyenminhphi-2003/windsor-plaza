import { Router } from 'express';
import bookingController from '../../controllers/bookingController.js';
import authController from '../../controllers/authController.js';

const router = Router();

router
  .route('/')
  .get(
    authController.checkPermit('readBooking'),
    bookingController.getAllBookings,
  )
  .post(
    authController.checkPermit('createBooking'),
    bookingController.createBooking,
  );

router
  .route('/:id')
  .get(
    authController.checkPermit('readBooking'),
    bookingController.getBookingById,
  )
  .patch(
    authController.checkPermit('updateBooking'),
    bookingController.updateBooking,
  )
  .delete(
    authController.checkPermit('deleteBooking'),
    bookingController.deleteBooking,
  );

export default router;
