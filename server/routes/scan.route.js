import express from 'express';
import * as scanCtrl from '../controllers/scan.controller';

const scanRoutes = express.Router();

scanRoutes.route('/scan')
    .post((req, res) => {
        scanCtrl.scanresult(req, res)
    })

scanRoutes.route('/localip')
    .get((req, res) => {
        scanCtrl.getlocalip(req, res)
    })

export default scanRoutes;