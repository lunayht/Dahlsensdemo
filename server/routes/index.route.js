import express from 'express';
import scanRoutes from './scan.route';
import saveRoutes from './save.route';
import configRoutes from './config.route';

const router = express.Router();

router.use('/', scanRoutes);
router.use('/', saveRoutes);
router.use('/', configRoutes);

export default router;