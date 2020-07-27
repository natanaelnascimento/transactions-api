import express from 'express';
import transactionsController from '../controllers/transactions.js';

const router = express.Router();

router.post('/', transactionsController.create);
router.get('/', transactionsController.find);
router.get('/:id', transactionsController.findById);
router.put('/:id', transactionsController.update);
router.delete('/:id', transactionsController.remove);

export default router;
