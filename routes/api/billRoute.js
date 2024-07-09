import { Router } from "express";
import billController from "../../controllers/billController.js";
import authController from '../.././controllers/authController.js';

const router = Router();

router
  .route('/')
  .get(authController.protect, billController.getAllBills)
  .post(authController.protect, billController.createBill);

router
  .route('/:id')
  .get(authController.protect, billController.getBillById)
  .patch(authController.protect, billController.updateBill)
  .delete(authController.protect, billController.deleteBill);
export default router;