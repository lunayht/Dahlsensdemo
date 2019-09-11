import express from 'express';
import * as scanCtrl from '../controllers/scan.controller';

const scanRoutes = express.Router();

scanRoutes.route('/scan')
    .post((req, res) => {
        scanCtrl.scanResult(req, res)
    })

export default scanRoutes;