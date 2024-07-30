import { Router } from 'express';
import billController from '../../controllers/billController.js';
import authController from '../.././controllers/authController.js';

const router = Router();

router.use(authController.protect);

router
  .route('/')
  .get(authController.checkPermit('readBill'), billController.getAllBills)
  .post(authController.checkPermit('createBill'), billController.createBill);

router
  .route('/:id')
  .get(authController.checkPermit('readBill'), billController.getBillById)
  .patch(authController.checkPermit('updateBill'), billController.updateBill)
  .delete(authController.checkPermit('deleteBill'), billController.deleteBill);

export default router;
