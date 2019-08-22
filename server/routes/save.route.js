import express from 'express';
import * as saveCtrl from '../controllers/save.controller';

const saveRoutes = express.Router();

saveRoutes.route('/imgurl')
    .post((req, res) => {
        saveCtrl.savescreenshot(req, res)
    })

export default saveRoutes;