import express from 'express';
import scanRoutes from './scan.route';
import saveRoutes from './save.route';

const router = express.Router();

router.use('/', scanRoutes);
router.use('/', saveRoutes);

export default router;