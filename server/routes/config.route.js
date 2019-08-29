import express from 'express';
import * as configCtrl from '../controllers/config.controller';

const configRoutes = express.Router()

configRoutes.route('/config')
    .post((req, res) => {
        configCtrl.configurl(req, res)
    })

export default configRoutes;