

import express from 'express';
import morgan from 'morgan';
import {config} from 'dotenv';
import productsRouter from './routes/products.routes.js'
config();
const app = express();
//setings
app.set('view engine', 'ejs');
//Mindlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); //morgan usa perfiles el perfil que estamos usando es de desarrollo
app.use('/api/products', productsRouter);//
export default app;
