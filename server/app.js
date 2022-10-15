import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';

const app = express();
dotenv.config();

app.use('/',indexRouter);

app.use(bodyParser.json({limit:'30mb',extended:true})); // Limit denotes max req body size.
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

const CONNECTION_URL = process.env.db_CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// Connecting to database 
mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=>app.listen(PORT,()=>console.log(`✅ Server running on ${PORT}`)))
  .catch((error)=>console.log(`❌ ${error}`))

