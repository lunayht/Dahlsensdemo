import express from 'express';
import * as saveCtrl from '../controllers/save.controller';

const saveRoutes = express.Router();

saveRoutes.route('/imgurl')
    .post((req, res) => {
        saveCtrl.checkurl(req, res)
    })

saveRoutes.route('/mysql')
    .post((req, res) => {
        saveCtrl.saveinfo(req, res)
    })

saveRoutes.route('/getall')
    .post((req, res) => {
        saveCtrl.queryinfo(req, res)
    })

saveRoutes.route('/getone')
    .post((req, res) => {
        saveCtrl.queryone(req, res)
    })

export default saveRoutes;