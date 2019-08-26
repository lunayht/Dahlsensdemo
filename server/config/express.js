import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import methodOverride from 'method-override';

import constant from '../config/directory';

const app = express();

require('dotenv').config();

app.set('port', 5000);
app.set('host', 'localhost');

app.use(express.static(constant.distDir));

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(methodOverride());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false }));
app.use(morgan('dev'));
app.use(express.static(constant.assetsDir));

export default app;