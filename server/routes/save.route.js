import express from 'express';
import * as saveCtrl from '../controllers/save.controller';

const saveRoutes = express.Router();

saveRoutes.route('/imgurl')
    .post((req, res) => {
        saveCtrl.checkUrl(req, res)
    })

saveRoutes.route('/mysql')
    .post((req, res) => {
        saveCtrl.saveInfo(req, res)
    })

saveRoutes.route('/getall')
    .post((req, res) => {
        saveCtrl.queryInfo(req, res)
    })

saveRoutes.route('/getone')
    .post((req, res) => {
        saveCtrl.queryOne(req, res)
    })

export default saveRoutes;