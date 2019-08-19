import express from 'express';
import scanRoutes from './scan.route';

const router = express.Router();

router.use('/', scanRoutes);

export default router;