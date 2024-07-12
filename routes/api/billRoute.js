import { Router } from "express";
import billController from "../../controllers/billController.js";
import authController from '../.././controllers/authController.js';

const router = Router();

router.use(authController.protect);

router
  .route('/')
  .get(billController.getAllBills)
  .post(billController.createBill);

router
  .route('/:id')
  .get(billController.getBillById)
  .patch(billController.updateBill)
  .delete(billController.deleteBill);
export default router;